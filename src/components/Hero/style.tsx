import styled, { css } from 'styled-components'

export const Hero = styled.div`
    padding: 5rem 6rem;
`
    
export const Title = styled.div`
    font-weight: 200;
    font-size: 4.5rem;
`;

export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
`;

interface SideTextProps {
    number: number
}

export const SideText = styled.div<SideTextProps>`
    position: absolute;

    ${props => props.number == 1 && css`
        top: 600px;
        left: 4rem;
    `}

    ${props => props.number == 2 && css`
        top: 450px;
        right: 4rem;
    `}
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
`;   

