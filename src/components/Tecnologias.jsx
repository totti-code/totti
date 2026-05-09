import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDatabase,
} from 'react-icons/fa'
import { SiGit } from 'react-icons/si'

const techs = [
  {
    icon: FaHtml5,
    name: 'HTML5',
    color: '#e34f26',
    glow: 'rgba(227,79,38,0.3)',
    level: 80,
    category: 'Frontend',
  },
  {
    icon: FaCss3Alt,
    name: 'CSS3',
    color: '#2965f1',
    glow: 'rgba(41,101,241,0.3)',
    level: 75,
    category: 'Frontend',
  },
  {
    icon: FaJs,
    name: 'JavaScript',
    color: '#f7df1e',
    glow: 'rgba(247,223,30,0.3)',
    level: 65,
    category: 'Language',
  },
  {
    icon: FaReact,
    name: 'React',
    color: '#61dafb',
    glow: 'rgba(97,218,251,0.3)',
    level: 60,
    category: 'Frontend',
  },
  {
    icon: FaNodeJs,
    name: 'Node.js',
    color: '#539e43',
    glow: 'rgba(83,158,67,0.3)',
    level: 50,
    category: 'Backend',
  },
  {
    icon: FaDatabase,
    name: 'SQL Server',
    color: '#cc2927',
    glow: 'rgba(204,41,39,0.3)',
    level: 55,
    category: 'Database',
  },
  {
    icon: SiGit,
    name: 'Git',
    color: '#f05032',
    glow: 'rgba(240,80,50,0.3)',
    level: 60,
    category: 'DevOps',
  },
  {
    icon: FaGithub,
    name: 'GitHub',
    color: '#e0e0e0',
    glow: 'rgba(200,200,200,0.2)',
    level: 65,
    category: 'DevOps',
  },
]

function TechCard({ tech, index, inView }) {
  const { icon: Icon, name, color, glow, level, category } = tech

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="relative group"
    >
      <div
        className="relative glass rounded-xl p-6 border border-[rgba(0,212,255,0.08)] overflow-hidden cursor-default transition-all duration-400"
        style={{
          '--card-glow': glow,
        }}
      >
        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-xl pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 50%, ${glow} 0%, transparent 70%)` }}
        />

        {/* Corner decoration top right */}
        <div
          className="absolute top-0 right-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            borderTop: `2px solid ${color}`,
            borderRight: `2px solid ${color}`,
            borderRadius: '0 12px 0 0',
          }}
        />

        {/* Category tag */}
        <div className="font-mono text-[9px] tracking-widest uppercase text-slate-600 mb-4 group-hover:text-slate-500 transition-colors">
          {category}
        </div>

        {/* Icon */}
        <motion.div
          className="text-5xl mb-4 w-fit"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
          style={{ color, filter: `drop-shadow(0 0 8px ${glow})` }}
        >
          <Icon />
        </motion.div>

        {/* Name */}
        <h3 className="font-display text-sm font-bold text-white mb-4 tracking-wider group-hover:text-[#00d4ff] transition-colors">
          {name}
        </h3>

        {/* Progress bar */}
        <div className="relative">
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-mono text-[10px] text-slate-600">NÍVEL</span>
            <span className="font-mono text-[10px]" style={{ color }}>{level}%</span>
          </div>
          <div className="h-1 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${level}%` } : { width: 0 }}
              transition={{ delay: index * 0.08 + 0.3, duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full progress-neon"
              style={{
                background: `linear-gradient(90deg, ${color}88, ${color})`,
                boxShadow: `0 0 8px ${glow}`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Tecnologias() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tecnologias" className="relative py-28 px-6" ref={ref}>
      {/* Background radial */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-[#00d4ff] tracking-[0.4em] uppercase mb-4">
            // 002 — Stack
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white section-title-line">
            TECNO<span className="text-[#00d4ff]">LOGIAS</span>
          </h2>
          <p className="font-body text-slate-500 mt-8 max-w-md mx-auto">
            Ferramentas e tecnologias que utilizo para construir soluções digitais
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {techs.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="font-mono text-xs text-slate-600 tracking-widest">
            <span className="text-[#00d4ff]">+</span> Sempre aprendendo novas tecnologias
          </p>
        </motion.div>
      </div>
    </section>
  )
}
