import { create } from 'zustand'
import { shallow } from 'zustand/shallow'
import io, { Socket } from 'socket.io-client'

interface Message {
    from?: 'me' | 'ai'
    text: string,
    streaming?: boolean
}

interface ChatState {
    messages: Message[],
    currentMessage: string | null,
    disableInput: boolean,
    initialized: boolean,
    connected: boolean,
    enabled: boolean,
    socket: Socket | null,
    initialize: Function,
    sendMessage: (text: string) => void
}

const initialMessage = 'Hey there, I am Ava, Aeons GPT powered chat assistant, How may I help you?'

export const useChatStore = create<ChatState>((set, get) => ({
    messages: [],
    currentMessage: null,
    disableInput: true,
    initialized: false,
    connected: false,
    enabled: false,
    socket: null,
    initialize: () => {
        const socket = io(import.meta.env.VITE_PUBLIC_API_URL, {
            transports: ['websocket']
        })

        const onResponseStart = () => {
            set({ currentMessage: '' })
        }

        const onResponseEnd = () => {
            const { messages, currentMessage } = get()

            if (currentMessage == null) throw new Error('happy typescript? :)')

            set({
                disableInput: false,
                currentMessage: null,
                messages: [...messages, { from: 'ai', text: currentMessage }]
            })
        }

        const onResponseText = (msg: Message) => {
            const { currentMessage } = get()

            if (currentMessage == null) throw new Error('happy typescript? :)')

            set({ currentMessage: currentMessage + msg.text })
        }


        socket.on('connect', () => {
            const split = initialMessage.split(' ')

            set({ connected: true })

            onResponseStart()

            for (let i = 0; i < split.length; ++i) {
                if (i < split.length - 1) {
                    setTimeout(() => onResponseText({ from: 'ai', text: split[i] + ' ' }), i * 50)
                }

                else {
                    setTimeout(() => {
                        onResponseText({ from: 'ai', text: split[i] })
                        onResponseEnd()
                    }, i * 50)
                }
            }
        })

        socket.on('response-start', onResponseStart)

        socket.on('response-end', onResponseEnd)

        socket.on('response-text', onResponseText)

        socket.on('response-error', (_) => { })

        socket.connect()

        set({ socket, initialized: true })
    },

    sendMessage: (text: string) => {
        const { socket, messages } = get()

        if (!socket) throw new Error('attempting to send message before initializing chat')

        socket.emit('message', { text })

        set({ messages: [...messages, { from: 'me', text }] })
    }
}))

export function useChatStoreShallow<T>(selector: (state: ChatState) => T) {
    return useChatStore<T>(selector, shallow)
}