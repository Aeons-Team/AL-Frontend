import * as S from './style'

export default function Features() {
    return (
        <S.Features>
            <S.Maintext>
                <S.Span>Organise</S.Span> your files <br/>efficiently
            </S.Maintext>

            <S.BottomText>
                Aeons lets you <S.Span>create</S.Span> folders, <S.Span>move</S.Span> files between them,<br /> <S.Span>rename</S.Span> your files and much more!
            </S.BottomText> 

            <S.SideText>
                All operations are<br/>
                recorded into the <S.Span>blockweave</S.Span><br />
                with <S.Span>0 transaction cost</S.Span>.
            </S.SideText>  
        </S.Features>
    )
}
