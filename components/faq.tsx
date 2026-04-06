"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "¿El sitio me pertenece una vez terminado?",
    a: "Sí, absolutamente. Cuando el proyecto se entrega, el código fuente completo es tuyo. No hay suscripciones mensuales ni dependencia de nuestra plataforma. Podés hospedar el sitio donde quieras.",
  },
  {
    q: "¿Puedo actualizar el contenido yo mismo?",
    a: "Para proyectos de E-commerce o catálogos, incluimos un panel de administración para que gestiones tus contenidos. En landing pages simples, priorizamos la velocidad y el costo bajo; si necesitás autonomía total para estas, podemos implementar un sistema de gestión dinámico como un opcional adicional.",
  },
  {
    q: "¿Cuánto tarda en estar listo mi sitio?",
    a: "Dependiendo del plan, entre 2 y 5 semanas. Trabajamos con entregas parciales para que puedas ir viendo el avance y hacer correcciones en el camino.",
  },
  {
    q: "¿Tienen hosting incluido?",
    a: "El hosting no está incluido en el precio, pero te ayudamos a configurarlo. Recomendamos Vercel para la web (plan gratuito muy generoso) y Supabase para la base de datos. El costo mensual suele ser $0.",
  },
  {
    q: "¿Qué pasa si necesito cambios después de la entrega?",
    a: "Ofrecemos 30 días de soporte post-entrega sin costo adicional para correcciones y ajustes. Pasado ese período, podemos acordar un plan de mantenimiento mensual.",
  },
  {
    q: "¿Trabajan solo para Argentina?",
    a: "Trabajamos 100% de forma remota y con clientes de cualquier país hispanohablante. La facturación se adapta a cada caso.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Si no encontrás la respuesta que buscás,{" "}
            <a href="#contacto" className="text-primary font-semibold hover:underline">
              escribinos
            </a>
            .
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="bg-white border border-border rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-foreground text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
