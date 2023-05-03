import * as S from './style'
import Navbar from '../Nav'
import Hero from '../Hero'
import Topbar from '../Topbar'
import Feature from '../Features'
import Pricing from '../Pricing'

export default function UI() {

    return (

        <S.UI id='ui'>
            <Topbar /> 
            <Hero />
            <Feature />
            <Pricing />
            <Navbar />
        </S.UI>

    )
}