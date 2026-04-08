import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const siteUrl = 'https://si-lepilates.com'
const title = 'Si Le Pilates | Studio de Pilates Reformer à Cergy-Pontoise'
const description = 'Si Le Pilates est un studio de Pilates Reformer à Cergy-Pontoise, pensé pour offrir une expérience élégante, apaisante et facile à vivre. Réservez votre séance en ligne.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Pilates', 'Pilates Reformer', 'Cergy-Pontoise', 'Studio Pilates', 'Cours de Pilates', 'Si Le Pilates'],
  authors: [{ name: 'Si Le Pilates' }],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Si Le Pilates',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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
    <html lang="fr" className={`${plusJakarta.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        {/* Flash-free init: theme-family + theme-mode avant hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{document.documentElement.setAttribute('data-theme-family','v2');var t=localStorage.getItem('theme')||'system';var dark=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.setAttribute('data-theme-mode',dark?'dark':'light');}catch(e){}})();`,
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
