import * as S from './style'
import Icon from '../Icon'
import SideText from '../SideText'

export default function Pricing() {
    return (
        <S.Pricing id='pricing'>
            <S.Maintext>
            <S.Span>No</S.Span> pricing plans.
            </S.Maintext>

            <S.Text>
                You pay for what you store and all payments go <S.Span>directly</S.Span> to the network.
            </S.Text> 

            <S.ethereum><Icon name='ethereum' height='20rem' width='20rem' /></S.ethereum>
            <S.polygon><Icon name='polygon' height='3rem' width='3rem' /></S.polygon>
            <S.arbitrum><Icon name='arbitrum' height='1.1rem' width='1.1rem' /></S.arbitrum>
            <S.avalanche><Icon name='avalanche' height='4rem' width='4rem' /></S.avalanche>

            <SideText bottom='15vh' bottomMobile='12vh'>
                Currently you can <S.Span>pay</S.Span> through chains like <br/> Polygon mainnet, Arbitrum one, Ethereum mainet,<br/> Avalanche network C chain and Boba network. <br/>
            </SideText> 
        </S.Pricing>
    )
}
