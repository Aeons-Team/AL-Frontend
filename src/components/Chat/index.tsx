import { useRef, useLayoutEffect, useEffect } from 'react'
import { useChatStore, useChatStoreShallow } from '../../data/ChatStore'
import { theme } from '../../data/ThemeContext'
import Spinner from 'react-spinner-material'
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

    const chatMessageVariants = (streaming: boolean) => ({
        disabled: {
            y: -10,
            opacity: 0
        },

        enabled: {
            y: 0,
            opacity: 1,
            transition: {
                delay: streaming ? 0 : 0.2,
                ...theme.chatTransition
            }
        }
    })

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

    const messagesWithCurrent: any[] = [...messages]

    if (currentMessage) messagesWithCurrent.push({ from: 'ai', text: currentMessage, streaming: true })

    if (connected && disableInput && (currentMessage == null || currentMessage == '')) messagesWithCurrent.push({
        from: 'ai',
        text: <Spinner color='var(--color-secondary)' stroke={2} radius={14} style={{ margin: '2px' }} />  
    })

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
                            messagesWithCurrent.map((message, i) => (
                                <S.ChatMessage variants={chatMessageVariants(message.streaming)} key={i} from={message.from}>{message.text}</S.ChatMessage>
                            ))
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