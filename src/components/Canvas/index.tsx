import { Canvas as R3FCanvas } from '@react-three/fiber'
import Scene from '../Scene'
import * as S from './style'

export default function Canvas() {
    return (
        <S.CanvasParent>
            <R3FCanvas shadows eventSource={document.documentElement} eventPrefix='client'>
                <Scene />
            </R3FCanvas>
        </S.CanvasParent>
    )
}