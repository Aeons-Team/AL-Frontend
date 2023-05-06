import styled from 'styled-components'

export const Features = styled.div`
    padding: 5rem 6rem;
    background-color: red;
    position: relative;
    height: 100vh;
    @media (max-width: 820px) {
        padding: 5rem 2rem;
    }
    @media (max-width: 550px) {
        padding: 5rem 2rem;
    }
`
export const Maintext = styled.div`
    font-weight: 200;
    font-size: 4.5rem;
    @media (max-width: 820px) {
        font-size: 5rem;
    }
    @media (max-width: 550px) {
        font-size: 3rem;
    }
`;

export const BottomText = styled.div`
    font-size: 1.5rem;
    font-weight: 300;   
    @media (max-width: 820px) { 
        font-size: 1.2rem;
    }
    @media (max-width: 550px) {
        font-size: 1rem;
    }
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
    }
`;   