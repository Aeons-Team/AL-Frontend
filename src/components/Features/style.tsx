import styled from 'styled-components'

export const Features = styled.div`
    padding: 5rem 6rem;
    position: relative;
    height: 100vh;
    background-color: ${props => props.theme.colors.primary};
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

export const Tablet = styled.div`
    border-radius: 40px;
    background: red;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
    width: 30vw;
    height: 40vh;
    position: relative;
    top: 0;
    right: 4px;
    @media (max-width: 820px) {
        width: 90vw;
        height: 45vh;
    }
`;

export const Buttonone = styled.div`

    height: 50px;
    width: 5px;
    background-color: green;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    position: absolute;
    right: -4px;
    top: 20%;

    @media (max-width: 820px) {
        height: 100px;
        top: 20%;
    }
    @media (max-width: 550px) {
        height: 50px;
        top: 20%;
    }
`;

export const Buttontwo = styled.div`

    height: 30px;
    width: 5px;
    background-color: green;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    position: absolute;
    right: -4px;
    top: 35%;

    @media (max-width: 820px) {
        height: 60px;
        top: 40%;
    }
    @media (max-width: 550px) {
        height: 30px;
        top: 35%;
    }
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
`;   