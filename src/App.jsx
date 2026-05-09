import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Tecnologias from './components/Tecnologias'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import CustomCursor from './components/CustomCursor'

export default function App() {
  // Hide native cursor on desktop
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (!isMobile) {
      document.body.style.cursor = 'none'
    }
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <div className="relative bg-[#010408] min-h-screen overflow-x-hidden">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Background radial for entire page */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(0,212,255,0.03) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Sobre />
          <Tecnologias />
          <Projetos />
          <Contato />
        </main>
      </div>
    </div>
  )
}
