import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, SoftShadows } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Vector3, PointLight, Raycaster, Mesh, InstancedMesh } from 'three'
import { damp3 } from 'maath/easing'
import { theme } from '../../data/ThemeContext'
import Ground from '../Ground'
import Blocks from '../Blocks'

export default function Scene() {
    const groundRef = useRef<Mesh>(null)
    const blocksRef = useRef<InstancedMesh>(null)
    const cursorLightRef = useRef<PointLight>(null)

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

        const ground = groundRef.current 
        const blocks = blocksRef.current
        const cursorLight = cursorLightRef.current 

        if (blocks && ground && cursorLight) {
            const raycaster = new Raycaster()
            raycaster.setFromCamera(state.pointer, state.camera)
            
            const intersections = raycaster.intersectObjects([ground, blocks])

            if (intersections.length) {
                const intersection = intersections[0]
                
                const lightPos = intersection.point 
                lightPos.y += 0.2

                cursorLight.position.copy(lightPos)
            }
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
                intensity={3} />

            <pointLight 
                position={[-0.5, 1, 0]} 
                decay={2}
                distance={3}
                color={theme.colors.primary2}
                intensity={2} />

            <pointLight 
                ref={cursorLightRef}
                color={theme.colors.active}
                position={[-2, -2, 0]} 
                decay={2}
                distance={1}
                intensity={20} />

            <SoftShadows size={30} focus={0} samples={20} />

            <Physics gravity={[0, -1, 0]}>
                <Ground ref={groundRef} size={100} />
                <Blocks ref={blocksRef} count={100} size={0.2} />
            </Physics>
        </>
    )
}