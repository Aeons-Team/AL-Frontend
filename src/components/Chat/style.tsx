import styled from 'styled-components'
import { motion } from 'framer-motion'

interface ChatMessageParams {
    from?: string
}

interface WithRef {
    ref?: any
}

export const ChatInput = styled.textarea<WithRef>`
    border: none;
    outline: none;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    padding: 0.5rem 1rem;
    flex-grow: 1;
    overflow: hidden;
    resize: none;
`

export const ChatSend = styled.button`
    background-color: ${props => props.theme.colors.chatMessage};
    padding: 0 1rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    cursor: pointer;
`

export const ChatInputParent = styled.div`
    width: 100%;
    justify-self: flex-end;
    align-self: center;
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
`

export const ChatMessage = styled(motion.div)<ChatMessageParams>`
    display: flex;
    align-self: ${props => props.from == 'me' ? 'flex-end' : 'flex-start'};
    justify-content: ${props => props.from == 'me' ? 'flex-end' : 'flex-start'};
    color: ${props => props.theme.colors.secondary};
    word-break: break-words;
    max-width: 90%;
    font-size: 0.8rem;
    background-color: ${props => props.theme.colors.chatMessage};
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;
`

export const ChatMessages = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    padding: 1rem 0.75rem;
    padding-top: 1.25rem;

    &::-webkit-scrollbar {
        background: none;
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: ${props => props.theme.colors.chatMessage};
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${props => props.theme.colors.chatMessage + 'aa'};
    }
`

export const ChatToggler = styled(motion.div)`
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary2};
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 100%;
    cursor: pointer;
    transition: background-color 500ms;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }
`

export const AvaStatus = styled(motion.span)`
    display: inline-block;
    height: 6px;
    width: 6px;
    border-radius: 100%;
`

export const AvaName = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const Close = styled.span`
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    margin-left: auto;
    position: absolute;
    right: 0.8rem;
    cursor: pointer;
`

export const Ava = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 1.85rem 1.25rem;
    padding-bottom: 1rem;
    font-size: 0.8rem;
`

export const ChatInner = styled(motion.div)`
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 5;
`

export const Chat = styled(motion.div)`
    position: fixed;
    right: 0;
    top: 0;
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.primary2};
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
`