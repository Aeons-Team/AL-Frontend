import * as S from './style'
import Hero from '../Hero'
import Feature from '../Features'
import Pricing from '../Pricing'
import Navbar from '../Nav'
import Topbar from '../Topbar'

export default function UI() {

    return (
        <S.UI id='ui'>
            <Navbar />
            <Topbar />
            <Hero />
            <Feature />
            {/* <Pricing /> */}
        </S.UI>
    )
}