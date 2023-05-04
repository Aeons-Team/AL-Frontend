import { useEffect } from 'react'
import gsap from 'gsap'
import { Vector2 } from 'three'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from 'axios'
import { useAppStore } from './data/AppStore'
import Canvas from './components/Canvas'
import UI from './components/UI'
import Chat from './components/Chat'
import { sceneConfig } from './components/Scene'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      useAppStore.setState({ cursor: new Vector2(e.clientX, e.clientY) })
    }

    document.addEventListener('mousemove', onMouseMove)

    ScrollTrigger.create({
      trigger: '#canvas',
      start: 'top top',
      end: 'bottom top',
      onUpdate: (self) => {
        useAppStore.setState({ scrollCanvas: self.progress })
      }
    })

    axios.get(`${import.meta.env.VITE_PUBLIC_WARP_GATEWAY_URL}/contracts-by-source?id=${import.meta.env.VITE_PUBLIC_CONTRACT_SOURCE}&limit=${sceneConfig.blocks}`)
      .then((res) => useAppStore.setState({ contracts: res.data.contracts }))

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <Canvas />
      <UI />
      <Chat />
    </>
  )
}

export default App
