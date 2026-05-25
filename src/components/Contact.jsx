import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const fields = [
  { id: 'name',    label: 'Nombre completo',     type: 'text',  half: true },
  { id: 'email',   label: 'Correo electrónico',  type: 'email', half: true },
  { id: 'phone',   label: 'Teléfono',            type: 'tel',   half: true },
  { id: 'area',    label: 'Área legal de interés', type: 'select', half: true,
    options: ['Derecho Corporativo','Derecho Penal','Derecho Civil','Derecho Laboral','Derecho Internacional','Derecho de Familia','Otro'] },
  { id: 'message', label: 'Cuéntenos su caso',   type: 'textarea', half: false },
]

function FloatingField({ field }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const active = focused || value.length > 0

  const sharedClass = `w-full bg-cosmos-surface border rounded-lg px-4 py-4 text-silver/80 text-sm font-body
    outline-none transition-all duration-300 appearance-none
    ${focused
      ? 'border-gold/50 shadow-[0_0_0_3px_rgba(201,150,42,0.08)]'
      : 'border-silver/8 hover:border-silver/15'
    }`

  return (
    <div className={`relative ${field.half ? 'col-span-1' : 'col-span-2'}`}>
      <label
        htmlFor={field.id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none font-body
          ${active
            ? 'top-2 text-[10px] tracking-widest uppercase text-gold/70'
            : 'top-4 text-sm text-silver/30'
          }`}
      >
        {field.label}
      </label>

      {field.type === 'textarea' ? (
        <textarea
          id={field.id}
          rows={5}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${sharedClass} pt-6 resize-none`}
        />
      ) : field.type === 'select' ? (
        <select
          id={field.id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${sharedClass} pt-6 bg-cosmos-surface`}
        >
          <option value="" />
          {field.options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          id={field.id}
          type={field.type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${sharedClass} pt-6`}
        />
      )}
    </div>
  )
}

const infos = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    label: 'Dirección',
    value: 'Torre Nova Lex, Piso 18\nAv. Javier Prado Este 4200, San Isidro, Lima',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    label: 'Teléfono',
    value: '+51 (1) 640-8000\n+51 (1) 640-8001',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: 'Correo',
    value: 'contacto@novalex.pe\nconsultas@novalex.pe',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    label: 'Horario',
    value: 'Lun – Vie: 8:00 – 20:00\nSáb: 9:00 – 14:00',
  },
]

export default function Contact() {
  const headRef = useRef()
  const inView = useInView(headRef, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="relative bg-cosmos-deep section-padding overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-sans">Contacto</span>
            <div className="h-px w-10 bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-silver-light"
          >
            Su Caso Merece
            <br />
            <span className="text-gold-gradient">la Mejor Defensa</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="font-body text-silver/50 mt-4 max-w-md mx-auto"
          >
            La primera consulta es gratuita y confidencial. Cuéntenos su situación
            y nuestros especialistas se pondrán en contacto en menos de 24 horas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {infos.map(({ icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/8 border border-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 font-sans mb-1">{label}</p>
                  {value.split('\n').map((line) => (
                    <p key={line} className="font-body text-silver/60 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Emergency notice */}
            <div className="mt-2 p-4 border border-gold/20 rounded-lg bg-gold/5">
              <p className="text-xs tracking-widest uppercase text-gold font-sans mb-1">Urgencias 24/7</p>
              <p className="font-sans font-semibold text-silver-light">+51 (1) 640-9911</p>
              <p className="font-body text-silver/40 text-xs mt-1">Para situaciones que no pueden esperar</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-5 p-12 border border-gold/20 rounded-xl bg-gold/5"
              >
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-silver-light mb-2">Mensaje Recibido</h3>
                  <p className="font-body text-silver/50 text-sm leading-relaxed max-w-sm">
                    Nuestro equipo revisará su caso y se comunicará con usted en menos de 24 horas.
                    La consulta inicial es completamente gratuita.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                {fields.map((field) => (
                  <FloatingField key={field.id} field={field} />
                ))}

                {/* Disclaimer */}
                <p className="col-span-2 text-[10px] text-silver/25 font-body leading-relaxed">
                  Al enviar este formulario, acepta que sus datos serán tratados con total confidencialidad conforme a nuestra política de privacidad y al secreto profesional del abogado.
                </p>

                {/* Submit */}
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="btn-gold w-full py-4 rounded-lg text-sm tracking-[0.15em] uppercase font-sans font-semibold text-cosmos-black flex items-center justify-center gap-3"
                  >
                    <span>Solicitar Consulta Gratuita</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
