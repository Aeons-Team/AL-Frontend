import * as S from './style'
import SideText from '../SideText'

export default function Hero() {
    return (
        <S.Hero id='hero'>
            <S.Title data-scroll data-scroll-speed='-0.4'>
                AVABI UNION
            </S.Title>

            <S.Text data-scroll data-scroll-speed='-0.5'>
            Promising <S.Span>IT Company</S.Span> that provides
            <br/>  professional services for the  development of software products
            </S.Text>

            <SideText top='80vh' left='3rem' leftTablet='1.5rem' leftMobile='1rem' data-scroll data-scroll-speed='-0.5'>
            Maximize  <S.Span> Productivity </S.Span>with a <br /> <S.Span>Professional</S.Span> team. 
            </SideText>

            <SideText top='60vh' topTablet='55vh' right='3rem' rightTablet='1.5rem' rightMobile='1rem' data-scroll data-scroll-speed='-0.5'>
            We helps clients get the most <br/>out of their <S.Span>software package</S.Span> <br/>and provides professional
            <br/>
            <S.Span>IT outsourcing services.</S.Span>
            </SideText>
        </S.Hero>
    )
}
