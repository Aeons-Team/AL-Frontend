import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, SoftShadows } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Vector3, PointLight, Raycaster, Mesh, InstancedMesh, Object3D } from 'three'
import { damp3 } from 'maath/easing'
import { theme } from '../../data/ThemeContext'
import { useAppStore } from '../../data/AppStore'
import Ground from '../Ground'
import Blocks from '../Blocks'

export default function Scene() {
    const groundRef = useRef<Mesh>(null)
    const blocksRef = useRef<InstancedMesh>(null)
    const cursorLightRef = useRef<PointLight>(null)
    const cameraParentRef = useRef<Object3D>(null)

    useFrame((state, delta) => {
        const camera = state.camera
        state.events.update()

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

        const cameraParent = cameraParentRef.current
        const scroll = useAppStore.getState().scrollUI

        if (cameraParent) {
            const cameraParentTo = new Vector3(
                Math.sin(scroll * Math.PI) * 3,
                2.5 + 3 * scroll,
                Math.cos(scroll * Math.PI) * 3
            )

            damp3(cameraParent.position, cameraParentTo, 0.5, delta)
        }

        const cameraTo = new Vector3(
            state.pointer.x * 0.6,
            state.pointer.y * 0.6,
            0
        )

        damp3(camera.position, cameraTo, 0.5, delta)

        camera.lookAt(new Vector3(0, scroll, 0))
    })

    return (
        <>
            <color attach='background' args={[theme.colors.primary]} />

            <object3D ref={cameraParentRef} position={[0, 2.5, 3]}>
                <PerspectiveCamera makeDefault />
            </object3D>

            <ambientLight 
                intensity={0.3} 
                color={[0, 0.5, 0.7]} />

            <directionalLight 
                castShadow 
                shadow-mapSize-width={512}
                shadow-mapSize-height={512}
                position={[4, 1, -2]} 
                intensity={0.75} />

            <directionalLight 
                castShadow 
                shadow-mapSize-width={512}
                shadow-mapSize-height={512}
                color={theme.colors.active}
                position={[-2, 0.4, 0]} 
                intensity={4} />

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
                decay={3}
                distance={2}
                intensity={10} />

            <SoftShadows size={10} focus={0} samples={10} />

            <Physics gravity={[0, -1, 0]}>
                <Ground ref={groundRef} size={100} />
                <Blocks ref={blocksRef} count={169} size={0.2} />
            </Physics>
        </>
    )
}