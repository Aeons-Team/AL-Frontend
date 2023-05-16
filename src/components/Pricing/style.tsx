import styled from 'styled-components'

export const Pricing = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
    position: relative;
    padding: 3rem 4rem;
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
    padding: 3rem 4rem;
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
    padding: 0 4rem;
    @media (max-width: 820px) {
        font-size: 1.3rem;
    }
    @media (max-width: 550px) {
        font-size: 1rem;
    }
`;

export const BottomText = styled.div`
    font-size: 1rem;
    font-weight: 300;
    padding: 15rem 4rem;

    @media (max-width: 820px) {
        font-size: 1rem;
    }
    @media (max-width: 550px) {
        font-size: 1rem;
    }
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
    }
`;

export const ethereum = styled.div`
    position: absolute;
    top: 38%;
    right: 18%;
    transform: translate(-50%, -50%);

    @media (max-width: 820px) {
        top: 65%;
        right: 45%;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 550px) {
        top: 58%;
        right: 35%;
        transform: translate(-50%, -50%);
    }
`;

export const arbitrum = styled.div`
    position: absolute;
    top: 45%;
    left: 73%;
    transform: translate(-50%, -50%);

    @media (max-width: 820px) {
        top: 75%;
        left: 30%;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 550px) {
        top: 65%;
        right: 45%;
        transform: translate(-50%, -50%);
    }
`;

export const avalanche = styled.div`
    position: absolute;
    top: 48%;
    right: 18%;
    transform: translate(-50%, -50%);

    @media (max-width: 820px) {
        top: 78%;
        right: 45%;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 550px) {
        top: 68%;
        right: 20%;
        transform: translate(-50%, -50%);
    }
`;

export const polygon = styled.div`

    position: absolute;
    top: 30%;   
    right: 18%;
    transform: translate(-50%, -50%);

    @media (max-width: 820px) {
        top: 65%;
        right: 40%;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 550px) {
        top: 50%;
        right: 25%;
        transform: translate(-50%, -50%);
    }
`;
