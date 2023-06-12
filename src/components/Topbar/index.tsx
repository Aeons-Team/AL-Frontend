import Button from '../Button'
import * as S from './style'
import logoAvabi from '../../assets/logo (2).png'

export default function Topbar() {
    return (
        <S.Topbar>
            <S.Text><S.Span></S.Span></S.Text>
            <S.logo >               
                    <img src={logoAvabi} />
                    </S.logo>
            <Button primary onClick={() => window.open("#contact")}>
                Send <S.Span>message</S.Span>
            </Button>
            
            <S.Fade />
        </S.Topbar>
    )
};