import styled,{css} from 'styled-components'

interface ButtonProps {
    primary?: boolean
}

export const Topbar = styled.div`
    color: white;
    position: absolute;
    width: 100%;
    height: 77px;
    left: 0px;
    top: 0px;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
`
export const Text= styled.div`
    
    position: absolute;
    width: 10vw;
    height: 3vw;
    left: 5vw;
    top: 1vw;
    font-size: 2vw;
    line-height: 5rem;
    
`;

export const Button = styled.button<ButtonProps>`
    position: absolute;
    
    border-radius: 0.25rem;
    border: 1px solid ${props => props.theme.colors.primary5};
    color: ${props => props.theme.colors.primary5};
    
    width: 10vw;
    height: 3vw;
    right: 5vw;
    top: 2vw;
    

    ${props => props.primary && css`
        background: ${props => props.theme.colors.primary5};
        color: white;
    `}
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
`; 
  