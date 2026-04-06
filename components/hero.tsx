"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stats = [
  { value: "100%", label: "Propietario del código" },
  { value: "<1s", label: "Tiempo de carga" },
  { value: "Next.js", label: "Stack profesional" },
  { value: "SEO", label: "Optimizado" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(109,58,247,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(109,58,247,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wide uppercase"
        >
          <Zap className="w-3.5 h-3.5" />
          Desarrollo Web Profesional · Argentina
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-balance text-foreground"
        >
          Soluciones Digitales que{" "}
          <span className="brand-text-gradient">trabajan por vos.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
        >
          Desarrollo web a medida para que ganes tiempo y profesionalices tu marca. Sitios rápidos, modernos y
          autogestionables — diseñados para profesionales, consultorios, empresas y emprendedores de e-commerce.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#soluciones"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white brand-gradient shadow-lg hover:opacity-90 transition-opacity text-base"
          >
            Ver soluciones
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#portafolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-foreground border border-border bg-white hover:bg-muted transition-colors text-base"
          >
            Ver portafolio
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 w-full grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white flex flex-col items-center justify-center py-6 px-4 gap-1">
              <span className="text-2xl font-extrabold brand-text-gradient">{s.value}</span>
              <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
