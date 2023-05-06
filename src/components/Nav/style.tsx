import styled from 'styled-components'

export const NavbarWrapper = styled.div`
	position: fixed;
	top: 90vh;
	display: flex;
	justify-content: center;
	width: 100%;
	pointer-events: none;
	z-index: 5;
`

export const Navbar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: ${props => props.theme.colors.primary2};
	border-radius: 12px;
	width: 90vw;
	max-width: 700px;
	overflow: hidden;
	padding: 1.5rem 4rem;
	pointer-events: auto;
`

export const NavItem = styled.div`
    background: ${props => props.theme.colors.primary2};
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
	font-size: 0.8rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
	pointer-events: auto;
	cursor: pointer;
`

export const NavItemText = styled.span`

`


