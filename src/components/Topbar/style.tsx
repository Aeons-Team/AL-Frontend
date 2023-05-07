import styled,{css} from 'styled-components'

interface ButtonProps {
    primary?: boolean
}

export const Fade = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
    z-index: -1;
`

export const Topbar = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    padding: 1.75rem;
    pointer-events: none;
    z-index: 5;
`
export const Text = styled.div`
    font-weight: 200;
    font-size: 1.1rem;
`;

export const Button = styled.button<ButtonProps>`
    border-radius: 6px;
    border: 1px solid ${props => props.theme.colors.primary2};
    color: ${props => props.theme.colors.secondary};
    margin-left: auto;
    padding: 0.85rem 1.9rem;
    pointer-events: auto;
    cursor: pointer;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);

    ${props => props.primary && css`
        background: ${props => props.theme.colors.primary2};
    `}
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
`; 
  