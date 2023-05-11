import * as S from './style'
import Hero from '../Hero'
import Feature from '../Features'
import Pricing from '../Pricing'
import Calculator from '../Calculator'

export default function UI() {

    return (
        <S.UI id='ui'>
            <Hero />
            <Feature />
            {/* <Pricing />
            <Calculator /> */}
        </S.UI>
    )
}