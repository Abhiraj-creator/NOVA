import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { BackToTop } from './components/BackToTop'
import { DemoModal } from './components/DemoModal'
import { Navbar } from './components/Navbar'
import { FinalCTA, Footer } from './components/sections/Closing'
import { FAQ, Pricing, Solutions, Testimonials } from './components/sections/DecisionSections'
import { Hero } from './components/sections/Hero'
import { Features, ProductNote, ProductSection, Stats, TrustedBy, Workflow } from './components/sections/StorySections'

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, anchors: true })
    let frameId = 0
    const raf = (time: number) => { lenis.raf(time); frameId = requestAnimationFrame(raf) }
    frameId = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(frameId); lenis.destroy() }
  }, [])

  useEffect(() => { document.body.style.overflow = demoOpen || menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [demoOpen, menuOpen])

  return <><Navbar onDemo={() => setDemoOpen(true)} menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main><Hero onDemo={() => setDemoOpen(true)} /><TrustedBy /><Features /><ProductSection /><Workflow /><Stats /><ProductNote /><Solutions /><Testimonials /><Pricing /><FAQ /><FinalCTA /></main><Footer /><DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} /><BackToTop /></>
}
