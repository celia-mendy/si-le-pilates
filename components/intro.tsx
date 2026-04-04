"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in")
        })
      },
      { threshold: 0.2 }
    )

    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
          {t.intro.overline}
        </p>

        <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown dark:text-foreground mb-8 text-balance">
          {t.intro.title}
        </h2>

        <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg sm:text-xl text-soft-taupe leading-relaxed max-w-3xl mx-auto mb-16">
          {t.intro.body}
        </p>

        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {t.intro.chips.map((chip, index) => (
            <div
              key={index}
              className="px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                background: "var(--th-chip)",
                color: "var(--th-chip-text)",
                border: "1px solid color-mix(in srgb, var(--th-border) 85%, transparent)",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
