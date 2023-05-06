import * as S from './style'
import SideText from '../SideText'

export default function Hero() {
    return (
        <S.Hero>
            <S.Title>
                Aeons
            </S.Title>

            <S.Text>
                Store your files <S.Span>decentralised</S.Span> and <S.Span>trustless</S.Span> with one-time payment for eons.
            </S.Text>
            
            <SideText top='85vh' left='3rem' leftTablet='1.5rem'>
                Seemlessly connect to your <br /> crypto wallet via<S.Span> metamask</S.Span>
            </SideText>

            <SideText top='65vh' right='3rem' rightTablet='1.5rem'>
                No third parties.<br/>
                You <S.Span>own</S.Span> and manage <br /> who sees your data.
            </SideText>
        </S.Hero>
    )
}
