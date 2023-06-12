import styled from 'styled-components'




export const Footer = styled.div`
    position: fixed;
	bottom: 3rem;
	display: flex;
	justify-content: center;
    width: 100%;
	pointer-events: none;
	color: ${props => props.theme.colors.secondary};
	z-index: 5;

    @media (max-width: 550px) {
        padding: 2.75rem 1.1rem;
    }

`

export const Fade = styled.div`
    position: relative;
    width: 100%;
    height: 2rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
    pointer-events: auto;
    z-index: -1;
`

export const FooterName = styled.div`
    display: inline-block;
    position: relative;
    padding: 1.75rem;
    pointer-events: auto;
    z-index: 5;
    
    @media (max-width: 550px) {
        padding: 1.75rem 1.1rem;
    }
`
export const Text = styled.div`
    font-weight: 200;
    font-size: 1rem;
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
`; 

