import Button from '../Button'
import * as S from './style'

export default function Topbar() {
    return (
        <S.Topbar>
            <S.Text>aeons</S.Text>

            <Button primary>
                Open <S.Span>drive</S.Span>
            </Button>
            
            <S.Fade />
        </S.Topbar>
    )
}