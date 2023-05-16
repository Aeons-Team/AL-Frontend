import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, SoftShadows } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Vector3, Raycaster, Mesh, InstancedMesh, Object3D, CatmullRomCurve3, PointLight } from 'three'
import { damp3, damp } from 'maath/easing'
import { theme } from '../../data/ThemeContext'
import { useAppStore } from '../../data/AppStore'
import { useChatStore } from '../../data/ChatStore'
import Ground from '../Ground'
import Blocks from '../Blocks'

export default function Scene() {
    const groundRef = useRef<Mesh>(null)
    const blocksRef = useRef<InstancedMesh>(null)
    const pullLightRef = useRef<PointLight>(null)
    const cameraParentRef = useRef<Object3D>(null)
    const curve = useMemo(() => new CatmullRomCurve3([
        new Vector3(0, 2.5, 2.5),        
        new Vector3(0, 0.5, 4)        
    ]), [])

    useFrame((state, delta) => {
        const camera = state.camera;
        (state as any).events.update()

        const ground = groundRef.current 
        const pullLight = pullLightRef.current 

        if (ground && pullLight) {
            const raycaster = new Raycaster()
            raycaster.setFromCamera(state.pointer, state.camera)
            
            const intersections = raycaster.intersectObject(ground)

            if (intersections.length) {
                const intersection = intersections[0]
                
                const lightPos = intersection.point 
                lightPos.y += 0.1

                useAppStore.setState({ pullPoint: lightPos.clone() })
                pullLight.position.copy(lightPos)
            }

            const pull = useAppStore.getState().pull 
            const intensity = pull ? 100 : 0

            damp(pullLight, 'intensity', intensity, 0.1, delta)
        }

        const cameraParent = cameraParentRef.current
        const scroll = useAppStore.getState().scrollCanvas
        const chatEnabled = useChatStore.getState().enabled

        if (!chatEnabled) {
            if (cameraParent) {
                const cameraParentTo = curve.getPoint(scroll)
                damp3(cameraParent.position, cameraParentTo, 0.5, delta)
            }
    
            const cameraTo = new Vector3(
                state.pointer.x * 0.4,
                Math.max(-1.0, state.pointer.y) * 0.4,
                0
            )
    
            damp3(camera.position, cameraTo, 0.5, delta)
        }
        
        camera.lookAt(new Vector3())
    })

    return (
        <>
            <color attach='background' args={[theme.colors.background3d]} />

            <object3D ref={cameraParentRef} position={[2.5, 2.5, 2.5]}>
                <PerspectiveCamera makeDefault />
            </object3D>

            <ambientLight 
                intensity={0.3} 
                color={[0, 0.5, 0.7]} />

            <directionalLight 
                castShadow 
                shadow-mapSize-width={256}
                shadow-mapSize-height={256}
                position={[4, 1.5, -2]} 
                intensity={1.5} />

            <directionalLight 
                castShadow 
                shadow-mapSize-width={256}
                shadow-mapSize-height={256}
                color={theme.colors.active3d}
                position={[-2, 0.4, 0]} 
                intensity={2.25} />

            <directionalLight 
                castShadow 
                shadow-mapSize-width={256}
                shadow-mapSize-height={256}
                color={theme.colors.secondary}
                position={[2, 0.5, 2]} 
                intensity={1.25} />

            <pointLight 
                position={[0.75, 1, 0.75]} 
                decay={20}
                distance={4}
                color={theme.colors.active3d}
                intensity={1000} />

            <pointLight 
                ref={pullLightRef}
                color={theme.colors.active3d}
                decay={3}
                distance={2} />

            <SoftShadows size={5} focus={0.25} samples={10} />

            <Physics gravity={[0, -1, 0]}>
                <Ground ref={groundRef} size={100} />
                <Blocks ref={blocksRef} count={144} size={0.2} />
            </Physics>
        </>
    )
}