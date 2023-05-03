import styled from 'styled-components'
import { motion } from 'framer-motion'
import Icon from '../Icon'

interface ChatMessageParams {
    from?: string
}

export const ChatInput = styled.input`
    width: calc(100% - 2rem);
    align-self: center;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    justify-self: flex-end;
`

export const ChatMessage = styled.div<ChatMessageParams>`
    display: flex;
    align-self: ${props => props.from == 'me' ? 'flex-end' : 'flex-start'};
    justify-content: ${props => props.from == 'me' ? 'flex-end' : 'flex-start'};
    color: ${props => props.theme.colors.secondary};
    word-break: break-all;
    max-width: 90%;
    font-size: 0.8rem;
    background-color: ${props => props.theme.colors.chatMessage};
    padding: 0.2rem 0.4rem;
    border-radius: 0.5rem;
`

export const ChatMessages = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
    padding: 1rem 0.5rem;
`

export const ChatIcon = styled(Icon)`
    position: fixed;
    right: 3.45rem;
    bottom: 3.4rem;
`

export const ChatBg = styled(motion.div)`
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 4rem;
    height: 4rem;
    background-color: ${props => props.theme.colors.primary2};
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
    border-radius: 100%;
`

export const Chat = styled(motion.div)`

`

