import styled from 'styled-components'

export const Pricing = styled.div`
    padding: 5rem 6rem;
    @media (max-width: 820px) {
        padding: 5rem 2rem;
    }
    @media (max-width: 550px) {
        padding: 5rem 2rem;
    }
`

export const Maintext = styled.div`
    font-weight: 200;
    font-size: 5rem;
    @media (max-width: 820px) {
        font-size: 5rem;
    }
    @media (max-width: 550px) {
        font-size: 3rem;
    }
`;

export const SideText = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    @media (max-width: 820px) {
        font-size: 1.3rem;
    }
    @media (max-width: 550px) {
        font-size: 1rem;
    }
`;

export const BottomText = styled.div`
    font-size: 0.5rem;
    font-weight: 300;
    @media (max-width: 820px) {
        font-size: 0.3rem;
    }
    @media (max-width: 550px) {
        font-size: 1rem;
    }
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
    }
`;
