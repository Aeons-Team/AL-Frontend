import Button from '../Button'
import * as S from './style'

export default function Topbar() {
    return (
        <S.Topbar>
            <S.Text>aeons</S.Text>

            <Button primary onClick={() => window.open("https://aeons.vercel.app")}>
                Open <S.Span>drive</S.Span>
            </Button>
            
            <S.Fade />
        </S.Topbar>
    )
}