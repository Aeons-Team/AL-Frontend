import Icon from '../Icon'
import * as S from './style'

export default function Navbar() {

    return (
        <S.NavbarWrapper>
            <S.Navbar>
                <S.NavItem>
                    <Icon name='home' height='1.25rem' width='1.25rem' />
                    Aeons
                </S.NavItem>
                
                <S.NavItem>
                    <Icon name='features' height='1.25rem' width='1.25rem' />
                    Features
                </S.NavItem>
                <S.NavItem>
                    <Icon name='pricing' height='1.25rem' width='1.25rem' />
                    Pricing
                </S.NavItem>
            </S.Navbar>
        </S.NavbarWrapper>
    )
}