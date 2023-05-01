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
    width: 10rem;
    height: 3rem;
    left: 5rem;
    top: 2rem;
    font-weight: 300;
    font-size: 2rem;
    line-height: 5rem;
    
`;

export const Button = styled.button<ButtonProps>`
    position: fixed;
    
    border-radius: 0.25rem;
    border: 1px solid ${props => props.theme.colors.primary4};
    color: ${props => props.theme.colors.primary5};
    
    width: 10rem;
    height: 3rem;
    right: 5rem;
    top: 2rem;
    

    ${props => props.primary && css`
        background: ${props => props.theme.colors.primary4};
        color: white;
    `}
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
`; 
  