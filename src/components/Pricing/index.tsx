import * as S from './style'
import Icon from '../Icon'

export default function Pricing() {
    return (
        <S.Pricing id='pricing'>
            <S.Maintext>
            <S.Span>No</S.Span> pricing plans.
            </S.Maintext>

            <S.SideText>
                You pay for what you store and all payments go <S.Span>directly</S.Span> to the network.
            </S.SideText> 

            <S.ethereum><Icon name='ethereum' height='1.1rem' width='1.1rem' /></S.ethereum>
            <S.polygon><Icon name='polygon' height='2rem' width='2rem' /></S.polygon>
            <S.arbitrum><Icon name='arbitrum' height='7rem' width='7rem' /></S.arbitrum>
            <S.avalanche><Icon name='avalanche' height='2rem' width='2rem' /></S.avalanche>

            <S.BottomText>
                Currently you can <S.Span>pay</S.Span> through chains like <br/> Polygon mainnet, Arbitrum one, Ethereum mainet,<br/> Avalanche network C chain and Boba network. <br/>
            </S.BottomText> 
        </S.Pricing>
    )
}
