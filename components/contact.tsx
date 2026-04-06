"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", rubro: "", mensaje: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setStatus("sent")
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setStatus("error")
    }
  }

  return (
    <section id="contacto" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
            Contanos de tu proyecto, te respondemos en menos de 24 hs.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Completá el formulario con tu nombre, rubro y lo que necesitás. Sin compromisos ni presiones — una
            charla simple para entender cómo podemos ayudarte.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {[
              {
                icon: "📬",
                label: "natalia.barragannb@gmail.com",
                href: "mailto:natalia.barragannb@gmail.com",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-emerald-500" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .011 5.403.007 12.04a11.722 11.722 0 001.574 5.92L0 24l6.117-1.605a11.745 11.745 0 005.925 1.583h.005c6.635 0 12.039-5.403 12.044-12.042a11.791 11.791 0 00-3.417-8.467z" />
                  </svg>
                ),
                label: "WhatsApp disponible",
                href: "https://wa.me/5492215043666",
              },
              { icon: "📍", label: "Argentina · Trabajo remoto" },
            ].map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors w-fit group"
                >
                  <span className="text-base group-hover:scale-110 transition-transform">{item.icon}</span>
                  {item.label}
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </div>
              ),
            )}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {status === "sent" ? (
            <div className="bg-white rounded-2xl border border-border p-10 flex flex-col items-center gap-4 text-center shadow-xl shadow-primary/5">
              <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center shadow-lg shadow-primary/20 mb-2">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight">¡Mensaje enviado!</h3>
              <p className="text-muted-foreground text-sm max-w-[280px] mx-auto">
                Gracias por escribirnos. Te contactaremos dentro de las próximas 24 horas al mail indicado.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-border p-8 md:p-10 flex flex-col gap-6 shadow-2xl shadow-primary/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Martín García"
                    className="w-full rounded-2xl border border-input bg-background/50 px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
                    Tu Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="martin@ejemplo.com"
                    className="w-full rounded-2xl border border-input bg-background/50 px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="rubro" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
                  Rubro del Proyecto
                </label>
                <select
                  id="rubro"
                  name="rubro"
                  required
                  value={form.rubro}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-input bg-background/50 px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm cursor-pointer appearance-none"
                >
                  <option value="" disabled>Seleccioná tu rubro</option>
                  <option>Estudio Contable</option>
                  <option>Consultorio / Salud</option>
                  <option>Abogado / Estudio Jurídico</option>
                  <option>E-commerce / Tienda Online</option>
                  <option>Portafolio Personal</option>
                  <option>Emprendimiento / Otro</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="mensaje" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
                  ¿Cómo podemos ayudarte?
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Contanos tu idea o cualquier detalle..."
                  className="w-full rounded-2xl border border-input bg-background/50 px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-rose-500 font-semibold bg-rose-50 p-3 rounded-lg border border-rose-100 italic">
                  ⚠ Hubo un error al enviar. Por favor contactanos por WhatsApp para una respuesta inmediata.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl font-bold text-sm text-white brand-gradient hover:shadow-xl hover:shadow-primary/20 hover:scale-[0.98] active:scale-[0.96] transition-all disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> ENVIANDO...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> ENVIAR MENSAJE
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
