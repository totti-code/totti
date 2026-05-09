import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaChevronDown } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

const ROLES = [
  'Desenvolvedor Full Stack',
  'Estudante de ADS',
  'React Developer',
  'Criador de Sistemas',
]

function TypingText({ texts }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, texts])

  return (
    <span className="typing-cursor text-[#00d4ff]" style={{ textShadow: '0 0 20px rgba(0,212,255,0.8)' }}>
      {displayed}
    </span>
  )
}

// Particle canvas
function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`
        ctx.fill()
      })

      // Lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg scanlines"
    >
      {/* Particle background */}
      <ParticleField />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-24 left-8 w-32 h-32 border-l-2 border-t-2 border-[rgba(0,212,255,0.2)] pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-32 h-32 border-r-2 border-b-2 border-[rgba(0,212,255,0.2)] pointer-events-none" />

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 flex items-center gap-2 mb-8 px-4 py-2 glass rounded-full border border-[rgba(0,212,255,0.2)]"
      >
        <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
        <span className="font-mono text-xs text-[#00d4ff] tracking-widest">DISPONÍVEL PARA OPORTUNIDADES</span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="font-display font-black leading-none mb-2">
            <span className="block text-4xl md:text-6xl lg:text-7xl text-white tracking-tight glitch">
              SEU NOME
            </span>
            <span
              className="block text-5xl md:text-7xl lg:text-8xl mt-1 neon-text-animate"
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #00f0ff 50%, #0099bb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AQUI
            </span>
          </h1>
        </motion.div>

        {/* Role typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 mb-4 h-10 flex items-center justify-center"
        >
          <span className="font-display text-xl md:text-2xl font-semibold tracking-widest text-slate-300">
            <TypingText texts={ROLES} />
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-body text-base md:text-lg text-slate-500 tracking-widest uppercase mb-10"
        >
          Estudante · Análise e Desenvolvimento de Sistemas
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollTo('#projetos')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,212,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-[#00d4ff] text-black font-display font-bold text-sm tracking-widest uppercase rounded btn-neon"
          >
            Ver Projetos
            <HiArrowRight className="text-lg" />
          </motion.button>

          <motion.button
            onClick={() => scrollTo('#contato')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 border border-[#00d4ff] text-[#00d4ff] font-display font-bold text-sm tracking-widest uppercase rounded glass"
            style={{ boxShadow: '0 0 20px rgba(0,212,255,0.1)' }}
          >
            <FaGithub className="text-lg" />
            Contato
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-12"
        >
          {[
            { value: '3+', label: 'Projetos' },
            { value: '7+', label: 'Tecnologias' },
            { value: '100%', label: 'Dedicação' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display text-3xl md:text-4xl font-black text-[#00d4ff]"
                style={{ textShadow: '0 0 20px rgba(0,212,255,0.5)' }}
              >
                {stat.value}
              </div>
              <div className="font-body text-xs text-slate-500 tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#sobre')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#00d4ff] opacity-60 hover:opacity-100 transition-opacity"
      >
        <FaChevronDown className="text-xl" />
      </motion.button>
    </section>
  )
}
