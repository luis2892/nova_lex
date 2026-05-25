import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Inicio',    href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo',    href: '#equipo' },
  { label: 'Casos',     href: '#testimonios' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cosmos-black/85 backdrop-blur-md border-b border-gold/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNav(e, '#hero')} className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 border border-gold/60 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
              <div className="absolute inset-1 border border-gold/30 rotate-12 group-hover:rotate-[192deg] transition-transform duration-700 delay-75" />
              <div className="absolute inset-[6px] bg-gold rounded-sm opacity-80" />
            </div>
            <div>
              <span className="font-serif text-xl tracking-[0.15em] text-gold-light font-semibold">
                NOVA<span className="text-silver"> LEX</span>
              </span>
              <p className="text-[9px] tracking-[0.25em] text-silver/40 uppercase -mt-0.5 font-body">
                Estudio Jurídico
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className="animated-underline text-sm tracking-widest uppercase text-silver/70 hover:text-gold-light transition-colors duration-300 font-sans font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contacto"
            onClick={(e) => handleNav(e, '#contacto')}
            className="hidden md:flex btn-gold px-5 py-2.5 rounded text-xs tracking-widest uppercase font-sans font-semibold text-cosmos-black"
          >
            Consulta Gratis
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menú"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-px bg-gold transition-all duration-300 ${
                  open
                    ? i === 0 ? 'w-5 translate-y-2 rotate-45' : i === 1 ? 'opacity-0 w-4' : 'w-5 -translate-y-2.5 -rotate-45'
                    : i === 1 ? 'w-4' : 'w-5'
                }`}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cosmos-black/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={(e) => handleNav(e, href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="font-serif text-3xl text-silver/80 hover:text-gold-light transition-colors"
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              onClick={(e) => handleNav(e, '#contacto')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="btn-gold mt-4 px-8 py-3 rounded text-sm tracking-widest uppercase font-sans font-semibold text-cosmos-black"
            >
              Consulta Gratis
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
