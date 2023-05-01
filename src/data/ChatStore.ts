import { create } from 'zustand'
import { shallow } from 'zustand/shallow'
import io, { Socket } from 'socket.io-client'

interface Message {
    from?: 'me' | 'ai'
    text: string
}

interface ChatState {
    messages: Message[],
    currentMessage: string | null,
    disableInput: boolean,
    socket: Socket | null,
    initialize: Function,
    sendMessage: (text: string) => void
}

export const useChatStore = create<ChatState>((set, get) => ({
    messages: [],
    currentMessage: null,
    disableInput: false,
    socket: null,
    initialize: () => {
        const socket = io(import.meta.env.VITE_PUBLIC_API_URL)

        socket.on('response-start', () => {
            set({ currentMessage: '' })
        })

        socket.on('response-end', () => {
            const { messages, currentMessage } = get()

            if (currentMessage == null) throw new Error('happy typescript? :)')

            set({
                disableInput: false,
                currentMessage: null,
                messages: [...messages, { from: 'ai', text: currentMessage }]
            })
        })

        socket.on('response-text', (msg: Message) => {
            const { currentMessage } = get()

            if (currentMessage == null) throw new Error('happy typescript? :)')

            set({ currentMessage: currentMessage + msg.text })
        })

        socket.on('response-error', (error: any) => { })

        socket.connect()

        set({ socket })
    },

    sendMessage: (text: string) => {
        const { socket, messages } = get()

        if (!socket) throw new Error('attempting to send message before initializing chat')

        socket.emit('message', text)

        set({ messages: [...messages, { from: 'me', text }] })
    }
}))

export function useChatStoreShallow<T>(selector: (state: ChatState) => T) {
    return useChatStore<T>(selector, shallow)
}