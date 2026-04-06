"use client"

import { motion } from "framer-motion"
import { Calendar, Image as ImageIcon, ShoppingCart, CheckCircle2 } from "lucide-react"

const solutions = [
  {
    icon: Calendar,
    title: "Estudios y Consultorios",
    subtitle: "Para contadores, médicos y abogados",
    description:
      "Tu paciente o cliente agenda su turno directamente desde tu sitio, sin llamadas ni mensajes de WhatsApp a las 11pm.",
    features: [
      "Sincronización con Google Calendar",
      "Recordatorios automáticos por email",
      "Formulario de consulta profesional",
      "Panel de gestión de turnos",
    ],
    color: "border-violet-200 bg-violet-50/50",
    iconColor: "text-violet-600 bg-violet-100",
    badgeColor: "bg-violet-100 text-violet-700",
    badge: "Automatización",
  },
  {
    icon: ImageIcon,
    title: "Portafolios Personales",
    subtitle: "Para diseñadores, artistas y creativos",
    description:
      "Una presencia digital que te diferencia. Galería de alta velocidad, sin builders lentos ni plantillas genéricas.",
    features: [
      "Velocidad de carga < 1 segundo",
      "Imagen de marca profesional",
      "Galería dinámica y autogestionable",
      "Optimización SEO completa",
    ],
    color: "border-pink-200 bg-pink-50/50",
    iconColor: "text-pink-600 bg-pink-100",
    badgeColor: "bg-pink-100 text-pink-700",
    badge: "Alta Velocidad",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Inteligente",
    subtitle: "Para negocios y tiendas online",
    description:
      "Vendé en línea con control total. Notificaciones instantáneas por WhatsApp o Email cuando entra un pedido.",
    features: [
      "Control de stock en tiempo real",
      "Notificaciones por WhatsApp y Email",
      "Panel de gestión de pedidos",
      "Integración con MercadoPago",
    ],
    color: "border-cyan-200 bg-cyan-50/50",
    iconColor: "text-cyan-600 bg-cyan-100",
    badgeColor: "bg-cyan-100 text-cyan-700",
    badge: "E-commerce",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Solutions() {
  return (
    <section id="soluciones" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Soluciones Verticales
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
            Un sitio hecho para tu rubro
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            No vendemos plantillas. Cada solución está pensada para las necesidades específicas de tu negocio o
            profesión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`rounded-2xl border p-8 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${s.color}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.badgeColor}`}>
                    {s.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">{s.subtitle}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>

                <ul className="flex flex-col gap-2 mt-auto">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
