import * as S from './style'
import Hero from '../Hero'
import Services from '../Services'
import About from '../About'
import Footer from '../Footer'

export default function UI() {

    return (
        <S.UI id='ui'>
            <Hero />
            <About />
            <Services />
            <Footer />
        </S.UI>
    )
}