import styled, { css } from 'styled-components'

export interface ButtonProps {
    primary?: boolean
}

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
`