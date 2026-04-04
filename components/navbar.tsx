"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeFamilyToggle } from "@/components/theme-family-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={
        isScrolled
          ? {
              background: "color-mix(in srgb, var(--background) 84%, transparent)",
              borderBottom: "1px solid color-mix(in srgb, var(--th-border) 70%, transparent)",
            }
          : undefined
      }
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Left — Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("localisation")}
              className="text-sm transition-colors"
              style={{ color: "var(--th-text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--th-text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--th-text-muted)")}
            >
              {t.nav.location}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm transition-colors"
              style={{ color: "var(--th-text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--th-text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--th-text-muted)")}
            >
              {t.nav.faq}
            </button>
          </div>

          {/* Logo — Center */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl sm:text-3xl font-semibold tracking-wide whitespace-nowrap"
            style={{ color: "var(--th-text)" }}
          >
            {t.brand}
          </Link>

          {/* Right — Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("tarifs")}
              className="text-sm transition-colors"
              style={{ color: "var(--th-text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--th-text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--th-text-muted)")}
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full hover:-translate-y-0.5 shadow-md"
            >
              {t.nav.book}
            </button>
            <ThemeFamilyToggle />
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden ml-auto items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              style={{ color: "var(--th-text)" }}
              aria-label={isMobileMenuOpen ? t.nav.mobileAriaClose : t.nav.mobileAriaOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b py-4"
            style={{
              background: "color-mix(in srgb, var(--background) 95%, transparent)",
              borderColor: "color-mix(in srgb, var(--th-border) 70%, transparent)",
            }}
          >
            <div className="flex flex-col gap-4 px-4">
              <button
                onClick={() => scrollToSection("localisation")}
                className="text-left py-2 transition-colors"
                style={{ color: "var(--th-text-muted)" }}
              >
                {t.nav.location}
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left py-2 transition-colors"
                style={{ color: "var(--th-text-muted)" }}
              >
                {t.nav.faq}
              </button>
              <button
                onClick={() => scrollToSection("tarifs")}
                className="text-left py-2 transition-colors"
                style={{ color: "var(--th-text-muted)" }}
              >
                {t.nav.pricing}
              </button>
              <button
                onClick={() => scrollToSection("booking")}
                className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full w-full"
              >
                {t.nav.book}
              </button>
              <div className="flex items-center gap-3 py-1">
                <span className="text-sm" style={{ color: "var(--th-text-muted)" }}>
                  {t.nav.palette}
                </span>
                <ThemeFamilyToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
