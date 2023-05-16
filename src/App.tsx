import { useEffect } from 'react'
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

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      useAppStore.setState({ cursor: new Vector2(e.clientX, e.clientY) })
    }

    document.addEventListener('mousemove', onMouseMove)

    const scroll = new LocomotiveScroll({
      el: document.querySelector('#ui-container'),
      smooth: true,
      lerp: 0.075,
      mobile: {
        smooth: true,
      },
      tablet: {
        smooth: true,
        breakpoint: 0
      }
    } as any)

    useAppStore.setState({ scroll })
    
    scroll.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy('#ui-container', {
      scrollTop: () => (scroll as any).scroll.instance.scroll.y,
      pinType: 'transform',
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      }
    })

    const triggers: any[] = []

    for (let i = 1; i <= 4; ++i) {
      triggers.push(
        ScrollTrigger.create({
          trigger: `#tablet-${i}`,
          endTrigger: `#feature-${i}`,
          scroller: '#ui-container',
          start: () => {
            return `-=${window.innerHeight * 0.5 - (9 / 16) * (window.innerWidth - (window.innerWidth <= 820 ? 0 : 100)) * 0.5 + 25}`
          },
          end: () => {
            return `+=${(2 * window.innerHeight - (9 / 16) * (window.innerWidth - (window.innerWidth <= 820 ? 0 : 100)) - 200)}`
          },
          pin: true
        })
      )
    }

    triggers.push(
      ScrollTrigger.create({
        trigger: '#canvas',
        scroller: '#ui-container',
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
          useAppStore.setState({ scrollCanvas: self.progress })
        }
      })
    )

    triggers.push(
      ScrollTrigger.create({
        trigger: '#hero',
        scroller: '#ui-container',
        start: 'top top',
        end: '+=100%',
        onToggle: (self) => {
          if (self.isActive) {
            useAppStore.setState({ navState: 0 })
          }
        }
      })
    )

    triggers.push(
      ScrollTrigger.create({
        trigger: '#features',
        scroller: '#ui-container',
        start: 'top top+=100px',
        end: 'bottom bottom',
        onToggle: (self) => {
          if (self.isActive) {
            useAppStore.setState({ navState: 1 })
          }
        },
        onUpdate: (self) => {
          useAppStore.setState({ scrollFeatures: self.progress })
        }
      })
    )

    triggers.push(
      ScrollTrigger.create({
        trigger: '#pricing',
        scroller: '#ui-container',
        start: 'top bottom',
        end: 'bottom bottom',
        onToggle: (self) => {
          if (self.isActive) {
            useAppStore.setState({ navState: 2 })
          }
        }
      })
    )

    ScrollTrigger.addEventListener('refresh', () => {
      scroll.update()
    })
    
    ScrollTrigger.refresh()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)

      triggers.forEach(trigger => trigger.kill())
      scroll.destroy()
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
        <S.UIContainer data-scroll-container id='ui-container'>
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
