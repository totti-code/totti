import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUser, FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa'

const highlights = [
  { icon: FaGraduationCap, label: 'ADS', desc: 'Análise e Des. de Sistemas' },
  { icon: FaLaptopCode, label: 'Full Stack', desc: 'Front-end & Back-end' },
  { icon: FaRocket, label: 'Projetos', desc: 'Foco em Resultados' },
]

export default function Sobre() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      {/* Subtle background glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-[#00d4ff] tracking-[0.4em] uppercase mb-4">
            // 001 — Quem Sou
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white section-title-line">
            SOBRE <span className="text-[#00d4ff]">MIM</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Decorative rings */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-[rgba(0,212,255,0.2)]"
              />
              {/* Mid ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-6 rounded-full border border-[rgba(0,212,255,0.1)]"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00d4ff]"
                  style={{ boxShadow: '0 0 8px #00d4ff' }} />
              </motion.div>

              {/* Avatar box */}
              <div
                className="absolute inset-12 glass rounded-full flex items-center justify-center border border-[rgba(0,212,255,0.3)] float-anim"
                style={{ boxShadow: '0 0 60px rgba(0,212,255,0.15), inset 0 0 40px rgba(0,212,255,0.05)' }}
              >
                <FaUser className="text-6xl text-[#00d4ff] opacity-80" />
              </div>

              {/* Orbiting dots */}
              {[0, 120, 240].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-[#00d4ff]"
                  style={{
                    top: '50%',
                    left: '50%',
                    boxShadow: '0 0 10px #00d4ff',
                    transformOrigin: '0 0',
                  }}
                  animate={{ rotate: [deg, deg + 360] }}
                  transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
                />
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="relative p-6 glass rounded-lg corner-decoration border border-[rgba(0,212,255,0.1)]">
              <p className="font-body text-lg text-slate-300 leading-relaxed">
                Sou estudante de{' '}
                <span className="text-[#00d4ff] font-semibold">Análise e Desenvolvimento de Sistemas</span>{' '}
                apaixonado por tecnologia e desenvolvimento de software.
              </p>
            </div>

            <p className="font-body text-base text-slate-400 leading-relaxed px-1">
              Atualmente estudo{' '}
              <span className="text-white font-semibold">HTML, CSS, JavaScript, React, Node.js</span> e{' '}
              <span className="text-white font-semibold">SQL Server</span>, criando projetos práticos focados em
              inventário, dashboards e sistemas web.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass glass-hover rounded-lg p-4 text-center border border-[rgba(0,212,255,0.08)] group"
                >
                  <Icon className="text-[#00d4ff] text-xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-display text-xs font-bold text-white">{label}</div>
                  <div className="font-mono text-[10px] text-slate-500 mt-1">{desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Code line decoration */}
            <div className="font-mono text-xs text-slate-600 mt-4 px-1">
              <span className="text-[#00d4ff]">const</span>{' '}
              <span className="text-white">dev</span>{' '}
              <span className="text-slate-500">=</span>{' '}
              <span className="text-[#00d4ff]">{'{ '}</span>
              <span className="text-slate-400">status: </span>
              <span className="text-green-400">"learning"</span>
              <span className="text-[#00d4ff]">{' }'}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
