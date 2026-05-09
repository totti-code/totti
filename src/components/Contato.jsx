import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowRight } from 'react-icons/fa'

const contacts = [
  {
    icon: FaGithub,
    label: 'GitHub',
    handle: '@seuuser',
    href: 'https://github.com/',
    color: '#e0e0e0',
    glow: 'rgba(200,200,200,0.2)',
    desc: 'Veja meu código',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    handle: '/in/seuperfil',
    href: 'https://linkedin.com/in/',
    color: '#0a66c2',
    glow: 'rgba(10,102,194,0.3)',
    desc: 'Conecte-se comigo',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    handle: '+55 (85) 98932-6734',
    href: 'https://wa.me/5585989326734',
    color: '#25d366',
    glow: 'rgba(37,211,102,0.3)',
    desc: 'Mensagem rápida',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    handle: 'totidev@gmail.com',
    href: 'mailto:totidev@gmail.com',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.3)',
    desc: 'Me escreva',
  },
]

function ContactCard({ contact, index, inView }) {
  const { icon: Icon, label, handle, href, color, glow, desc } = contact
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group block"
    >
      <div
        className="relative rounded-xl border glass overflow-hidden p-6 transition-all duration-400"
        style={{
          borderColor: hovered ? `${color}50` : 'rgba(0,212,255,0.08)',
          boxShadow: hovered ? `0 0 30px ${glow}, 0 4px 30px rgba(0,0,0,0.3)` : '0 4px 20px rgba(0,0,0,0.2)',
        }}
      >
        {/* Glow bg */}
        <div
          className="absolute inset-0 pointer-events-none rounded-xl transition-opacity duration-400"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${glow} 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Left accent line */}
        <div
          className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full transition-all duration-400"
          style={{
            background: color,
            boxShadow: `0 0 8px ${color}`,
            opacity: hovered ? 1 : 0.2,
          }}
        />

        <div className="flex items-center gap-4 relative">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}30`,
              boxShadow: hovered ? `0 0 16px ${glow}` : 'none',
            }}
          >
            <Icon
              className="text-xl transition-transform duration-300"
              style={{
                color,
                transform: hovered ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[9px] text-slate-600 tracking-widest uppercase mb-0.5">{desc}</p>
            <h3 className="font-display text-sm font-bold text-white mb-0.5">{label}</h3>
            <p className="font-mono text-xs truncate" style={{ color }}>
              {handle}
            </p>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.2 }}
          >
            <FaArrowRight className="text-sm" style={{ color }} />
          </motion.div>
        </div>
      </div>
    </motion.a>
  )
}

export default function Contato() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contato" className="relative py-28 px-6" ref={ref}>
      {/* Glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-[#00d4ff] tracking-[0.4em] uppercase mb-4">
            // 004 — Contato
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white section-title-line">
            VAMOS <span className="text-[#00d4ff]">CONVERSAR</span>
          </h2>
          <p className="font-body text-slate-500 mt-8 max-w-lg mx-auto">
            Estou aberto a oportunidades, colaborações e novos projetos.
            Entre em contato por qualquer canal abaixo.
          </p>
        </motion.div>

        {/* Central highlight box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative glass rounded-2xl p-10 mb-8 border border-[rgba(0,212,255,0.12)] text-center overflow-hidden"
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: 'inset 0 0 60px rgba(0,212,255,0.05)' }} />

          <div
            className="font-display text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: '#00d4ff', opacity: 0.6 }}
          >
            STATUS
          </div>
          <div className="flex items-center justify-center gap-3 mb-3">
            <span
              className="w-3 h-3 rounded-full bg-[#00d4ff] animate-ping"
              style={{ boxShadow: '0 0 10px #00d4ff' }}
            />
            <span className="font-display text-lg font-bold text-white">
              Disponível para Oportunidades
            </span>
          </div>
          <p className="font-body text-sm text-slate-500">
            Aberto para estágios, projetos freelance e primeiras experiências
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((contact, i) => (
            <ContactCard key={contact.label} contact={contact} index={i} inView={inView} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center font-mono text-xs text-slate-700 mt-10 tracking-widest"
        >
          Respondo em até <span className="text-[#00d4ff]">24 horas</span>
        </motion.p>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-[rgba(0,212,255,0.07)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm font-bold text-slate-600 tracking-widest">
            DEV<span className="text-[#00d4ff]">.</span>PORT
          </span>
          <p className="font-mono text-xs text-slate-700">
            © {new Date().getFullYear()} — Feito com <span className="text-[#00d4ff]">React</span> & dedicação
          </p>
        </div>
      </div>
    </section>
  )
}
