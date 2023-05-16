import styled from 'styled-components'

export const Fade = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
    z-index: -1;
`

export const Topbar = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    padding: 1.75rem;
    pointer-events: none;
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

