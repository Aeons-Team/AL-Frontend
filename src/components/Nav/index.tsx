import Icon from '../Icon'
import * as S from './style'

export default function Navbar() {

    return (
        <S.NavbarWrapper>
            <S.Navbar>
                <S.NavItem>
                    <Icon name='home' height='1.1rem' width='1.1rem' />
                    <S.NavItemText>Aeons</S.NavItemText>
                </S.NavItem>
                
                <S.NavItem>
                    <Icon name='features' height='1.1rem' width='1.1rem' />
                    <S.NavItemText>Features</S.NavItemText>
                </S.NavItem>
                <S.NavItem>
                    <Icon name='pricing' height='1.1rem' width='1.1rem' />
                    <S.NavItemText>Pricing</S.NavItemText>
                </S.NavItem>
            </S.Navbar>
        </S.NavbarWrapper>
    )
}