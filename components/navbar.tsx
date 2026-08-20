"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

declare global {
  interface Window {
    BsportWidget?: { mount: (config: Record<string, unknown>) => void }
  }
}

function loadBsportCdn(): Promise<void> {
  return new Promise((resolve) => {
    if (window.BsportWidget) { resolve(); return }
    if (!document.getElementById("bsport-widget-cdn")) {
      const s = document.createElement("script")
      s.id = "bsport-widget-cdn"
      s.src = "https://cdn.bsport.io/scripts/widget.js"
      s.onload = () => waitForBsport(resolve)
      document.head.appendChild(s)
    } else {
      waitForBsport(resolve)
    }
  })
}

function waitForBsport(resolve: () => void, attempt = 0) {
  if (window.BsportWidget || attempt > 50) { resolve(); return }
  setTimeout(() => waitForBsport(resolve, attempt + 1), 100)
}

const BSPORT_LOGIN_CONFIG = {
  companyId: 5398,
  franchiseId: null,
  dialogMode: 1,
  widgetType: "loginButton",
  showFab: false,
  fullScreenPopup: false,
  config: {
    loginButton: { openMemberProfile: true },
  },
}

function triggerBsportLogin() {
  const container = document.getElementById('bsport-login-hidden')
  if (!container) return
  const btn = container.querySelector<HTMLElement>('button, a, [role="button"]')
    ?? container.querySelector<HTMLElement>('*')
  if (btn) {
    btn.style.pointerEvents = 'auto'
    btn.click()
  }
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    loadBsportCdn().then(() => {
      if (!window.BsportWidget) return
      window.BsportWidget.mount({
        parentElement: "bsport-login-hidden",
        ...BSPORT_LOGIN_CONFIG,
      })
    })
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled ? "shadow-sm" : ""
      }`}
      style={{
        background: "color-mix(in oklch, var(--background) 80%, transparent)",
        borderBottom: "1px solid var(--th-border)",
      }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">

          {/* ── Desktop left ── */}
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
          </div>

          {/* ── Logo — centered ── */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-sans text-2xl sm:text-3xl font-bold tracking-wide whitespace-nowrap"
            style={{ color: "var(--th-text)" }}
          >
            {t.brand}
          </Link>

          {/* ── Desktop right ── */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={triggerBsportLogin}
              className="text-sm transition-colors"
              style={{ color: "var(--th-text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--th-text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--th-text-muted)")}
            >
              {t.hero.ctaLogin}
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full hover:-translate-y-0.5 shadow-md"
            >
              {t.nav.book}
            </button>
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* ── Mobile right — hamburger only ── */}
          <div className="flex md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full transition-colors"
              style={{ color: "var(--th-text)" }}
              aria-label={isMobileMenuOpen ? t.nav.mobileAriaClose : t.nav.mobileAriaOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 border-b backdrop-blur-md"
            style={{
              background: "color-mix(in srgb, var(--background) 92%, transparent)",
              borderColor: "var(--th-border)",
            }}
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {/* Nav links */}
              <button
                onClick={() => scrollToSection("localisation")}
                className="text-left py-3 text-base font-medium transition-colors border-b"
                style={{
                  color: "var(--th-text)",
                  borderColor: "color-mix(in srgb, var(--th-border) 40%, transparent)",
                }}
              >
                {t.nav.location}
              </button>

              <button
                onClick={() => { setIsMobileMenuOpen(false); triggerBsportLogin() }}
                className="text-left py-3 text-base font-medium transition-colors border-b"
                style={{
                  color: "var(--th-text)",
                  borderColor: "color-mix(in srgb, var(--th-border) 40%, transparent)",
                }}
              >
                {t.hero.ctaLogin}
              </button>

              {/* Book CTA */}
              <button
                onClick={() => scrollToSection("booking")}
                className="btn-primary inline-flex items-center justify-center px-5 py-3.5 text-base font-medium rounded-full w-full mt-4"
              >
                {t.nav.book}
              </button>

              {/* Controls row */}
              <div className="flex items-center justify-between mt-5 pt-4"
                style={{ borderTop: "1px solid color-mix(in srgb, var(--th-border) 40%, transparent)" }}
              >
                <span className="text-sm" style={{ color: "var(--th-text-muted)" }}>
                  Langue / Theme
                </span>
                <div className="flex items-center gap-2">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Hidden BSport login widget — triggered programmatically from hero */}
      <div
        id="bsport-login-hidden"
        aria-hidden="true"
        style={{ position: 'fixed', top: '-9999px', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
      />
    </header>
  )
}
