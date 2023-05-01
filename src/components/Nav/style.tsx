import styled from 'styled-components'

export const Navbar = styled.div`
    color: red;
`
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.primary4};
    border-radius: 15px;
    border: 1rem solid ${props => props.theme.colors.primary4};
    color: ${props => props.theme.colors.primary4};
    position: fixed;
    width: 60rem;
    height: 5rem;
    left: 26rem;
    top: 53rem;
    `
  export const NavItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.primary4};
    border-radius: 25px;
    border: 2rem solid ${props => props.theme.colors.primary4};
    color: white;
    width: 2rem;
    height: 1rem;
    left: 1rem;
    top: 1rem;
    margin-left: 7rem;
    margin-right: 9rem;
    box-shadow: 0px 0px 3.4398px rgba(0, 0, 0, 0.4);
    `



