import styled from 'styled-components'

export const Navbar = styled.div`
    color: red;
`
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.primary5};
    border-radius: 15px;
    border: 1rem solid ${props => props.theme.colors.primary5};
    color: ${props => props.theme.colors.primary5};
    position: fixed;
    width: 50%;
    height: 5vw;
    left: 25%;
    bottom: 4vw;
    `
  export const NavItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.primary5};
    border-radius: 25px;
    border: 2rem solid ${props => props.theme.colors.primary5};
    color: white;
    width: 15%;
    height: 2vw;
    left: 1vw;
    top: 1vw;
    margin-left: 3%;
    margin-right: 3%;
    box-shadow: 0px 0px 3.4398px rgba(0, 0, 0, 0.4);
    `



