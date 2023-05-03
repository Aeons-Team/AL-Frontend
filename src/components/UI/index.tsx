import * as S from './style'
import Navbar from '../Nav'
import Hero from '../Hero'
import Topbar from '../Topbar'
import Feature from '../Features'
import Pricing from '../Pricing'
import BlockInfo from '../BlockInfo'

export default function UI() {

    return (

        <S.UI id='ui'>
            <Topbar /> 
            <Hero />
            <Navbar />
            <BlockInfo />
            <Feature />
            <Pricing />
        </S.UI>

    )
}