import { forwardRef } from 'react'
import { useBox } from '@react-three/cannon'
import { Mesh } from 'three'
import { mergeRefs } from 'react-merge-refs'
import { ThreeEvent } from '@react-three/fiber'
import { useAppStore } from '../../data/AppStore'
import { theme } from '../../data/ThemeContext'

const Ground = forwardRef(({ size }: { size: number }, ref) => {
    const [ref2, api] = useBox<Mesh>(() => ({ 
        position: [0, -size * 0.5, 0], 
        args: [size, size, size]
    }))

    const onPointerDown = (e: ThreeEvent<MouseEvent>) => {
        useAppStore.setState({ pull: true })
    }
  
    const onPointerUp = (e: ThreeEvent<MouseEvent>) => {
        useAppStore.setState({ pull: false })
    }

    return (
        <mesh receiveShadow ref={mergeRefs([ref, ref2])} rotation={[-Math.PI * 0.5, 0, 0]} onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial color={theme.colors.active3d} roughness={0.95} metalness={0.2} />
        </mesh>
    )
})

export default Ground