import { useEffect } from 'react'
import gsap from 'gsap'
import { Vector2 } from 'three'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from 'axios'
import { useAppStore } from './data/AppStore'
import { useChatStore } from './data/ChatStore'
import Canvas from './components/Canvas'
import UI from './components/UI'
import Chat from './components/Chat'
import BlockInfo from './components/BlockInfo'
import { sceneConfig } from './components/Scene'
import * as S from './AppStyles'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const enabled = useChatStore(state => state.enabled)

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

  const appMainVariants = {
    normal: {
      x: 0
    },
    
    chatEnabled: {
      x: -Math.min(450, window.innerWidth),
      opacity: 0.5,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 19
      }
    }
  }

  return (
    <S.App>
      <S.AppMain variants={appMainVariants} initial='normal' animate={enabled ? 'chatEnabled' : 'normal'}>
        <Canvas />
        <UI />
      </S.AppMain>
      
      <BlockInfo />
      <Chat />
    </S.App>
  )
}

export default App
