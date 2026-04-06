"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Natalia Barragan - FullStack Developer",
    description:
      "Mi portfolio personal como programadora. Funciona como un CV interactivo donde exhibo mis proyectos, mi experiencia y mi stack tecnológico (Next.js, NestJS, React, Tailwind).",
    image: "/natalia-portfolio.png",
    imageFit: "object-cover object-top",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Supabase", "Resend"],
    github: "#",
    demo: "https://porfolio.nbdigital.lat/",
  },
  {
    title: "Coni Perez - Tatuadora",
    description:
      "Desarrollé una aplicación para una tatuadora que incluye un formulario de reservas con notificaciones por mail y un panel de administración (CRM) para gestionar turnos, fotos y estados de citas.",
    image: "/coni-perez-tattoo.png",
    imageFit: "object-cover",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "Resend"],
    github: "#",
    demo: "https://coni-perez.nbdigital.lat/",
  },
  {
    title: "Coni Perez - Artista Plástica",
    description:
      "Le desarrollé una landing simple que le permite vender sus cuadros sin comisiones, conectando directamente con sus clientes vía WhatsApp.",
    image: "/coni-perez.png",
    imageFit: "object-cover",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "#",
    demo: "https://coni-cuadros.nbdigital.lat/",
  },
  {
    title: "Gastón López Argonz - Portfolio",
    description:
      "Diseñé una presencia digital que refleja su especialización en derecho laboral y su enfoque en la regulación algorítmica y la IA, proyectando una imagen moderna y profesional.",
    image: "/gaston-portfolio.png",
    imageFit: "object-contain bg-slate-950",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Resend"],
    github: "#",
    demo: "https://lopezargonz.nbdigital.lat//",
  },
  {
    title: "VGS - Estudio Contable",
    description:
      "Desarrollé una web que resolvió su necesidad real de formalizar su imagen, brindando un espacio confiable para sus clientes.",
    image: "/vgs-estudio-contable.png",
    imageFit: "object-contain bg-slate-900 p-4",
    tags: ["Next.js", "React", "Tailwind CSS", "Resend", "Google Calendar"],
    github: "#",
    demo: "https://estudiovgs.nbdigital.lat/",
  },
  {
    title: "Yhabiaunavez",
    description:
      "Desarrollo de una aplicación de e-commerce simplificada para un emprendimiento de ropa y accesorios de bebés. Incluye gestión de carrito, selección de talles y pedidos directos vía WhatsApp para una gestión personalizada del stock y pagos.",
    image: "/Yhabiaunavez.png",
    imageFit: "object-cover",
    tags: ["Next.js", "NestJS", "Supabase", "Tailwind CSS"],
    github: "#",
    demo: "https://yhabiaunavez.nbdigital.lat/",
  },
  {
    title: "Ginecología Regenerativa",
    description:
      "Proyecto diseñado para transmitir seguridad, seriedad y confianza, reflejando la excelencia en salud integral de la mujer.",
    image: "/ginecologia-regenerativa.png",
    imageFit: "object-cover",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "#",
    demo: "https://ginecologia-regenerativa.nbdigital.lat/",
  },
]

const fadeUp: any = {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl border border-border overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Preview */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${p.imageFit}`}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm flex items-center justify-center">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary font-bold px-6 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Ver Proyecto <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-col gap-4 flex-1">
                <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary/70"
                    >
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
