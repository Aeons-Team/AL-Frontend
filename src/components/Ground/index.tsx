import { forwardRef } from 'react'
import { useBox } from '@react-three/cannon'
import { Mesh } from 'three'
import { mergeRefs } from 'react-merge-refs'
import { useAppStore } from '../../data/AppStore'
import { useChatStore } from '../../data/ChatStore'
import { theme } from '../../data/ThemeContext'

const Ground = forwardRef(({ size }: { size: number }, ref) => {
    const [ref2, _] = useBox<Mesh>(() => ({ 
        position: [0, -size * 0.5, 0], 
        args: [size, size, size]
    }))

    const onPointerDown = () => {
        if (useChatStore.getState().enabled) return

        useAppStore.setState({ pull: true })
    }
  
    const onPointerUp = () => {
        useAppStore.setState({ pull: false })
    }

    return (
        <mesh receiveShadow ref={mergeRefs([ref, ref2])} rotation={[-Math.PI * 0.5, 0, 0]} onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial color={theme.colors.object3d} roughness={0.95} metalness={0.2} />
        </mesh>
    )
})

export default Ground