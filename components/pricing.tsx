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
      { threshold: 0.1 }
    )

    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="tarifs" className="py-24 sm:py-32 lg:py-40 bg-powder-rose/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        <div className="flex flex-wrap justify-center gap-6">
          {t.pricing.cards.map((card, index) => (
            <div
              key={card.name}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-card rounded-3xl p-8 flex flex-col shadow-lg shadow-cocoa/5 hover:shadow-xl hover:shadow-cocoa/10${card.featured ? " ring-1 ring-muted-gold/40" : ""}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="font-serif text-xl text-deep-brown dark:text-foreground leading-tight">
                  {card.name}
                </h3>
                <span className="font-serif text-2xl text-muted-gold whitespace-nowrap">
                  {card.price}
                </span>
              </div>

              {/* Popular badge */}
              {card.featured && (
                <span className="inline-flex w-fit items-center px-3 py-0.5 bg-muted-gold/15 text-cocoa dark:text-muted-gold text-xs font-medium rounded-full mb-3">
                  {t.pricing.popularBadge}
                </span>
              )}

              {/* Meta: credits + validity */}
              <div className="flex flex-col gap-1.5 mt-3 mb-1">
                <div className="flex items-center gap-2 text-soft-taupe text-sm">
                  <svg className="w-4 h-4 text-muted-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <span>{card.credits}</span>
                </div>
                <div className="flex items-center gap-2 text-soft-taupe text-sm">
                  <svg className="w-4 h-4 text-muted-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  <span>{card.validity}</span>
                </div>
                {card.restrictions.length > 0 && (
                  <div className="flex items-start gap-2 text-soft-taupe/70 text-sm">
                    <svg className="w-4 h-4 text-soft-taupe/50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <span>{card.restrictions.join(" · ")}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-soft-taupe text-sm leading-relaxed flex-1 mt-4">
                {card.description}
              </p>

              {/* CTA */}
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium rounded-full hover:-translate-y-0.5 transition-transform shadow-md"
              >
                {t.pricing.cta}
              </a>
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
