import * as S from './style'

export default function Hero() {
    return (
        <S.Hero>
            <S.Title 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    ease: 'easeInOut',
                    duration: 0.35,
                    delay: 0.5 
                }}
            >
                Aeons
            </S.Title>

            <S.Text 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.35,
                    delay: 0.75
                }}
            >
                Store your files <S.Span>decentralised</S.Span> and <S.Span>trustless</S.Span> with one-time payment for eons.
            </S.Text>
            
            <S.Maintext 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.35,
                    delay: 1
                }}
            >
                Seemlessly connect your crypto wallet via<S.Span> metamask</S.Span>
            </S.Maintext>

            <S.Sidetext
                initial={{ opacity: 0, y: 20 }}   
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.35,
                    delay: 1.25
                }}
            >
                No third parties.<br/>
                You <S.Span>own</S.Span> and manage who sees your data.
            </S.Sidetext>
        </S.Hero>
    )
}
