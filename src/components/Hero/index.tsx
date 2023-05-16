import * as S from './style'
import SideText from '../SideText'

export default function Hero() {
    return (
        <S.Hero id='hero'>
            <S.Title data-scroll data-scroll-speed='-0.5'>
                Aeons
            </S.Title>

            <S.Text data-scroll data-scroll-speed='-0.5'>
                Your <S.Span>decentralised</S.Span> and <S.Span>trustless</S.Span> file storage
            </S.Text>

            <SideText top='80vh' left='3rem' leftTablet='1.5rem' leftMobile='1rem' data-scroll data-scroll-speed='-0.5'>
                Seemlessly connect to your <br /> crypto wallet via<S.Span> metamask</S.Span>
            </SideText>

            <SideText top='60vh' topTablet='55vh' right='3rem' rightTablet='1.5rem' rightMobile='1rem' data-scroll data-scroll-speed='-0.5'>
                No third parties.<br/>
                You <S.Span>own</S.Span> and manage <br /> who sees your data.
            </SideText>
        </S.Hero>
    )
}
