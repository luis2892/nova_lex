import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const areas = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M3 21h18M9 8h1m-1 4h1m4-4h1m-1 4h1M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3v2m0 0H9m3 0h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Derecho Corporativo',
    description: 'Constitución de sociedades, contratos mercantiles, fusiones y adquisiciones. Asesoría integral para empresas nacionales e internacionales.',
    tag: 'Business Law',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Derecho Penal',
    description: 'Defensa penal estratégica y especializada. Representación en todas las etapas del proceso, desde la investigación hasta la apelación.',
    tag: 'Criminal Law',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M3 6l9-3 9 3v3H3V6zM3 9v12h18V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Derecho Civil',
    description: 'Contratos, responsabilidad civil, sucesiones y bienes. Resolución eficiente de conflictos patrimoniales con enfoque en sus intereses.',
    tag: 'Civil Law',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Derecho Laboral',
    description: 'Defensa de trabajadores y asesoría a empleadores. Litigios laborales, despidos injustificados, contratos colectivos y cumplimiento normativo.',
    tag: 'Labor Law',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Derecho Internacional',
    description: 'Arbitraje internacional, comercio exterior, tratados y derecho comparado. Presencia en múltiples jurisdicciones para proteger sus intereses globales.',
    tag: 'International Law',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Derecho de Familia',
    description: 'Divorcios, custodia, adopciones y testamentos. Acompañamiento humano y profesional en los momentos más sensibles de su vida.',
    tag: 'Family Law',
  },
]

function AreaCard({ area, index }) {
  const ref = useRef()
  const cardRef = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16
    card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-8px)`
    card.style.boxShadow = `${-x * 0.5}px ${y * 0.5}px 40px rgba(201,150,42,0.18), 0 0 0 1px rgba(201,150,42,0.15)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)'
      cardRef.current.style.boxShadow = 'none'
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full bg-cosmos-card border border-silver/5 rounded-lg p-7 cursor-default transition-[box-shadow] duration-300"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease, box-shadow 0.3s ease' }}
      >
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-lg">
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[64px] border-b-[64px] border-l-transparent border-b-transparent group-hover:border-b-gold/10 transition-colors duration-500" />
        </div>

        {/* Top line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <div className="relative mb-5">
          <div className="w-12 h-12 rounded-lg bg-gold/8 border border-gold/15 flex items-center justify-center text-gold group-hover:bg-gold/15 group-hover:border-gold/30 transition-all duration-400">
            {area.icon}
          </div>
          <div className="absolute -inset-1 rounded-xl bg-gold/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Tag */}
        <span className="text-[9px] tracking-[0.35em] uppercase text-gold/50 font-sans font-medium">
          {area.tag}
        </span>

        {/* Title */}
        <h3 className="font-serif text-xl text-silver-light mt-2 mb-3 group-hover:text-gold-pale transition-colors duration-300">
          {area.title}
        </h3>

        {/* Description */}
        <p className="font-body text-silver/40 text-sm leading-relaxed">
          {area.description}
        </p>

        {/* Arrow */}
        <div className="mt-5 flex items-center gap-2 text-gold/40 group-hover:text-gold transition-all duration-300">
          <span className="text-xs tracking-widest uppercase font-sans">Más info</span>
          <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export default function PracticeAreas() {
  const headRef = useRef()
  const inView = useInView(headRef, { once: true, margin: '-100px' })

  return (
    <section id="servicios" className="relative bg-cosmos-black section-padding overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/3 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-sans">Áreas de Práctica</span>
            <div className="h-px w-10 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-silver-light leading-tight"
          >
            Excelencia en Cada
            <br />
            <span className="text-gold-gradient">Área del Derecho</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-silver/50 mt-4 max-w-xl mx-auto leading-relaxed"
          >
            Nuestro equipo de especialistas cubre el espectro completo del derecho,
            ofreciendo soluciones jurídicas precisas para cada necesidad.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, i) => (
            <AreaCard key={area.title} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
