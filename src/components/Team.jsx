import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const members = [
  {
    name:       'Dr. Alejandro Morales',
    role:       'Socio Fundador',
    specialty:  'Derecho Corporativo & Arbitraje',
    experience: '28 años',
    initials:   'AM',
    gradient:   'from-[#8B6914] to-[#C9962A]',
    bio:        'Ex-magistrado con doctorado en Oxford. Referente nacional en derecho corporativo y arbitraje comercial internacional.',
  },
  {
    name:       'Dra. Isabella Torres',
    role:       'Socia Senior',
    specialty:  'Derecho Internacional',
    experience: '20 años',
    initials:   'IT',
    gradient:   'from-[#1B3A5C] to-[#2A5C8A]',
    bio:        'Especialista en tratados internacionales y litigación transfronteriza. Certificada por la ICC en arbitraje internacional.',
  },
  {
    name:       'Dr. Rodrigo Castellano',
    role:       'Socio Litigante',
    specialty:  'Derecho Penal',
    experience: '15 años',
    initials:   'RC',
    gradient:   'from-[#4A1B1B] to-[#8A2A2A]',
    bio:        'Reconocido estratega en defensa penal de alto perfil. Más de 200 juicios orales con resultados sobresalientes.',
  },
  {
    name:       'Dra. Carmen Vega',
    role:       'Socia Asociada',
    specialty:  'Derecho de Familia & Civil',
    experience: '12 años',
    initials:   'CV',
    gradient:   'from-[#2A1B4A] to-[#5C2A8A]',
    bio:        'Mediadora certificada y abogada litigante. Enfoque humano y resultado efectivo en los procesos más sensibles.',
  },
]

function TeamCard({ member, index }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative bg-cosmos-card border border-silver/5 rounded-xl overflow-hidden transition-all duration-500 group-hover:border-gold/20">
        {/* Avatar area */}
        <div className="relative h-56 overflow-hidden">
          {/* Gradient background as avatar */}
          <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-30`} />
          <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card via-cosmos-card/20 to-transparent" />

          {/* Initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-2xl`}>
              <span className="font-serif text-3xl text-white font-semibold tracking-wider">
                {member.initials}
              </span>
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute top-4 right-4 bg-cosmos-black/70 backdrop-blur-sm border border-gold/20 rounded-full px-3 py-1">
            <span className="text-[10px] tracking-widest uppercase text-gold font-sans">{member.experience}</span>
          </div>

          {/* Hover overlay with bio */}
          <div className="absolute inset-0 bg-cosmos-black/90 backdrop-blur-sm flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="font-body text-silver/80 text-sm leading-relaxed text-center">
              {member.bio}
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="h-px w-12 bg-gold mb-4 group-hover:w-full transition-all duration-500" />
          <span className="text-[9px] tracking-[0.35em] uppercase text-gold/60 font-sans">{member.role}</span>
          <h3 className="font-serif text-xl text-silver-light mt-1 mb-1 group-hover:text-gold-light transition-colors duration-300">
            {member.name}
          </h3>
          <p className="font-body text-silver/40 text-xs">{member.specialty}</p>

          {/* Social links placeholder */}
          <div className="flex gap-3 mt-4">
            {['in', 'tw', 'ma'].map((s) => (
              <button
                key={s}
                className="w-7 h-7 rounded-full border border-silver/10 flex items-center justify-center text-[9px] text-silver/30 uppercase font-sans hover:border-gold/40 hover:text-gold transition-all duration-300"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Team() {
  const headRef = useRef()
  const inView = useInView(headRef, { once: true, margin: '-100px' })

  return (
    <section id="equipo" className="relative bg-cosmos-deep section-padding overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-gold/8 to-transparent" />
        <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-gold/8 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-sans">Nuestro Equipo</span>
            <div className="h-px w-10 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-silver-light leading-tight"
          >
            Mentes Brillantes,
            <br />
            <span className="text-gold-gradient">Resultados Extraordinarios</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-silver/50 mt-4 max-w-lg mx-auto"
          >
            Un equipo de élite formado en las mejores universidades del mundo,
            unido por la pasión por la justicia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
