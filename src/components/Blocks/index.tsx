import { useLayoutEffect, useMemo, useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { useFrame, ThreeEvent } from '@react-three/fiber'
import { useBox, Triplet } from '@react-three/cannon'
import { InstancedMesh, Vector3 } from 'three'
import { useAppStore } from '../../data/AppStore'
import { theme } from '../../data/ThemeContext'

const Blocks = forwardRef(({ count, size }: { count: number, size: number }, ref) => {
    const [initial, destination] = useMemo(() => {
        const initial: Vector3[] = []
        const destination: Vector3[] = []
        const len = Math.sqrt(count)

        for (let i = 0; i < count; ++i) {
            const x = (i % len) / len - 0.5
            const z = Math.floor(i / len) / len - 0.5

            initial.push(new Vector3(x * 2, Math.random() * 3.0, z * 2))
            destination.push(new Vector3(x * 7, 0, z * 7))
        }

        return [initial, destination]   
    }, [])

    const positionsRef = useRef<Triplet[]>(initial.map(v => v.toArray()))

    const [ref2, api] = useBox<InstancedMesh>((i) => ({ 
        mass: 1, 
        position: initial[i].toArray(),
        args: [size, size, size]
    }))

    useLayoutEffect(() => {
        for (let i = 0; i < count; ++i) {
            api.at(i).position.subscribe(pos => positionsRef.current[i] = pos)
        }
    }, [])

    useFrame(() => {
        const positions = positionsRef.current 
        const scroll = useAppStore.getState().scrollUI

        for (let i = 0; i < count; ++i) {
            const mag = useAppStore.getState().scrollUI * 4
            const force = destination[i].clone().sub(new Vector3(...positions[i])).normalize().multiplyScalar(mag)

            api.at(i).applyForce(force.toArray(), [0, 0, 0])
        }
    })

    const onPointerEnter = (e: ThreeEvent<PointerEvent>) => {
        useAppStore.setState({ instanceId: e.instanceId })
    }

    const onPointerLeave = (e: ThreeEvent<PointerEvent>) => {
        useAppStore.setState(state => ({ instanceId: (state.instanceId == e.instanceId ? -1 : state.instanceId) }))
    }

    return (
        <instancedMesh castShadow receiveShadow ref={mergeRefs([ref, ref2])} args={[undefined, undefined, count]} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial color={theme.colors.primary} roughness={0.75} metalness={0.5} />
        </instancedMesh>
    )
})

export default Blocks