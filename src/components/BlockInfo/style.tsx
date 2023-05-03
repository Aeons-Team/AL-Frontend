import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ContractTitle = styled.span`
    font-size: 0.8rem;
    color: ${props => props.theme.colors.active};
`

export const ContractKey = styled.span`

`

export const ContractValue = styled.span`
    width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre;
`

export const ContractInfo = styled.div`
    display: flex;
    gap: 0.25rem;
    font-weight: 300;
`

export const Contract = styled.div`
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`

export const BlockInfo = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    padding: 1rem;
    background-color: ${props => props.theme.colors.primary2};
    color: ${props => props.theme.colors.secondary};
    border-radius: 5px;
`