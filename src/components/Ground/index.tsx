import { forwardRef } from 'react'
import { usePlane } from '@react-three/cannon'
import { Mesh } from 'three'
import { mergeRefs } from 'react-merge-refs'
import { theme } from '../../data/ThemeContext'

const Ground = forwardRef(({ size }: { size: number }, ref) => {
    const [ref2, api] = usePlane<Mesh>(() => ({ rotation: [-Math.PI * 0.5, 0, 0] }))

    return (
        <mesh receiveShadow ref={mergeRefs([ref, ref2])} rotation={[-Math.PI * 0.5, 0, 0]}>
            <planeGeometry args={[size, size]} />
            <meshStandardMaterial color={theme.colors.primary} roughness={0.95} metalness={0.1} />
        </mesh>
    )
})

export default Ground