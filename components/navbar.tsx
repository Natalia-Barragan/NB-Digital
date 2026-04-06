"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Por qué NB", href: "#por-que" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 transition-transform hover:scale-105 active:scale-95 duration-200">
          <div className="h-12 w-64 relative overflow-hidden flex items-center justify-start">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_web_2%20%281%29-6AFhZhsJKIZCqCGS7FUlpcBh7lr0dz.png"
              alt="NB Digital"
              className="absolute h-[256px] w-auto max-w-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-lg text-sm font-semibold text-primary-foreground brand-gradient hover:opacity-90 transition-opacity"
        >
          Contactar
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg text-sm font-semibold text-white brand-gradient"
              onClick={() => setMenuOpen(false)}
            >
              Contactar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
