import { PropsWithChildren } from 'react'
import * as S from './style'

interface SideTextProps extends S.SideTextProps, PropsWithChildren {}

export default function SideText({ children, ...remaining }: SideTextProps) {
    return (
        <S.SideText {...remaining}>
            {children}
        </S.SideText>
    )
}