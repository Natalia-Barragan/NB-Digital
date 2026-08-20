"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, FileText, Play, X } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  imageFit?: string
  tags: string[]
  demo?: string
  video?: string
  rotation: number
}

const projects: Project[] = [
  {
    title: "Natalia Barragan - FullStack Developer",
    description:
      "Mi portfolio personal como programadora. Funciona como un CV interactivo donde exhibo mis proyectos, mi experiencia y mi stack tecnológico (Next.js, NestJS, React, Tailwind).",
    image: "/natalia-portfolio.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Supabase", "Resend"],
    demo: "https://porfolio.nbdigital.lat/",
    rotation: -10,
  },
  {
    title: "Coni Perez - Tatuadora",
    description:
      "Desarrollé una aplicación para una tatuadora que incluye un formulario de reservas con notificaciones por mail y un panel de administración (CRM) para gestionar turnos, fotos y estados de citas.",
    image: "/coni-perez-tattoo.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "Resend"],
    demo: "https://coni-perez.nbdigital.lat/",
    rotation: 7,
  },
  {
    title: "Coni Perez - Artista Plástica",
    description:
      "Le desarrollé una landing simple que le permite vender sus cuadros sin comisiones, conectando directamente con sus clientes vía WhatsApp.",
    image: "/coni-perez.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demo: "https://coni-cuadros.nbdigital.lat/",
    rotation: -5,
  },
  {
    title: "Gastón López Argonz - Portfolio",
    description:
      "Diseñé una presencia digital que refleja su especialización en derecho laboral y su enfoque en la regulación algorítmica y la IA, proyectando una imagen moderna y profesional.",
    image: "/gaston-portfolio.png",
    imageFit: "object-cover object-top",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Resend"],
    demo: "https://lopezargonz.nbdigital.lat//",
    rotation: 9,
  },
  {
    title: "VGS - Estudio Contable",
    description:
      "Desarrollé una web que resolvió su necesidad real de formalizar su imagen, brindando un espacio confiable para sus clientes.",
    image: "/vgs-estudio-contable.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Resend", "Google Calendar"],
    demo: "https://estudiovgs.nbdigital.lat/",
    rotation: -8,
  },
  {
    title: "Yhabiaunavez",
    description:
      "Desarrollo de una aplicación de e-commerce para un emprendimiento de ropa y accesorios de bebés. Incluye gestión de carrito, selección de talles, integración de pasarela con Mercado Pago para cobros automáticos y redirección directa a WhatsApp para la finalización de pedidos mediante transferencia bancaria y control personalizado de stock.",
    image: "/Yhabiaunavez.png",
    tags: ["Next.js", "NestJS", "Supabase", "Tailwind CSS"],
    demo: "https://yhabiaunavez.nbdigital.lat/",
    rotation: 6,
  },
  {
    title: "Ginecología Regenerativa",
    description:
      "Proyecto diseñado para transmitir seguridad, seriedad y confianza, reflejando la excelencia en salud integral de la mujer.",
    image: "/ginecologia-regenerativa.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demo: "https://ginecologia-regenerativa.nbdigital.lat/",
    rotation: -4,
  },
  {
    title: "CODI Psicológico",
    description:
      "CODI Psicológico — Sistema de gestión para consultorios de psicología, construido a medida para una amiga psicóloga que tenía toda su información dispersa en carpetas y planillas sueltas. Centraliza pacientes, agenda de turnos, notas clínicas (encriptadas) y cobros —incluyendo casos particulares como obras sociales, copagos y sesiones prepagas— en una sola app web. Suma un bot de Telegram o whatsapp que permite registrar pagos, notas de sesión y consultas por chat, sin necesidad de abrir la aplicación.",
    image: "/CODI.png",
    tags: ["Next.js", "NestJS", "Supabase", "autenticación JWT", "Tailwind CSS", "encriptación AES-256 para datos sensibles", "bot con Telegram"],
    video: "/demoentera.mp4",
    rotation: 5,
  },
]

