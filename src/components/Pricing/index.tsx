import * as S from './style'
import Icon from '../Icon'

export default function Pricing() {
    return (
        <S.Pricing>
            <S.Maintext>
            <S.Span>No</S.Span> pricing plans.
            </S.Maintext>

            <S.SideText>
                You pay for what you store and all payments go <S.Span>directly</S.Span> to the network.
            </S.SideText> 

            <Icon name='ethereum' height='1.1rem' width='1.1rem' />
            <Icon name='polygon' height='1.1rem' width='1.1rem' />
            <Icon name='arbitrum' height='1.1rem' width='1.1rem' />
            <Icon name='avalanche' height='1.1rem' width='1.1rem' />

            <S.BottomText>
                Currently you can <S.Span>pay</S.Span> through chains like <br/> Polygon mainnet, Arbitrum one, Ethereum mainet,<br/> Avalanche network C chain and Boba network. <br/>
            </S.BottomText> 
        </S.Pricing>
    )
}
