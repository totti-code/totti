import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaCode } from 'react-icons/fa'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    setActive(href)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-[rgba(0,212,255,0.15)] py-3'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="w-9 h-9 border border-[#00d4ff] flex items-center justify-center rotate-45 group-hover:border-[#00f0ff] transition-colors duration-300"
                style={{ boxShadow: '0 0 10px rgba(0,212,255,0.4)' }}>
                <FaCode className="-rotate-45 text-[#00d4ff] text-sm" />
              </div>
            </div>
            <span
              className="font-display text-lg font-bold tracking-wider"
              style={{ color: '#00d4ff', textShadow: '0 0 10px rgba(0,212,255,0.5)' }}
            >
              DEV<span className="text-white opacity-60">.</span>PORT
            </span>
          </motion.button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`font-body font-semibold text-sm tracking-widest uppercase transition-all duration-300 relative group ${
                    active === link.href ? 'text-[#00d4ff]' : 'text-slate-400 hover:text-[#00d4ff]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#00d4ff] transition-all duration-300 ${
                      active === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ boxShadow: '0 0 6px #00d4ff' }}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button
            onClick={() => scrollTo('#contato')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-5 py-2 border border-[#00d4ff] text-[#00d4ff] font-display text-xs font-bold tracking-widest uppercase btn-neon rounded"
            style={{ boxShadow: '0 0 15px rgba(0,212,255,0.2)' }}
          >
            Hire Me
          </motion.button>

          {/* Mobile menu btn */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#00d4ff] text-2xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.href)}
                className="font-display text-xl font-bold tracking-widest uppercase text-white hover:text-[#00d4ff] transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
