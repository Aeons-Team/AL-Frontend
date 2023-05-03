import { useEffect } from 'react'
import { useAppStore } from './data/AppStore'
import Canvas from './components/Canvas'
import UI from './components/UI'
import Chat from './components/Chat'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const cursor = useAppStore.getState().cursor

    const onMouseMove = (e: MouseEvent) => {
      cursor.set(e.clientX, e.clientY)
    }

    document.addEventListener('mousemove', onMouseMove)

    ScrollTrigger.create({
      trigger: '#ui',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        useAppStore.setState({ scrollUI: self.progress })
      }
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <Canvas />
      <UI />
      {/* <Chat /> */}
    </>
  )
}

export default App