const META_H = 96 // alto reservado para título + tags debajo de cada imagen

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const deckRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const [videoOpen, setVideoOpen] = useState<string | null>(null)
  const [reviewOpen, setReviewOpen] = useState<Project | null>(null)

  useEffect(() => {
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))
    const smooth = (t: number) => t * t * (3 - 2 * t)

    const section = sectionRef.current
    const sticky = stickyRef.current
    const deck = deckRef.current
    const cards = cardRefs.current.filter((c): c is HTMLElement => c !== null)
    if (!section || !sticky || !deck || cards.length === 0) return

    const targets = cards.map(() => ({ x: 0, y: 0 }))
    let scrubDistance = 0
    let closedY = 0

    // El progreso de apertura se mide sólo en el tramo "scrub": una vez
    // recorrido, las tarjetas quedan asentadas y el resto de la grilla (si
    // no entraba en una sola pantalla) se sigue revelando con scroll normal.
    function sectionProgress() {
      const r = section!.getBoundingClientRect()
      if (scrubDistance <= 0) return 0
      return clamp(-r.top / scrubDistance, 0, 1)
    }

    function layout() {
      const w = window.innerWidth
      // Mismas proporciones que la grilla clásica: 1 col en mobile, 2 en
      // tablet, 3 en desktop. El ancho de tarjeta NO se limita por altura.
      const cols = w < 768 ? 1 : w < 1024 ? 2 : 3
      const gap = w < 768 ? 20 : 32
      const availableWidth = Math.min(w * 0.92, 1216)
      const cw = Math.min(400, (availableWidth - (cols - 1) * gap) / cols)
      const ch = (cw * 9) / 16 + META_H
      const rows = Math.ceil(cards.length / cols)

      const gw = cols * cw + (cols - 1) * gap
      const gh = rows * ch + (rows - 1) * gap

      deck!.style.height = `${gh}px`
      deck!.style.width = `${gw}px`
      // +80px de colchón: al estar rotadas, las tarjetas apiladas ocupan
      // más alto que su propio alto (el rectángulo rotado "crece"), así que
      // necesitan más margen para no pisar el título.
      closedY = ch / 2 + 80

      cards.forEach((c, i) => {
        c.style.width = `${cw}px`
        c.style.height = `${ch}px`
        const col = i % cols
        const row = Math.floor(i / cols)
        // El ancla (donde arranca la pila cerrada) está pegada al borde
        // superior del deck, no al centro: así la pila cerrada queda justo
        // debajo del título en vez de flotar en la mitad de toda la grilla.
        targets[i].x = col * (cw + gap) - gw / 2 + cw / 2
        targets[i].y = row * (ch + gap) + ch / 2
      })

      // Ahora que el header y la grilla ya tienen su tamaño real (flujo
      // normal), el bloque "sticky" mide exactamente lo que necesita.
      const stickyHeight = sticky!.getBoundingClientRect().height
      scrubDistance = Math.max(window.innerHeight * 1.4, stickyHeight * 0.55)
      section!.style.height = `${scrubDistance + stickyHeight}px`
    }

    function render() {
      const p = sectionProgress()
      cards.forEach((c, i) => {
        const cp = clamp((p - 0.08 - i * 0.045) / 0.5, 0, 1)
        const e = smooth(cp)
        const baseRot = Number(c.dataset.r) || 0
        // Desplazamiento propio de cada tarjeta en el estado apilado (en
        // abanico, independiente de su rotación) para que la pila se vea
        // desparramada en vez de perfectamente centrada.
        const angle = ((i * 63) % 360) * (Math.PI / 180)
        const closedX = Math.cos(angle) * 70
        const closedYi = closedY + Math.sin(angle) * 45
        const tx = closedX + (targets[i].x - closedX) * e
        const ty = closedYi + (targets[i].y - closedYi) * e
        const rot = baseRot * (1 - e)
        const sc = 0.86 + e * 0.14
        c.style.transform = `translate(-50%, -50%) translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(${sc})`
        c.style.zIndex = String(i)
      })
    }

    let ticking = false
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          render()
          ticking = false
        })
        ticking = true
      }
    }
    function onResize() {
      layout()
      render()
    }

    layout()
    render()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <section ref={sectionRef} id="portafolio" className="relative">
      <div ref={stickyRef} className="sticky top-0 overflow-hidden bg-secondary pb-16">
        {/* Header: se queda visible arriba mientras las tarjetas se abren */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 pt-20 pb-10 text-center"
        >
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">Portafolio</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
            Proyectos que hablan por sí solos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Cada sitio está diseñado para convertir visitantes en clientes. Scrolleá para descubrirlos.
          </p>
        </motion.div>

        {/* Deck: cards apiladas que se abren en grilla al scrollear */}
        <div ref={deckRef} className="relative mx-auto">
          {projects.map((p, i) => {
            const pillClass =
              "flex translate-y-4 items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-primary shadow-lg transition-transform duration-300 group-hover:translate-y-0"

            return (
              <div
                key={p.title}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                data-r={p.rotation}
                className="group absolute left-1/2 top-0 w-full overflow-hidden rounded-xl border-2 border-white bg-card shadow-[0_22px_55px_rgba(15,23,42,0.25)] [will-change:transform]"
              >
                <div className="relative w-full overflow-hidden bg-slate-100" style={{ height: "calc(100% - 96px)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${p.imageFit || "object-top"}`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-primary/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    {p.video ? (
                      <button type="button" onClick={() => setVideoOpen(p.video!)} className={pillClass}>
                        Ver Demo <Play className="h-3.5 w-3.5" fill="currentColor" />
                      </button>
                    ) : (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" className={pillClass}>
                        Ver <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <button type="button" onClick={() => setReviewOpen(p)} className={pillClass}>
                      Reseña <FileText className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-1.5 px-4 py-2" style={{ height: "96px" }}>
                  <span className="truncate text-base font-semibold text-foreground">{p.title}</span>
                  <div className="flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-bold text-primary/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal de video para proyectos sin demo pública */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
            onClick={() => setVideoOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setVideoOpen(null)}
                aria-label="Cerrar video"
                className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
              <video
                src={videoOpen}
                controls
                autoPlay
                className="w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de reseña: descripción del proyecto */}
      <AnimatePresence>
        {reviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
            onClick={() => setReviewOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg rounded-xl bg-card p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setReviewOpen(null)}
                aria-label="Cerrar reseña"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
              <h3 className="pr-8 text-xl font-bold text-foreground tracking-tight">{reviewOpen.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {reviewOpen.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-bold text-primary/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{reviewOpen.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
