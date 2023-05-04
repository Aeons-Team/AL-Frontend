import * as S from './style'

export default function Pricing() {
    return (
        <S.Pricing>
            <S.Maintext>
            <S.Span>No</S.Span> pricing plans.
            </S.Maintext>

            <S.BottomText>
                You pay for what you store and all payments go <S.Span>directly</S.Span> to the network.
            </S.BottomText> 

            <S.SideText>
                Currently you can <S.Span>pay</S.Span> through chains like <br/> Polygon mainnet, Arbitrum one, Ethereum mainet,<br /> Avalanche network C chain and Boba network. <br/>
            </S.SideText>  
        </S.Pricing>
    )
}
