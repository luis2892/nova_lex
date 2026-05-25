export default function Footer() {
  const year = new Date().getFullYear()
  const nav = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Equipo',    href: '#equipo' },
    { label: 'Casos',     href: '#testimonios' },
    { label: 'Contacto',  href: '#contacto' },
  ]
  const legal = ['Aviso de Privacidad', 'Términos de Uso', 'Política de Cookies']

  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-cosmos-black border-t border-silver/5">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 border border-gold/60 rotate-45" />
                <div className="absolute inset-1 border border-gold/30 rotate-12" />
                <div className="absolute inset-[6px] bg-gold rounded-sm opacity-80" />
              </div>
              <span className="font-serif text-xl tracking-[0.15em] text-gold-light font-semibold">
                NOVA<span className="text-silver"> LEX</span>
              </span>
            </div>
            <p className="font-body text-silver/35 text-sm leading-relaxed max-w-xs">
              Más de 25 años defendiendo los derechos de nuestros clientes con precisión,
              integridad y excelencia jurídica.
            </p>
            <div className="flex gap-3 mt-1">
              {['LI', 'TW', 'FB'].map((s) => (
                <button
                  key={s}
                  className="w-8 h-8 rounded-full border border-silver/10 flex items-center justify-center text-[9px] text-silver/30 uppercase font-sans hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold/50 font-sans mb-4">Navegación</p>
            <ul className="flex flex-col gap-2.5">
              {nav.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => go(e, href)}
                    className="font-body text-silver/40 text-sm hover:text-gold-light transition-colors duration-300 animated-underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold/50 font-sans mb-4">Contacto Rápido</p>
            <div className="flex flex-col gap-3">
              <p className="font-body text-silver/40 text-sm">contacto@novalex.pe</p>
              <p className="font-body text-silver/40 text-sm">+51 (1) 640-8000</p>
              <p className="font-body text-silver/40 text-sm">Av. Javier Prado Este 4200, San Isidro, Lima</p>
              <div className="mt-2 inline-flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] tracking-widest uppercase text-green-400/70 font-sans">Aceptando Casos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-silver/8 to-transparent mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-silver/20 text-xs">
            © {year} Nova Lex Estudio Jurídico. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {legal.map((l) => (
              <a
                key={l}
                href="#"
                className="font-body text-silver/20 text-xs hover:text-silver/50 transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
