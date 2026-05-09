import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaHeadset, FaBoxes } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiJavascript } from 'react-icons/si'

const projects = [
  {
    id: '01',
    icon: FaBoxes,
    title: 'Sistema de Inventario',
    subtitle: 'Controle de Estoque Inteligente',
    description:
      'Sistema completo para controle de estoque e calculo de acuracidade, mostrando sobras, faltas e percentual de desvio em tempo real.',
    tags: ['React', 'Node.js', 'SQL Server', 'JavaScript'],
    tagIcons: [SiReact, SiNodedotjs, FaDatabase, SiJavascript],
    color: '#00d4ff',
    gradient: 'from-[rgba(0,212,255,0.15)] to-[rgba(0,212,255,0.02)]',
    features: ['Controle de entrada/saida', 'Calculo automatico', 'Relatorios de desvio'],
    github: '#',
    demo: '#',
  },
  {
    id: '02',
    icon: FaHeadset,
    title: 'Sistema de Helpdesk',
    subtitle: 'Gestao de Chamados e Suporte',
    description:
      'Plataforma para abertura, acompanhamento e organizacao de chamados, com controle de status, prioridades e historico de atendimento.',
    tags: ['React', 'SQL Server', 'Node.js'],
    tagIcons: [SiReact, FaDatabase, SiNodedotjs],
    color: '#00d4ff',
    gradient: 'from-[rgba(0,212,255,0.12)] to-[rgba(0,212,255,0.02)]',
    features: ['Abertura de chamados', 'Controle de prioridades', 'Historico de atendimento'],
    github: '#',
    demo: '#',
  },
  {
    id: '03',
    icon: FaDatabase,
    title: 'Sistema de Consulta de Vendas',
    subtitle: 'Sales Intelligence Platform',
    description:
      'Sistema integrado ao SQL Server para consultar vendas, filtrar por periodo e gerar relatorios exportaveis com analise detalhada.',
    tags: ['React', 'SQL Server', 'Node.js', 'JavaScript'],
    tagIcons: [SiReact, FaDatabase, SiNodedotjs, SiJavascript],
    color: '#00d4ff',
    gradient: 'from-[rgba(0,212,255,0.15)] to-[rgba(0,212,255,0.02)]',
    features: ['Consultas avancadas', 'Geracao de relatorios', 'Filtros por periodo'],
    github: '#',
    demo: '#',
  },
]

function ProjectCard({ project, index, inView }) {
  const { icon: Icon, id, title, subtitle, description, tags, tagIcons, color, gradient, features } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: 'easeOut' }}
      className="relative group"
    >
      <div
        className="relative rounded-2xl border border-[rgba(0,212,255,0.1)] overflow-hidden glass transition-all duration-500
          group-hover:border-[rgba(0,212,255,0.35)]"
        style={{
          boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
        }}
      >
        <div
          className={`h-1 w-full bg-gradient-to-r ${gradient} group-hover:opacity-100 opacity-60 transition-opacity`}
          style={{ background: `linear-gradient(90deg, ${color}80, ${color}20, transparent)` }}
        />

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 70%)' }}
        />

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center border border-[rgba(0,212,255,0.2)]"
                style={{
                  background: 'rgba(0,212,255,0.06)',
                  boxShadow: '0 0 20px rgba(0,212,255,0.1)',
                }}
              >
                <Icon className="text-2xl text-[#00d4ff]" />
              </motion.div>
              <div>
                <p className="font-mono text-[10px] text-[#00d4ff] tracking-[0.3em] opacity-70 mb-1">
                  PROJETO {id}
                </p>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                  {title}
                </h3>
                <p className="font-body text-xs text-slate-500 mt-0.5">{subtitle}</p>
              </div>
            </div>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <a
                href={project.github}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[rgba(0,212,255,0.2)] text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="text-sm" />
              </a>
              <a
                href={project.demo}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[rgba(0,212,255,0.2)] text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
                aria-label="Demo"
              >
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>

          <p className="font-body text-sm text-slate-400 leading-relaxed mb-6">
            {description}
          </p>

          <ul className="space-y-2 mb-6">
            {features.map((feat) => (
              <li key={feat} className="flex items-center gap-2 font-body text-xs text-slate-500">
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: color, boxShadow: `0 0 4px ${color}` }}
                />
                {feat}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-5 border-t border-[rgba(0,212,255,0.07)]">
            {tags.map((tag, i) => {
              const TagIcon = tagIcons[i]
              return (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] tracking-wider border border-[rgba(0,212,255,0.15)] text-slate-400
                    hover:border-[rgba(0,212,255,0.4)] hover:text-[#00d4ff] transition-all duration-300"
                  style={{ background: 'rgba(0,212,255,0.03)' }}
                >
                  {TagIcon && <TagIcon className="text-[10px]" />}
                  {tag}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projetos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projetos" className="relative py-28 px-6" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-[#00d4ff] tracking-[0.4em] uppercase mb-4">
            // 003 - Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white section-title-line">
            MEUS <span className="text-[#00d4ff]">PROJETOS</span>
          </h2>
          <p className="font-body text-slate-500 mt-8 max-w-md mx-auto">
            Projetos praticos desenvolvidos durante minha jornada de aprendizado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/totti-code"
            className="inline-flex items-center gap-2 font-display text-xs tracking-widest text-[#00d4ff] uppercase border-b border-[rgba(0,212,255,0.3)] pb-1 hover:border-[#00d4ff] transition-colors"
          >
            <FaGithub /> Ver mais no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
