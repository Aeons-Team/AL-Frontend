import styled from 'styled-components'

export const Pricing = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
    position: relative;
    padding: 10rem 6rem;
    gap: 2rem;
    @media (max-width: 1000px) {
        padding: 10rem 2rem;
    }
    @media (max-width: 550px) {
        padding: 10rem 1rem;
    }
`

export const Maintext = styled.div`
    font-weight: 200;
    font-size: 5rem;
    @media (max-width: 1000px) {
        font-size: 3.5rem;
    }
    @media (max-width: 550px) {
        font-size: 2.5rem;
    }
`;

export const Text = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    @media (max-width: 1000px) {
        font-size: 1.3rem;
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
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);

    @media (max-width: 1300px) {
        visibility: hidden;
    }
`;

export const arbitrum = styled.div`
    position: absolute;
    top: 70%;
    left: 65%;
    transform: translate(-50%, -50%);

    @media (max-width: 1300px) {
        visibility: hidden;
    }

`;

export const avalanche = styled.div`
    position: absolute;
    top: 80%;
    left: 85%;
    transform: translate(-50%, -50%);

    @media (max-width: 1300px) {
        visibility: hidden;
    }

`;

export const polygon = styled.div`

    position: absolute;
    top: 30%;   
    left: 85%;
    transform: translate(-50%, -50%);

    @media (max-width: 1300px) {
        visibility: hidden;
    }
`;
