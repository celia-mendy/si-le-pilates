"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const content = contentRef.current
    if (content) {
      content.style.opacity = "0"
      content.style.transform = "translateY(30px)"
      requestAnimationFrame(() => {
        content.style.transition = "opacity 1s ease-out, transform 1s ease-out"
        content.style.opacity = "1"
        content.style.transform = "translateY(0)"
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('/images/NRO_201009_GD_0705.jpg')` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--background) 60%, transparent), color-mix(in srgb, var(--background) 40%, transparent) 50%, color-mix(in srgb, var(--background) 80%, transparent))",
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        <p
          className="mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium"
          style={{ color: "var(--th-text-muted)" }}
        >
          {t.hero.eyebrow}
        </p>

        <h1
          className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-medium leading-[1.05] text-balance mb-8"
          style={{ color: "var(--th-text)" }}
        >
          {t.hero.title1}
          <br />
          <span className="whitespace-pre-line" style={{ color: "var(--th-text-muted)" }}>{t.hero.title2}</span>
        </h1>

        <p
          className="mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed mb-12 whitespace-pre-line"
          style={{ color: "var(--th-text-muted)" }}
        >
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("booking")}
            className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full hover:-translate-y-0.5 shadow-lg"
          >
            {t.hero.ctaPrimary}
          </button>
          <button
            onClick={() => scrollToSection("studio")}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium backdrop-blur-sm rounded-full transition-all duration-300"
            style={{
              background: "color-mix(in srgb, var(--th-surface) 84%, transparent)",
              color: "var(--th-text)",
              border: "1px solid color-mix(in srgb, var(--th-border) 90%, transparent)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--th-surface)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "color-mix(in srgb, var(--th-surface) 84%, transparent)")
            }
          >
            {t.hero.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "color-mix(in srgb, var(--th-text-muted) 78%, transparent)" }}
      >
        <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, var(--th-text-muted), transparent)" }}
        />
      </div>
    </section>
  )
}
