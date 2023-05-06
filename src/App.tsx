import { useEffect } from 'react'
import gsap from 'gsap'
import { Vector2 } from 'three'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useAppStore } from './data/AppStore'
import { useChatStore } from './data/ChatStore'
import Canvas from './components/Canvas'
import UI from './components/UI'
import Chat from './components/Chat'
import { theme } from './data/ThemeContext'
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

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const appMainVariants = {
    normal: {
      x: 0,
      transition: theme.chatTransition
    },
    
    chatEnabled: {
      x: -Math.min(450, window.innerWidth),
      opacity: 0.5,
      transition: theme.chatTransition
    }
  }

  return (
    <S.App>
      <S.AppMain variants={appMainVariants} initial='normal' animate={enabled ? 'chatEnabled' : 'normal'}>
        <Canvas />
        <UI />
      </S.AppMain>

      <Chat />
    </S.App>
  )
}

export default App
