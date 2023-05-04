import { useRef, useLayoutEffect, useEffect } from 'react'
import { useChatStore, useChatStoreShallow } from '../../data/ChatStore'
import Icon from '../Icon'
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

    useEffect(() => {
        document.documentElement.style.overflowY = enabled ? 'hidden' : 'auto'
    }, [enabled])

    const send = () => {
        const input = inputRef.current

        if (input) {
            useChatStore.setState({ disableInput: true })
            sendMessage(input.value)

            input.value = ''
        }
    }

    const togglerVariants = {
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

    const chatInnerVariants = {
        disabled: {
            width: 0
        },

        enabled: {
            width: 450,
            maxWidth: '100vw',
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 19
            }
        }
    }

    return (
        <S.Chat onClick={onChatBgClick} initial={'disabled'} animate={enabled ? 'enabled' : 'disabled'}>
            <S.ChatToggler variants={togglerVariants}>
                <Icon name='chat' width='1rem' height='1rem' />
            </S.ChatToggler>

            {
                enabled &&
                <S.ChatInner variants={chatInnerVariants}>
                    <S.Ava>
                        
                    </S.Ava>

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