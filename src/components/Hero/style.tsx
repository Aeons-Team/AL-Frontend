import styled from 'styled-components'

export const Hero = styled.div`
    padding: 2rem 6rem;
    height: 100vh;
    @media (max-width: 1000px) {
        padding: 4rem 2rem;
    }
    @media (max-width: 550px) {
        padding: 5rem 1.25rem;
    }
`
    
export const Title = styled.div`
    font-weight: 100;
    font-size: 6rem;
    color: white;
    margin-top: 15vh;
    @media (max-width: 1000px) {
        font-size: 4.5rem;
    }
    @media (max-width: 550px) {
        font-weight: 200;
        margin-top: 20vh;
        font-size: 3rem;
    }
`;

export const Text = styled.p`
    font-size: 1.25rem;
    font-weight: 300;
    @media (max-width: 1000px) {
        font-size: 1.1rem;
    }
    @media (max-width: 550px) {
        font-weight: 300;
        font-size: 1rem;
    }
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
    font-weight: 400;
`;   

