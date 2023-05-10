import { useRef } from 'react'
import { Canvas as R3FCanvas, useFrame } from '@react-three/fiber'
import { useInView } from 'framer-motion'
import Scene from '../Scene'
import * as S from './style'

const DisableRender = () => useFrame(() => null, 1000)

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const canvasInView = useInView(canvasRef)

    return (
        <S.CanvasParent id='canvas'>
            <R3FCanvas ref={canvasRef} shadows eventSource={document.documentElement} data-scroll data-scroll-speed='1.5'>
                <Scene />
                { !canvasInView && <DisableRender /> }
            </R3FCanvas>
        </S.CanvasParent>
    )
}