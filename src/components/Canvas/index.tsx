import { Canvas as R3FCanvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import Scene from '../Scene'
import * as S from './style'

export default function Canvas() {
    return (
        <S.CanvasParent>
            <R3FCanvas shadows>
                <Scene />
            </R3FCanvas>
        </S.CanvasParent>
    )
}