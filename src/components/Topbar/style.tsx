import styled,{css} from 'styled-components'

interface ButtonProps {
    primary?: boolean
}

export const Fade = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: -1;
`

export const Topbar = styled.div`
    display: flex;
    position: sticky;
    width: 100%;
    left: 0;
    top: 0;
    padding: 1.75rem;
`
export const Text = styled.div`
    font-weight: 200;
    font-size: 1.1rem;
`;

export const Button = styled.button<ButtonProps>`
    border-radius: 6px;
    border: 1px solid ${props => props.theme.colors.primary5};
    color: ${props => props.theme.colors.secondary};
    margin-left: auto;
    padding: 0.85rem 1.9rem;

    ${props => props.primary && css`
        background: ${props => props.theme.colors.primary5};
    `}
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
`; 
  