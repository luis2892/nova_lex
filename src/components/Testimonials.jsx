import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'Nova Lex no solo ganó nuestro caso — transformó por completo la manera en que entendemos la protección jurídica de nuestra empresa. Una precisión y dedicación que no tiene comparación.',
    author: 'Carlos Mendoza',
    role: 'CEO, Grupo Industrial Mendoza',
    area: 'Derecho Corporativo',
    result: 'Fusión de $40M protegida',
    initials: 'CM',
  },
  {
    quote: 'Atravesé uno de los momentos más difíciles de mi vida con la seguridad de tener al mejor equipo de mi lado. La Dra. Vega convirtió lo imposible en una victoria que cambió el futuro de mis hijos.',
    author: 'Marcela Fuentes',
    role: 'Ejecutiva de Marketing',
    area: 'Derecho de Familia',
    result: 'Custodia integral obtenida',
    initials: 'MF',
  },
  {
    quote: 'Cuando enfrenté cargos que amenazaban destruir todo lo que construí, el Dr. Castellano demostró una maestría en la sala de audiencias que simplemente no existe en otro lugar. Absolutamente libre.',
    author: 'Roberto Aguilar',
    role: 'Empresario',
    area: 'Derecho Penal',
    result: 'Absolución total',
    initials: 'RA',
  },
  {
    quote: 'La expansión internacional de nuestra compañía parecía un laberinto imposible de normativas. Nova Lex lo convirtió en un camino claro y seguro. Hoy operamos en 5 países sin una sola complicación legal.',
    author: 'Valeria Ramos',
    role: 'CFO, TechGlobal Corp',
    area: 'Derecho Internacional',
    result: 'Expansión a 5 mercados',
    initials: 'VR',
  },
]

const stars = Array(5).fill(0)

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const headRef = useRef()
  const inView = useInView(headRef, { once: true, margin: '-100px' })
  const intervalRef = useRef()

  const go = (idx) => {
    setDirection(idx > active ? 1 : -1)
    setActive(idx)
  }

  const next = () => go((active + 1) % testimonials.length)
  const prev = () => go((active - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000)
    return () => clearInterval(intervalRef.current)
  }, [active])

  const t = testimonials[active]

  return (
    <section id="testimonios" className="relative bg-cosmos-black section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/3 blur-[150px]" />
      </div>

      {/* Giant quote mark */}
      <div className="absolute top-12 left-8 font-serif text-[16rem] leading-none text-gold/4 select-none pointer-events-none">
        "
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-sans">Testimonios</span>
            <div className="h-px w-10 bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-silver-light"
          >
            Historias de
            <br />
            <span className="text-gold-gradient">Victoria Real</span>
          </motion.h2>
        </div>

        {/* Testimonial card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-cosmos-card border border-silver/5 rounded-2xl p-10 md:p-14 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-medium">
                  {t.result}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {stars.map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl md:text-2xl text-silver/85 leading-relaxed mb-8 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-sm text-cosmos-black font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-silver-light">{t.author}</p>
                  <p className="font-body text-xs text-silver/40">{t.role}</p>
                </div>
                <div className="ml-auto hidden md:block">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-gold/50 bg-gold/5 border border-gold/10 rounded-full px-3 py-1 font-sans">
                    {t.area}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? 'w-8 h-1.5 bg-gold'
                      : 'w-1.5 h-1.5 bg-silver/20 hover:bg-silver/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-silver/10 flex items-center justify-center text-silver/40 hover:border-gold/40 hover:text-gold transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
