import { useLayoutEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, SoftShadows } from '@react-three/drei'
import { Physics, usePlane, useBox, Triplet } from '@react-three/cannon'
import { InstancedMesh, Mesh, Vector3, PerspectiveCamera as ThreePerspectiveCamera } from 'three'
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

    return (
        <instancedMesh castShadow receiveShadow ref={ref} args={[undefined, undefined, count]}>
            <boxGeometry args={[size, size, size]} />
            <meshLambertMaterial color={theme.colors.primary} />
        </instancedMesh>
    )
}

function Ground({ size }: { size: number }) {
    const [ref, api] = usePlane<Mesh>(() => ({ rotation: [-Math.PI * 0.5, 0, 0] }))

    return (
        <mesh receiveShadow ref={ref} rotation={[-Math.PI * 0.5, 0, 0]}>
            <planeGeometry args={[size, size]} />
            <shadowMaterial transparent opacity={0.8} />
        </mesh>
    )
}

export default function Scene() {
    const cameraRef = useRef<ThreePerspectiveCamera>(null)

    useFrame(() => {
        const camera = cameraRef.current
        
        if (camera) {
            camera.position.y = 5 + useAppStore.getState().scrollUI * 6
            camera.position.lerp(camera.position, 0.1)
        }
    })

    return (
        <>
            <color attach='background' args={[theme.colors.primary]} />

            <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 5, 0]} />
            <OrbitControls />

            <ambientLight 
                intensity={0.2} 
                color={[0, 0.5, 0.7]} />

            <directionalLight 
                castShadow 
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                position={[4, 2, -2]} 
                intensity={4} />

            <pointLight 
                position={[-2, -2, 0]} 
                intensity={2} />

            <SoftShadows size={30} focus={0} samples={20} />

            <Physics gravity={[0, -1, 0]}>
                <Ground size={100} />
                <Blocks count={100} size={0.2} />
            </Physics>
        </>
    )
}