import * as S from './style'

export default function Topbar() {
    return (
        <S.Topbar>
            <S.Text>aeons</S.Text>
            <S.Button primary>Open <S.Span>drive</S.Span></S.Button>
        </S.Topbar>
    )
}