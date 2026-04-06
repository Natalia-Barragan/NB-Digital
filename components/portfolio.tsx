"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    name: "VGS Estudio Contable",
    category: "Estudio Contable",
    description:
      "Sitio profesional con turnos online, integración Google Calendar y formularios de consulta automatizados.",
    tags: ["Google Calendar", "Turnos Online", "SEO Local"],
    color: "from-violet-500/10 to-indigo-500/10",
    accent: "bg-violet-100 text-violet-700",
  },
  {
    name: "Coni Cuadros",
    category: "Portafolio Personal",
    description:
      "Portafolio de artista con galería dinámica, cargas ultrarrápidas y presencia visual de alto impacto.",
    tags: ["Galería Dinámica", "Alta Velocidad", "Branding"],
    color: "from-pink-500/10 to-rose-500/10",
    accent: "bg-pink-100 text-pink-700",
  },
  {
    name: "Había una vez",
    category: "E-commerce",
    description:
      "Tienda online con gestión de stock, notificaciones por WhatsApp y panel de administración propio.",
    tags: ["Stock", "WhatsApp", "Panel Admin"],
    color: "from-cyan-500/10 to-blue-500/10",
    accent: "bg-cyan-100 text-cyan-700",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Portafolio</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
            Proyectos que hablan por sí solos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Cada sitio está diseñado para convertir visitantes en clientes y ahorrarle tiempo al dueño.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl border border-border overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Colored top banner */}
              <div className={`h-32 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <span className="text-4xl font-black brand-text-gradient opacity-20 select-none">
                  {p.name.slice(0, 2).toUpperCase()}
                </span>
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {p.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tags.map((t) => (
                    <span key={t} className={`text-xs font-medium px-2.5 py-1 rounded-full ${p.accent}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
