import { useEffect, useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import HeroScene from './HeroScene'

const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  size: Math.random() * 2 + 0.5,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 2 + Math.random() * 4,
  minOp: 0.05 + Math.random() * 0.15,
  maxOp: 0.4 + Math.random() * 0.6,
}))

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden:   { opacity: 0, y: 40 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollRef = useRef()

  useEffect(() => {
    gsap.to(scrollRef.current, {
      y: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.4,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmos-black"
    >
      {/* Background stars (CSS) */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            width:  s.size,
            height: s.size,
            left:   `${s.x}%`,
            top:    `${s.y}%`,
            '--duration':    `${s.duration}s`,
            '--delay':       `${s.delay}s`,
            '--min-opacity': s.minOp,
            '--max-opacity': s.maxOp,
          }}
        />
      ))}

      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-royal/10 blur-[100px]" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-gold-dark/8 blur-[80px]" />
      </div>

      {/* 3D Scene — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[55%] pointer-events-none">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-cosmos-black via-cosmos-black/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cosmos-black to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-[640px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Pre-headline badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase font-sans font-medium">
                Estudio Jurídico de Élite
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif leading-[0.95] tracking-tight"
            >
              <span className="block text-[clamp(3.5rem,8vw,7rem)] text-silver-light font-light">
                JUSTICIA
              </span>
              <span className="block text-[clamp(3.5rem,8vw,7rem)] text-gold-gradient font-semibold">
                SIN
              </span>
              <span className="block text-[clamp(3.5rem,8vw,7rem)] text-silver-light font-light">
                COMPROMISO
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="font-body text-silver/60 text-lg leading-relaxed max-w-[480px]"
            >
              Más de dos décadas defendiendo los derechos de nuestros clientes con
              precisión, integridad y un compromiso inquebrantable con la excelencia legal.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-2"
            >
              {[
                { value: '25+', label: 'Años de Experiencia' },
                { value: '98%', label: 'Casos Ganados' },
                { value: '2K+', label: 'Clientes Satisfechos' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-serif text-2xl text-gold-light font-semibold">{value}</span>
                  <span className="text-[10px] tracking-widest uppercase text-silver/40 font-sans mt-0.5">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-gold px-8 py-4 rounded text-sm tracking-[0.15em] uppercase font-sans font-semibold text-cosmos-black"
              >
                Consulta Gratuita
              </a>
              <a
                href="#servicios"
                onClick={(e) => { e.preventDefault(); document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline-gold px-8 py-4 rounded text-sm tracking-[0.15em] uppercase font-sans font-medium text-silver/80"
              >
                Nuestros Servicios
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-silver font-sans">Explorar</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
