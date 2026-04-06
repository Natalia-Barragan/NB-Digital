import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'NB Digital — Soluciones Digitales a Medida',
  description:
    'Desarrollo web profesional para estudios contables, consultorios y e-commerce en Argentina. Sitios rápidos, modernos y autogestionables con Next.js y React.',
  keywords: ['desarrollo web Argentina', 'sitio web profesional', 'e-commerce', 'estudio contable web', 'consultorio online'],
  authors: [{ name: 'NB Digital' }],
  openGraph: {
    title: 'NB Digital — Soluciones Digitales a Medida',
    description: 'Desarrollo web a medida para que ganes tiempo y profesionalices tu marca.',
    type: 'website',
  },
  icons: {
    icon: '/icon.png?v=2',
    shortcut: '/icon.png?v=2',
    apple: '/icon.png?v=2',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
