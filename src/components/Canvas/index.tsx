import { CSSProperties } from 'react'
import { Canvas as R3FCanvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import Scene from '../Scene'
import * as S from './style'

export default function Canvas() {
    const style: CSSProperties = {
        position: 'sticky',
        top: 0,
        height: '100vh'
    }

    return (
        <S.CanvasParent id='canvas'>
            <R3FCanvas style={style} shadows eventSource={document.documentElement}>
                <Scene />
                <Stats />
            </R3FCanvas>
        </S.CanvasParent>
    )
}