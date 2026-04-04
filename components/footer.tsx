"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"

const navigation = [
  { name: "Le studio", href: "#studio" },
  { name: "Tarifs", href: "#tarifs" },
  { name: "Localisation", href: "#localisation" },
  { name: "FAQ", href: "#faq" },
  { name: "Réserver", href: "#booking" },
]

const legal = [
  { name: "Mentions légales", href: "#" },
  { name: "Confidentialité", href: "#" },
  { name: "CGV", href: "#" },
]

export function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-deep-brown text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-3xl font-semibold text-white mb-4 block">
              Silpilate
            </Link>
            <p className="text-white/60 leading-relaxed max-w-md mb-6">
              Studio de Pilates Reformer à Cergy-Pontoise. Un lieu calme, élégant et simple à
              réserver pour une pratique qui vous ressemble.
            </p>
            <a
              href="https://instagram.com/silpilate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              aria-label="Instagram Silpilate"
            >
              <Instagram className="w-5 h-5" />
              <span>@silpilate</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
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
            <h3 className="font-medium text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-white/60">
              <li>contact@silpilate.fr</li>
              <li>Cergy-Pontoise, 95000</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Silpilate. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/40 hover:text-white/60 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
