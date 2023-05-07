import styled from 'styled-components'

export const CanvasParent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-color: ${props => props.theme.colors.background};
`