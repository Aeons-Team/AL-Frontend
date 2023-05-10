import { useRef, useLayoutEffect, useEffect } from 'react'
import { useChatStore, useChatStoreShallow } from '../../data/ChatStore'
import { theme } from '../../data/ThemeContext'
import Icon from '../Icon'
import * as S from './style'

export default function Chat() {
    const { initialize, initialized, enabled, messages, currentMessage, disableInput, sendMessage, connected } = useChatStoreShallow(state => ({
        initialize: state.initialize,
        initialized: state.initialized,
        enabled: state.enabled,
        messages: state.messages,
        currentMessage: state.currentMessage,
        disableInput: state.disableInput,
        sendMessage: state.sendMessage,
        connected: state.connected
    }))

    const inputRef = useRef<HTMLInputElement>(null)
    const chatMessagesRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (enabled && !initialized) {
            initialize()
        }
    }, [enabled, initialized])

    useEffect(() => {
        document.documentElement.style.overflowY = enabled ? 'hidden' : 'auto'
    }, [enabled])

    useEffect(() => {
        const chatMessages = chatMessagesRef.current 

        if (chatMessages) {
            chatMessages.scrollTop = chatMessages.scrollHeight
        }
    }, [currentMessage, messages.length])

    const send = () => {
        const input = inputRef.current

        if (input && input.value) {
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
            width: 0,
            transition: theme.chatTransition
        },

        enabled: {
            width: 450,
            maxWidth: '100vw',
            transition: theme.chatTransition
        }
    }

    const avaStatusTransition = {
        online: {
            backgroundColor: theme.colors.green,
            transition: theme.chatTransition
        },

        offline: {
            backgroundColor: theme.colors.red,
            transition: theme.chatTransition
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
                        <S.AvaStatus variants={avaStatusTransition} initial='offline' animate={connected ? 'online' : 'offline'} />
                        <S.AvaName>Ava</S.AvaName>

                        <S.Close onClick={() => useChatStore.setState({ enabled: false })}>
                            <Icon name='cross' width='0.75rem' height='0.75rem' />
                        </S.Close>
                    </S.Ava>

                    <S.ChatMessages ref={chatMessagesRef}>
                        {
                            messages.map((message, i) => (
                                <S.ChatMessage key={i} from={message.from}>{message.text}</S.ChatMessage>
                            ))
                        }

                        {
                            currentMessage && <S.ChatMessage from='ai'>{currentMessage}</S.ChatMessage>
                        }
                    </S.ChatMessages>

                    <S.ChatInputParent>
                        <S.ChatInput ref={inputRef} maxLength={500} rows={1} disabled={disableInput} onKeyDown={(e) => e.key == 'Enter' && send()} />
                        <S.ChatSend onClick={send}>
                            <Icon name='send' width='0.9rem' height='0.9rem' />
                        </S.ChatSend>
                    </S.ChatInputParent>
                </S.ChatInner>
            }
        </S.Chat>
    )
}