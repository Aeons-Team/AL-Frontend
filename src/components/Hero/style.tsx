import styled from 'styled-components'
import Button from '../Button';

export const Hero = styled.div`
    padding: 5rem 6rem;
    height: 100vh;
    @media (max-width: 820px) {
        padding: 5rem 2rem;
    }
    @media (max-width: 550px) {
        padding: 5rem 2rem;
    }
`
    
export const Title = styled.div`
    font-weight: 200;
    font-size: 5rem;
    margin-top: 15vh;
    @media (max-width: 820px) {
        font-size: 5rem;
    }
    @media (max-width: 550px) {
        font-size: 3rem;
    }
`;

export const HeroButton = styled(Button)`
    margin-top: 1.5rem;
    padding: 1rem 4rem;
`

export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    @media (max-width: 820px) {
        font-size: 1.3rem;
    }
    @media (max-width: 550px) {
        font-size: 1rem;
    }
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
    font-weight: 400;
`;   

