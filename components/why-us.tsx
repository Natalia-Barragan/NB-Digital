"use client"

import { motion } from "framer-motion"
import { Zap, Search, Shield, Code2, TrendingUp, Smartphone } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Velocidad real, no prometida",
    description:
      "Construimos con Next.js y React — tecnología de primer nivel. Tus páginas cargan en menos de 1 segundo, no en 5.",
  },
  {
    icon: Search,
    title: "SEO desde la base",
    description:
      "El SEO no es un plugin que se activa al final. Está integrado en la arquitectura desde el día uno para que Google te encuentre.",
  },
  {
    icon: Shield,
    title: "Vos sos el dueño",
    description:
      "El código es tuyo. No dependés de plataformas como Wix o Tiendanube que pueden cambiar precios o cerrar sin aviso.",
  },
  {
    icon: Code2,
    title: "Stack moderno y escalable",
    description:
      "Next.js + React + Supabase. La misma tecnología que usan las startups más exitosas del mundo, para tu negocio.",
  },
  {
    icon: TrendingUp,
    title: "Diseñado para convertir",
    description:
      "No es solo una tarjeta digital. Cada sección está pensada para guiar al visitante hacia tomar acción: llamar, comprar o agendar.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first por defecto",
    description:
      "Más del 70% de tu audiencia llega desde el celular. Todos nuestros sitios se ven y funcionan perfecto en cualquier pantalla.",
  },
]

export default function WhyUs() {
  return (
    <section id="por-que" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">¿Por qué NB Digital?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
            La diferencia entre un sitio hecho con código real y uno hecho con un builder
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Wix, Webflow y Tiendanube son herramientas geniales para empezar. Pero si querés escalar, optimizar y
            diferenciarte, necesitás desarrollo profesional.
          </p>
        </motion.div>

        {/* Comparison callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 rounded-2xl overflow-hidden border border-border grid grid-cols-1 md:grid-cols-2"
        >
          <div className="p-8 bg-white">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Builders No-Code</p>
            <ul className="flex flex-col gap-3">
              {["Sitio lento (3-5 seg)", "SEO limitado", "Dependás del proveedor", "Difícil de escalar", "Diseño genérico"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-4 h-4 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✕
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="p-8 brand-gradient text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-4">NB Digital</p>
            <ul className="flex flex-col gap-3">
              {[
                "Carga en menos de 1 segundo",
                "SEO técnico optimizado",
                "El código es tuyo para siempre",
                "Arquitectura escalable",
                "Diseño a medida",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white">
                  <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl border border-border p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1.5">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
