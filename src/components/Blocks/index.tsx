import { useLayoutEffect, forwardRef, useRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { useFrame } from '@react-three/fiber'
import { useBox, Triplet } from '@react-three/cannon'
import { InstancedMesh, Vector3 } from 'three'
import { useAppStore } from '../../data/AppStore'
import { theme } from '../../data/ThemeContext'

const Blocks = forwardRef(({ count, size }: { count: number, size: number }, ref) => {
    const positionsRef = useRef<Triplet[]>(new Array<Triplet>(count).fill([0, 0, 0]))
    const rand = () => (Math.random() - 0.5) * 3

    const [ref2, api] = useBox<InstancedMesh>(() => ({ 
        mass: 3, 
        position: [rand(), rand() + 3.0, rand()],
        args: [size, size, size]
    }))

    useLayoutEffect(() => {
        for (let i = 0; i < count; ++i) {
            api.at(i).position.subscribe(pos => positionsRef.current[i] = pos)
        }
    }, [])

    useFrame(() => {
        const positions = positionsRef.current
        const { pull, pullPoint } = useAppStore.getState()

        if (pull) {
            for (let i = 0; i < count; ++i) {
                const position = positions[i]
                const dir = pullPoint.clone().sub(new Vector3(...position))

                const mag = Math.max(0, 1.5 - dir.length()) * 100
                api.at(i).applyForce(dir.multiplyScalar(mag).toArray(), [0, 0, 0])
            }
        }
    })

    return (
        <instancedMesh ref={mergeRefs([ref, ref2])} castShadow receiveShadow args={[undefined, undefined, count]}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial color={theme.colors.object3d} roughness={0.75} metalness={0.5} />
        </instancedMesh>
    )
})

export default Blocks