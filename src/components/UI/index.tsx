import * as S from './style'
import Hero from '../Hero'
import Feature from '../Features'
import Pricing from '../Pricing'

export default function UI() {

    return (
        <S.UI id='ui'>
            <Hero />
            <Feature />
            <Pricing />
        </S.UI>
    )
}