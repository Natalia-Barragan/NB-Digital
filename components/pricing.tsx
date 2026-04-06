"use client"

import { motion } from "framer-motion"
import { CheckCircle2, X } from "lucide-react"

const plans = [
  {
    name: "Landing Inicial",
    subtitle: "Presencia & Velocidad",
    price: "USD 150",
    oldPrice: "USD 220",
    description: "Lográ una presencia profesional con una web ultra rápida que carga en menos de 1 segundo.",
    features: [
      { label: "Diseño responsive mobile-first", included: true },
      { label: "Secciones: Inicio, Servicios, Sobre mí, Contacto", included: true },
      { label: "Formulario de contacto directo a tu mail", included: true },
      { label: "Velocidad de carga menor a 1 segundo", included: true },
      { label: "SEO optimizado para buscadores", included: true },
      { label: "Panel de administración", included: false },
      { label: "Google Calendar / Turnos online", included: false },
    ],
    cta: "Empezar ahora",
    highlight: false,
  },
  {
    name: "Landing Profesional",
    subtitle: "Automatización & Turnos",
    price: "USD 250",
    oldPrice: "USD 380",
    description: "Automatizá tus turnos con Google Calendar y ahorrá tiempo real en tu consultorio o estudio.",
    features: [
      { label: "Sincronización con Google Calendar", included: true },
      { label: "Turnos online 24/7 para tus clientes", included: true },
      { label: "Recordatorios automáticos por email", included: true },
      { label: "Ahorro de tiempo real en gestión", included: true },
      { label: "Panel de administración de contenido", included: true },
      { label: "Google Analytics incluido", included: true },
      { label: "Carrito y gestión de productos", included: false },
    ],
    cta: "Elegir este plan",
    highlight: true,
  },
  {
    name: "E-commerce Full",
    subtitle: "Ventas Automáticas & Stock",
    price: "USD 450",
    oldPrice: "USD 650",
    description: "Gestioná tu stock y vendé las 24hs con facilidad de uso total desde tu panel propio.",
    features: [
      { label: "Tienda online con catálogo de productos", included: true },
      { label: "Gestión de stock intuitiva y simple", included: true },
      { label: "Notificaciones por WhatsApp y Email", included: true },
      { label: "Panel admin de pedidos y clientes", included: true },
      { label: "Base de datos Supabase", included: true },
      { label: "CRM de clientes incluido", included: true },
    ],
    cta: "Quiero mi e-commerce",
    highlight: false,
    note: "Consultá por planes de pago para emprendimientos en marcha.",
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
            Oportunidad de Lanzamiento
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Inversión clara y voseo argentino: elegí el plan que mejor se adapte a lo que necesitás hoy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-[2rem] border flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 ${
                plan.highlight ? "border-primary/50 shadow-xl shadow-primary/10 scale-[1.03] z-10" : "border-border bg-white"
              }`}
            >
              {plan.highlight && (
                <div className="brand-gradient text-white text-center text-[10px] font-bold py-1.5 tracking-[0.2em] uppercase">
                  Más Recomendado
                </div>
              )}

              <div className={`p-8 lg:p-10 flex flex-col gap-8 flex-1 ${plan.highlight ? "bg-white" : ""}`}>
                {/* Plan header */}
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <p className="text-[11px] font-bold text-primary uppercase tracking-widest">
                        {plan.subtitle}
                      </p>
                      <span className="bg-primary/10 text-primary text-[9px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase whitespace-nowrap">
                        PROMO LANZAMIENTO
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-foreground tracking-tight">{plan.name}</h3>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground line-through opacity-60">
                      {plan.oldPrice}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-primary tracking-tighter">
                        {plan.price.split(" ")[1]}
                      </span>
                      <span className="text-lg font-bold text-primary">{plan.price.split(" ")[0]}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty italic">
                    "{plan.description}"
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-6 flex-1">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent" />
                  <ul className="flex flex-col gap-4">
                    {plan.features
                      .filter((f) => f.included)
                      .map((f) => (
                        <li key={f.label} className="flex items-start gap-3 text-[13px] group">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                          <span className="text-foreground/90 font-medium leading-snug">{f.label}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* CTA and Note */}
                <div className="mt-2 flex flex-col gap-4">
                  <a
                    href="#contacto"
                    className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 ${
                      plan.highlight
                        ? "brand-gradient text-white shadow-lg shadow-primary/20 hover:opacity-90"
                        : "border-2 border-primary text-primary hover:bg-primary/5"
                    }`}
                  >
                    {plan.cta}
                  </a>
                  {plan.note && (
                    <p className="text-[11px] text-muted-foreground text-center leading-tight">
                      * {plan.note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative max-w-2xl mx-auto mt-20 p-[1px] rounded-3xl brand-gradient overflow-hidden shadow-xl shadow-primary/10"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-[calc(1.5rem-1px)] py-8 px-10 text-center">
            <p className="text-base md:text-lg font-medium text-foreground">
              ¿Tenés un proyecto diferente?{" "}
              <a
                href="#contacto"
                className="block md:inline-block mt-2 md:mt-0 font-extrabold text-primary hover:scale-[1.02] transition-transform"
              >
                Hablemos y lo armamos a tu medida.
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
