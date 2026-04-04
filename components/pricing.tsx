"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Pricing() {
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
      { threshold: 0.15 }
    )

    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} id="tarifs" className="py-24 sm:py-32 lg:py-40 bg-powder-rose/20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
            {t.pricing.overline}
          </p>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown dark:text-foreground mb-6 text-balance">
            {t.pricing.title}
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg sm:text-xl text-soft-taupe max-w-2xl mx-auto whitespace-pre-line">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
          <div className="relative bg-card rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-2xl shadow-cocoa/10 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-powder-rose/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-muted-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <span className="inline-flex items-center px-4 py-1.5 bg-muted-gold/20 text-cocoa dark:text-muted-gold text-sm font-medium rounded-full mb-8">
                {t.pricing.badge}
              </span>

              <div className="mb-8">
                <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-medium text-deep-brown dark:text-foreground">
                  {t.pricing.sessions}
                </span>
                <span className="block mt-2 font-serif text-4xl sm:text-5xl text-cocoa dark:text-muted-gold">
                  {t.pricing.amount}
                </span>
              </div>

              <p className="text-lg text-soft-taupe leading-relaxed max-w-md mx-auto mb-10 whitespace-pre-line">
                {t.pricing.description}
              </p>

              <button
                onClick={scrollToBooking}
                className="btn-primary inline-flex items-center justify-center px-10 py-4 text-base font-medium rounded-full hover:-translate-y-0.5 shadow-lg"
              >
                {t.pricing.cta}
              </button>
            </div>
          </div>
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
