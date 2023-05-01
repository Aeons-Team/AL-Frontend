import styled,{css} from 'styled-components'
import { motion } from 'framer-motion'

interface ButtonProps {
    primary?: boolean
}

export const Hero = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5rem;
    padding-top: 8rem;
`

export const Button = styled.button<ButtonProps>`
    background: transparent;
    border-radius: 4px;
    border: 1px solid #8050E4;
    color: #8050E4;
    padding: 0.75rem 1rem;
    margin-top: 2rem;
    width: 12rem;

    ${props => props.primary && css`
        background: ${props => props.theme.colors.active};
        color: white;
    `}
`;
    
export const Title = styled(motion.div)`
    font-size: 8rem;
    text-align: left;
    color: white;
`;

export const Text = styled(motion.p)`
    font-size: 1.5em;
    text-align: left;
    color: white;
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
`;   

