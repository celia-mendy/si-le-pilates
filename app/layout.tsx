import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/language-context'
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
  title: 'Si Le Pilates | Studio de Pilates Reformer à Cergy-Pontoise',
  description: 'Si Le Pilates est un studio de Pilates Reformer à Cergy-Pontoise, pensé pour offrir une expérience élégante, apaisante et facile à vivre. Réservez votre séance en ligne.',
  keywords: ['Pilates', 'Pilates Reformer', 'Cergy-Pontoise', 'Studio Pilates', 'Cours de Pilates', 'Si Le Pilates'],
  authors: [{ name: 'Si Le Pilates' }],
  openGraph: {
    title: 'Si Le Pilates | Studio de Pilates Reformer à Cergy-Pontoise',
    description: 'Un studio de Pilates Reformer premium, calme et élégant. Réservez votre séance en ligne.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export const viewport: Viewport = {
  themeColor: '#F9F6F1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        {/* Flash-free init: theme-family + theme-mode avant hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var f=localStorage.getItem('silpilate-theme-family')||'v2';document.documentElement.setAttribute('data-theme-family',f);var t=localStorage.getItem('theme')||'system';var dark=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.setAttribute('data-theme-mode',dark?'dark':'light');}catch(e){}})();`,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
          </LanguageProvider>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
