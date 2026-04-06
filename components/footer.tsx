import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <a href="#" className="w-fit transition-transform hover:scale-105 active:scale-95 duration-200">
              <div className="h-10 w-60 relative overflow-hidden flex items-center justify-start">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_web_2%20%281%29-6AFhZhsJKIZCqCGS7FUlpcBh7lr0dz.png"
                  alt="NB Digital"
                  className="absolute h-[210px] w-auto max-w-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-0 invert"
                />
              </div>
            </a>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs text-pretty">
              Soluciones digitales a medida para profesionales y emprendedores de Argentina. Rápido, moderno y tuyo.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {[
                { Icon: Linkedin, href: "linkedin.com/in/nbarragandev", label: "LinkedIn" },
                { Icon: Instagram, href: "https://www.instagram.com/nbdigital_lat/", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-background/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-background/40 mb-1">Navegación</p>
            {["Soluciones", "Portafolio", "Por qué NB", "Precios", "FAQ", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-").replace(/é/g, "e").replace(/ó/g, "o").replace(/¿/g, "")}`}
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-background/40 mb-1">Contacto</p>
            <p className="text-sm text-background/60">natalia.barragannb@gmail.com</p>
            <p className="text-sm text-background/60">WhatsApp · Argentina</p>
            <p className="text-sm text-background/60">Trabajo 100% remoto</p>
          </div>
        </div>

        <div className="pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} NB Digital. Todos los derechos reservados.
          </p>
          <p className="text-xs text-background/40">
            Hecho con Next.js · React · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
