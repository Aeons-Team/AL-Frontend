import { useEffect, useState, useRef } from 'react'
import io, { Socket } from 'socket.io-client'
import * as S from './style'

interface Message {
    from?: 'me' | 'ai'
    text: string
}

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([])
    const [currentMessage, setCurrentMessage] = useState<Message>()

    const socketRef = useRef<Socket>()
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        const socket = io(import.meta.env.VITE_PUBLIC_API_URL)

        socketRef.current = socket

        socket.on('message-start', () => {
            setCurrentMessage({ from: 'ai', text: '' })
        })
        
        socket.on('message-end', () => {
            setCurrentMessage(currentMessage => {
                if (currentMessage) setMessages(messages => [...messages, currentMessage])
                return undefined
            })
        })

        socket.on('message-text', (msg: Message) => {
            setCurrentMessage(currentMessage => {
                if (currentMessage) {
                    currentMessage.text += msg.text
                    return { ...currentMessage }
                }
            })
        })

        socket.on('message-error', (error: any) => {

        })

        socket.connect()
    }, [])

    const send = () => {
        const socket = socketRef.current
        const input = inputRef.current

        if (socket && input) {
            const msg: any = {
                text: input.value
            }
    
            socket.emit('message', msg)

            msg.from = 'me'
    
            setMessages(messages => [...messages, msg])

            input.value = ""
        }
    }

    return (
        <S.Chat className='chat'>
            <S.ChatMessages>
                {
                    messages.map((message, i) => (
                        <S.ChatMessage key={i} from={message.from}>{message.text}</S.ChatMessage>
                    ))
                }

                {
                    currentMessage && currentMessage.text &&
                    <S.ChatMessage from={currentMessage.from}>{currentMessage.text}</S.ChatMessage>
                }
            </S.ChatMessages>

            <S.ChatInput ref={inputRef} className='chat-input' onKeyDown={(e) => e.key == 'Enter' && send()} />
        </S.Chat>
    )
}