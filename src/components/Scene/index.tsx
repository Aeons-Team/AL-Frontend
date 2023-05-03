import { useLayoutEffect, useMemo, useRef } from 'react'
import { useFrame, ThreeEvent } from '@react-three/fiber'
import { PerspectiveCamera, SoftShadows } from '@react-three/drei'
import { Physics, usePlane, useBox, Triplet } from '@react-three/cannon'
import { InstancedMesh, Mesh, Vector3, Matrix4 } from 'three'
import { damp3 } from 'maath/easing'
import { useAppStore } from '../../data/AppStore'
import { theme } from '../../data/ThemeContext'

function Blocks({ count, size }: { count: number, size: number }) {
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

    let randRot = () => (Math.random() - 0.5) * 2.0 * Math.PI

    const [ref, api] = useBox<InstancedMesh>((i) => ({ 
        mass: 1, 
        position: initial[i].toArray(),
        rotation: [randRot(), randRot(), randRot()],
        args: [size, size, size]
    }))

    useLayoutEffect(() => {
        for (let i = 0; i < count; ++i) {
            api.at(i).position.subscribe(pos => positionsRef.current[i] = pos)
        }
    }, [])

    useFrame(() => {
        const positions = positionsRef.current 

        for (let i = 0; i < count; ++i) {
            const mag = useAppStore.getState().scrollUI * 5
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
        <instancedMesh castShadow receiveShadow ref={ref} args={[undefined, undefined, count]} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial color={theme.colors.primary} roughness={0.8} metalness={0.4} />
        </instancedMesh>
    )
}

function Ground({ size }: { size: number }) {
    const [ref, api] = usePlane<Mesh>(() => ({ rotation: [-Math.PI * 0.5, 0, 0] }))

    return (
        <mesh receiveShadow ref={ref} rotation={[-Math.PI * 0.5, 0, 0]}>
            <planeGeometry args={[size, size]} />
            <meshStandardMaterial color={theme.colors.primary} roughness={0.95} metalness={0.1} />
        </mesh>
    )
}

export default function Scene() {
    useFrame((state, delta) => {
        const camera = state.camera
        state.events.update()

        if (camera) {
            const cameraTo = new Vector3(
                state.pointer.x * 0.4,
                2.5 + state.pointer.y * 0.4,
                3
            )

            damp3(camera.position, cameraTo, 0.5, delta)

            camera.lookAt(new Vector3())
        }
    })

    return (
        <>
            <color attach='background' args={[theme.colors.primary]} />

            <PerspectiveCamera makeDefault position={[0, 2.5, 3]} />

            <ambientLight 
                intensity={0.3} 
                color={[0, 0.5, 0.7]} />

            <directionalLight 
                castShadow 
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                position={[4, 2, -2]} 
                intensity={1.1} />

            <directionalLight 
                castShadow 
                color={theme.colors.active}
                position={[-2, 0.4, 0]} 
                intensity={2.5} />

            <pointLight 
                position={[-2, -2, 0]} 
                intensity={0.75} />

            <SoftShadows size={30} focus={0} samples={20} />

            <Physics gravity={[0, -1, 0]}>
                <Ground size={100} />
                <Blocks count={100} size={0.2} />
            </Physics>
        </>
    )
}