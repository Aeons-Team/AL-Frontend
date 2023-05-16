import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
`;   

export const ButtonOne = styled.div`
    height: 15%;
    width: 6px;
    background-color: ${props => props.theme.colors.primary};
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    position: absolute;
    right: -5px;
    top: 20%;
`;

export const ButtonTwo = styled.div`
    height: 10%;
    width: 6px;
    background-color: ${props => props.theme.colors.primary};
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    position: absolute;
    right: -5px;
    top: 36.5%;
`;

export const TabletVideo = styled.video<any>`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
`

export const Tablet = styled.div`
    border-radius: 30px;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    padding: 1.8%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: calc(100% - 100px);

    @media (max-width: 1000px) {
        width: 100%;
    }
`

export const FeatureTitle = styled.div`
    font-size: 1.5rem;
    opacity: 0.9;

    @media (max-width: 1000px) {
        padding: 0 0.5rem;
        font-size: 1.25rem;
    }
    
    @media (max-width: 550px) {
        font-size: 0.9rem;
    }
`

export const FeatureText = styled.div`
    font-size: 1.2rem;
    opacity: 0.9;
    font-weight: 300;

    @media (max-width: 1000px) {
        padding: 0 0.5rem;
        font-size: 1rem;
    }
    
    @media (max-width: 550px) {
        font-size: 0.8rem;
    }
`

interface FeatureProps {
    right?: boolean
}

export const Feature = styled.div<FeatureProps>`
    height: 200vh;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
    position: relative;
    padding: 0 4rem;

    ${props => props.right && css`
        align-items: flex-end;
        text-align: right;
    `}

    @media (max-width: 1000px) {
        padding: 0rem 1rem;
    }
    @media (max-width: 550px) {
        padding: 0rem 0.5rem;
    }
`

export const Svg = styled(motion.svg)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    stroke-width: 2;
    stroke: ${props => props.theme.colors.active};

    &:nth-child(1) {
        opacity: 0.3;
    }

    &:nth-child(2) {
        opacity: 0.7;
    }
`

export const Features = styled.div`
    padding: 5rem 0;
    position: relative;
    pointer-events: auto;
    background-color: ${props => props.theme.colors.background};
`

