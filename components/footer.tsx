"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-deep-brown text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-sans text-3xl font-bold text-white mb-4 block">
              {t.brand}
            </Link>
            <p className="text-white/60 leading-relaxed max-w-md mb-6 whitespace-pre-line">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/silepilatespontoise/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                aria-label="Instagram Si Le Pilates"
              >
                <Instagram className="w-5 h-5" />
                <span>{t.footer.instagram}</span>
              </a>
              <a
                href="https://www.tiktok.com/@silepilates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                aria-label="TikTok Si Le Pilates"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.8a8.27 8.27 0 0 0 3.76.92V6.69Z" />
                </svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-white mb-4">{t.footer.navTitle}</h3>
            <ul className="space-y-3">
              {t.footer.navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-white mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-3 text-white/60">
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.email}
                </a>
              </li>
              <li className="whitespace-pre-line">{t.footer.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {t.brand}. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            {t.footer.legal.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-white/40 hover:text-white/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
