import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Vector2 } from 'three'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'
import { useAppStore } from './data/AppStore'
import { useChatStore } from './data/ChatStore'
import Canvas from './components/Canvas'
import UI from './components/UI'
import Chat from './components/Chat'
import Navbar from './components/Nav'
import Topbar from './components/Topbar'
import { theme } from './data/ThemeContext'
import * as S from './AppStyles'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const enabled = useChatStore(state => state.enabled)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      useAppStore.setState({ cursor: new Vector2(e.clientX, e.clientY) })
    }

    document.addEventListener('mousemove', onMouseMove)

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.075
    })
    
    scroll.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop: () => scroll.scroll.instance.scroll.y
    })

    ScrollTrigger.create({
      trigger: '#canvas',
      scroller: containerRef.current,
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
        <S.UIContainer data-scroll-container ref={containerRef}>
          <Canvas />
          <UI />
        </S.UIContainer>

        <Navbar />
        <Topbar />
      </S.AppMain>

      <Chat />
    </S.App>
  )
}

export default App
