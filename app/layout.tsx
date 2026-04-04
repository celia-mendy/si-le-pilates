import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Silpilate | Studio de Pilates Reformer à Cergy-Pontoise',
  description: 'Silpilate est un studio de Pilates Reformer à Cergy-Pontoise, pensé pour offrir une expérience élégante, apaisante et facile à vivre. Réservez votre séance en ligne.',
  keywords: ['Pilates', 'Pilates Reformer', 'Cergy-Pontoise', 'Studio Pilates', 'Cours de Pilates', 'Silpilate'],
  authors: [{ name: 'Silpilate' }],
  openGraph: {
    title: 'Silpilate | Studio de Pilates Reformer à Cergy-Pontoise',
    description: 'Un studio de Pilates Reformer premium, calme et élégant. Réservez votre séance en ligne.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export const viewport: Viewport = {
  themeColor: '#F7F1E8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-cream text-deep-brown">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
