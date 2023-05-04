import { useRef, useLayoutEffect } from 'react'
import { useChatStore, useChatStoreShallow } from '../../data/ChatStore'
import * as S from './style'

export default function Chat() {
    const { initialize, initialized, enabled, messages, currentMessage, disableInput, sendMessage } = useChatStoreShallow(state => ({
        initialize: state.initialize,
        initialized: state.initialized,
        enabled: state.enabled,
        messages: state.messages,
        currentMessage: state.currentMessage,
        disableInput: state.disableInput,
        sendMessage: state.sendMessage
    }))

    const inputRef = useRef<HTMLInputElement>(null)

    useLayoutEffect(() => {
        if (enabled && !initialized) {
            initialize()
        }
    }, [enabled, initialized])

    const send = () => {
        const input = inputRef.current

        if (input) {
            useChatStore.setState({ disableInput: true })
            sendMessage(input.value)

            input.value = ''
        }
    }

    const chatBgVariants = {
        disabled: {
            cursor: 'pointer'
        },

        enabled: {
            scale: 60,
            cursor: 'default',
            transition: {
                ease: [.77,0,.3,.99],
                duration: 0.6,
                delay: 0.1
            }
        }
    }

    const chatIconvariants = {
        disabled: {
            opacity: 1,
            y: 0
        },

        enabled: {
            opacity: 0,
            y: 6
        }   
    }

    const onChatBgClick = () => {
        if (!enabled) {
            useChatStore.setState({ enabled: true })
        }
    }

    return (
        <S.Chat onClick={onChatBgClick} initial={'disabled'} animate={enabled ? 'enabled' : 'disabled'}>
            <S.ChatBg variants={chatBgVariants} />
            
            <S.ChatIcon variants={chatIconvariants} name='chat' width='1rem' height='1rem' />

            {
                enabled &&
                <S.ChatInner>
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
                </S.ChatInner>
            }
        </S.Chat>
    )
}