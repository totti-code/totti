import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ring, setRing] = useState({ x: 0, y: 0 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let ringX = 0
    let ringY = 0
    let raf

    const move = (e) => setPos({ x: e.clientX, y: e.clientY })

    const animateRing = () => {
      ringX += (pos.x - ringX) * 0.15
      ringY += (pos.y - ringY) * 0.15
      setRing({ x: ringX, y: ringY })
      raf = requestAnimationFrame(animateRing)
    }

    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e) => {
      const el = e.target
      setHovering(
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button')
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    raf = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      cancelAnimationFrame(raf)
    }
  }, [pos.x, pos.y])

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          scale: clicking ? 0.6 : hovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 30 }}
        style={{
          width: 12,
          height: 12,
          background: '#00d4ff',
          boxShadow: '0 0 10px #00d4ff, 0 0 25px rgba(0,212,255,0.5)',
        }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        animate={{
          x: ring.x - 18,
          y: ring.y - 18,
          scale: hovering ? 1.8 : clicking ? 0.8 : 1,
          opacity: hovering ? 0.6 : 0.3,
        }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.2 } }}
        style={{
          width: 36,
          height: 36,
          border: '1px solid rgba(0,212,255,0.7)',
        }}
      />
    </>
  )
}
