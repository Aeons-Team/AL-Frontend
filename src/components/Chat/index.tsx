import { useRef, useLayoutEffect } from 'react'
import { useChatStore, useChatStoreShallow } from '../../data/ChatStore'
import * as S from './style'

export default function Chat() {
    const { initialize, messages, currentMessage, disableInput, sendMessage } = useChatStoreShallow(state => ({
        initialize: state.initialize,
        messages: state.messages,
        currentMessage: state.currentMessage,
        disableInput: state.disableInput,
        sendMessage: state.sendMessage
    }))

    const inputRef = useRef<HTMLInputElement>(null)

    useLayoutEffect(() => {
        initialize()
    }, [])

    const send = () => {
        const input = inputRef.current

        if (input) {
            useChatStore.setState({ disableInput: true })
            sendMessage(input.value)

            input.value = ''
        }
    }

    return (
        <S.Chat>
            <S.ChatMessages>
                {
                    messages.map((message, i) => (
                        <S.ChatMessage key={i} from={message.from}>{message.text}</S.ChatMessage>
                    ))
                }

                {
                    currentMessage && <S.ChatMessage from='ai'>{currentMessage}</S.ChatMessage>
                }
            </S.ChatMessages>

            <S.ChatInput ref={inputRef} disabled={disableInput} onKeyDown={(e) => e.key == 'Enter' && send()} />
        </S.Chat>
    )
}