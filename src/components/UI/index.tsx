import * as S from './style'
import Navbar from '../Nav'
import Hero from '../Hero'
import Topbar from '../Topbar'

export default function UI() {

    return (

        <S.UI id='ui'>
            <Topbar /> 
            <Hero />
            <Navbar />
        </S.UI>

    )
}