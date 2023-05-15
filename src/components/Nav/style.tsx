import styled, { css } from 'styled-components'

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

	@media (max-width: 550px) {
		width: 95vw;
	}
`

export const NavItemSpan = styled.span`
	position: absolute;
	height: 2px;
	border-radius: 2px;
	bottom: 0.25rem;
	background-color: ${props => props.theme.colors.active};
	width: 0%;
	transition: width 500ms;
`

export const NavItemText = styled.span`

`

interface NavItemProps {
	active: boolean
}

export const NavItem = styled.div<NavItemProps>`
    background: ${props => props.theme.colors.primary2};
	font-size: 0.8rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.4rem;
	pointer-events: auto;
	cursor: pointer;
	width: 33.33%;
	height: 100%;
	font-weight: 400;
	position: relative;
	transition: background-color 500ms;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }

	svg, ${NavItemText} {
		transition: opacity 500ms;
	}

	${props => !props.active && css`
		svg, ${NavItemText} {
			opacity: 0.2;
		}
	`}
	
	${props => props.active && css`
		${NavItemSpan} {
			width: 80%;
		}

		@media (max-width: 550px) {
			${NavItemSpan} {
				width: 90%;
			}
		}
	`}

	@media (max-width: 550px) {
		gap: 0.2rem;
		font-size: 0.7rem;

		svg {
			transform: scale(0.9);
		}
	}
`
