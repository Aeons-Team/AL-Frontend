import styled from 'styled-components'

export const NavbarWrapper = styled.div`
	position: sticky;
	bottom: 1rem;
	display: flex;
	justify-content: center;
    width: 100%;
	pointer-events: none;
	color: ${props => props.theme.colors.secondary};
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
	height: 4.5rem;
	pointer-events: auto;
`

export const NavItem = styled.div`
    background: ${props => props.theme.colors.primary2};
	font-size: 0.7rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.3rem;
	pointer-events: auto;
	cursor: pointer;
	width: 33.33%;
	height: 100%;
`

export const NavItemText = styled.span`

`


