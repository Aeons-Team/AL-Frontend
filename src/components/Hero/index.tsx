import * as S from './style'

export default function Hero() {
    return (
        <S.Hero>
            <S.Title>
                Aeons
            </S.Title>

            <S.Text>
                Store your files <S.Span>decentralised</S.Span> and <S.Span>trustless</S.Span> with one-time payment for eons.
            </S.Text>
            
            <S.SideText
                number={1}
            >
                Seemlessly connect to your <br /> crypto wallet via<S.Span> metamask</S.Span>
            </S.SideText>

            <S.SideText
                number={2}
            >
                No third parties.<br/>
                You <S.Span>own</S.Span> and manage <br /> who sees your data.
            </S.SideText>
        </S.Hero>
    )
}
