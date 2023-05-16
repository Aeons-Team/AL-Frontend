import { useAppStore } from '../../data/AppStore'
import Icon from '../Icon'
import * as S from './style'

export default function Navbar() {
    const scrollTo = (id: string) => useAppStore.getState().scroll?.scrollTo(document.querySelector(id) as any)

    const navState = useAppStore(state => state.navState)

    return (
        <S.NavbarWrapper>
            <S.Navbar>
                <S.NavItem active={navState == 0} onClick={() => scrollTo('#hero')}>
                    <Icon name='home' height='1.1rem' width='1.1rem' />
                    <S.NavItemText>Aeons</S.NavItemText>
                    <S.NavItemSpan />
                </S.NavItem>
                
                <S.NavItem active={navState == 1} onClick={() => scrollTo('#features')}>
                    <Icon name='features' height='1.1rem' width='1.1rem' />
                    <S.NavItemText>Features</S.NavItemText>
                    <S.NavItemSpan />
                </S.NavItem>

                <S.NavItem active={navState == 2} onClick={() => scrollTo('#pricing')}>
                    <Icon name='pricing' height='1.1rem' width='1.1rem' />
                    <S.NavItemText>Pricing</S.NavItemText>
                    <S.NavItemSpan />
                </S.NavItem>
            </S.Navbar>
        </S.NavbarWrapper>
    )
}