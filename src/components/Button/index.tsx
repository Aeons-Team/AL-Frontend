import { PropsWithChildren } from 'react'
import * as S from './style'

interface ButtonProps extends S.ButtonProps, PropsWithChildren {}

export default function Button({ children, ...remaining }: ButtonProps) {
    return (
        <S.Button {...remaining}>
            {children}
        </S.Button>
    )
}