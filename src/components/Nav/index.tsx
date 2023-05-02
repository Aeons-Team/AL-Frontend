import Icon from '../Icon'
import * as S from './style'

export default function Navbar() {

    return (
        <S.NavbarWrapper>
            <S.Navbar>
                <S.NavItem>
                    <Icon name='home' height='1.25rem' width='1.25rem' />
                    Home
                </S.NavItem>
                
                <S.NavItem>Features</S.NavItem>
                <S.NavItem>Pricing</S.NavItem>
            </S.Navbar>
        </S.NavbarWrapper>
    )
}