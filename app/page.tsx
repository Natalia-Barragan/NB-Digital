import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Solutions from "@/components/solutions"
import WhyUs from "@/components/why-us"
import Pricing from "@/components/pricing"
import Contact from "@/components/contact"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <Solutions />
      <WhyUs />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  )
}
