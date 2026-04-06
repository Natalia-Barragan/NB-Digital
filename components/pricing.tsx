"use client"

import { motion } from "framer-motion"
import { CheckCircle2, X } from "lucide-react"

const plans = [
  {
    name: "Landing Inicial",
    subtitle: "Presencia & Contacto",
    price: "USD 350",
    description: "El punto de entrada ideal para profesionales que necesitan presencia digital rápida y profesional.",
    features: [
      { label: "Diseño responsive mobile-first", included: true },
      { label: "Secciones: Inicio, Servicios, Sobre mí, Contacto", included: true },
      { label: "Formulario de contacto con email", included: true },
      { label: "SEO básico y meta etiquetas", included: true },
      { label: "Panel de administración", included: false },
      { label: "Google Calendar / Turnos online", included: false },
      { label: "Carrito y gestión de productos", included: false },
      { label: "Base de datos y CRM", included: false },
    ],
    cta: "Empezar ahora",
    highlight: false,
  },
  {
    name: "Landing Profesional",
    subtitle: "Automatización & Calendar",
    price: "USD 650",
    description: "Para estudios y consultorios que quieren automatizar turnos y dar una imagen de alto nivel.",
    features: [
      { label: "Todo lo del plan Inicial", included: true },
      { label: "Panel de administración de contenido", included: true },
      { label: "Google Calendar integrado", included: true },
      { label: "Recordatorios automáticos por email", included: true },
      { label: "Turnos online 24/7", included: true },
      { label: "SEO avanzado + Google Analytics", included: true },
      { label: "Carrito y gestión de productos", included: false },
      { label: "Base de datos y CRM", included: false },
    ],
    cta: "Elegir este plan",
    highlight: true,
  },
  {
    name: "E-commerce Full",
    subtitle: "Base de Datos, Inventario, CRM",
    price: "USD 1.200",
    description: "Solución completa para tiendas online con control total de inventario, pedidos y clientes.",
    features: [
      { label: "Todo lo del plan Profesional", included: true },
      { label: "Tienda online con catálogo de productos", included: true },
      { label: "Control de stock en tiempo real", included: true },
      { label: "Notificaciones por WhatsApp y Email", included: true },
      { label: "Panel admin de pedidos y clientes", included: true },
      { label: "Integración MercadoPago / Stripe", included: true },
      { label: "Base de datos Supabase", included: true },
      { label: "CRM básico de clientes", included: true },
    ],
    cta: "Quiero mi e-commerce",
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Precios</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
            Inversión clara, sin sorpresas
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Cada plan incluye desarrollo a medida, soporte post-lanzamiento y el código fuente completo. Siempre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl border flex flex-col overflow-hidden ${
                plan.highlight
                  ? "border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border bg-white"
              }`}
            >
              {plan.highlight && (
                <div className="brand-gradient text-white text-center text-xs font-bold py-2 tracking-widest uppercase">
                  Más popular
                </div>
              )}

              <div className={`p-8 flex flex-col gap-6 flex-1 ${plan.highlight ? "bg-white" : ""}`}>
                {/* Plan header */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    {plan.subtitle}
                  </p>
                  <h3 className="text-xl font-extrabold text-foreground">{plan.name}</h3>
                  <div className="mt-3">
                    <span className="text-4xl font-extrabold brand-text-gradient">{plan.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">/ proyecto</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-2.5 text-sm">
                      {f.included ? (
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={f.included ? "text-foreground" : "text-muted-foreground/50"}>{f.label}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  className={`mt-4 w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-opacity ${
                    plan.highlight
                      ? "brand-gradient text-white hover:opacity-90"
                      : "border border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          ¿Necesitás algo personalizado?{" "}
          <a href="#contacto" className="text-primary font-semibold hover:underline">
            Hablemos
          </a>
        </motion.p>
      </div>
    </section>
  )
}
