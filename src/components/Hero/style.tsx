import styled, { css } from 'styled-components'

export const Hero = styled.div`
    padding: 5rem 6rem;
    height: 80vh;
    @media (max-width: 820px) {
        padding: 5rem 2rem;
    }
    @media (max-width: 550px) {
        padding: 5rem 2rem;
    }
`
    
export const Title = styled.div`
    font-weight: 200;
    font-size: 4.5rem;
    @media (max-width: 820px) {
        font-size: 5rem;
    }
    @media (max-width: 550px) {
        font-size: 3rem;
    }
`;

export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    @media (max-width: 820px) {
        font-size: 1.2rem;
    }
    @media (max-width: 550px) {
        font-size: 1rem;
    }
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
    @media (max-width: 820px) {
        ${props => props.number == 1 && css`
            top: 700px;
            left: 2rem;
        `}
        ${props => props.number == 2 && css`
            top: 500px;
            right: 2rem;
        `}
    }
    @media (max-width: 550px) {
        ${props => props.number == 1 && css`
            top: 600px;
            left: 2rem;
        `}
        ${props => props.number == 2 && css`
            top: 400px;
            right: 2rem;
        `}
    }
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
    }
`;   

