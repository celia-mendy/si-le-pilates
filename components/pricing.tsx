"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-muted-gold/15 text-cocoa dark:text-foreground/70">
      {children}
    </span>
  )
}

function PillDark({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#F0EBE3]/10 text-[#F0EBE3]/70">
      {children}
    </span>
  )
}

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

  const featured   = t.pricing.cards[3]  // 5 Séances
  const decouverte = t.pricing.cards[0]  // Séance découverte
  const one        = t.pricing.cards[1]  // 1 Séance
  const three      = t.pricing.cards[2]  // 3 Séances
  const ten        = t.pricing.cards[4]  // 10 Séances

  return (
    <section ref={sectionRef} id="tarifs" className="py-12 sm:py-16 lg:py-20 bg-warm-beige/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-3 text-xs uppercase tracking-[0.2em] text-muted-gold font-medium">
            {t.pricing.overline}
          </p>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-deep-brown dark:text-foreground mb-3 text-balance">
            {t.pricing.title}
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-base text-soft-taupe max-w-xl mx-auto whitespace-pre-line">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

          {/* Featured — 5 Séances (col-span-2 on lg) */}
          <div
            className="reveal opacity-0 translate-y-8 transition-all duration-700 lg:col-span-2 bg-[#3A2E2A] rounded-3xl p-7 lg:p-9 flex flex-col"
            style={{ transitionDelay: "200ms" }}
          >
            <span className="inline-flex w-fit items-center px-3 py-1 bg-muted-gold/20 text-muted-gold text-xs font-medium rounded-full mb-4">
              {t.pricing.popularBadge}
            </span>
            <p className="text-xs uppercase tracking-wide text-[#F0EBE3]/70 mb-2">
              {featured.name}
            </p>
            <p className="font-serif text-5xl lg:text-6xl text-[#F0EBE3] leading-none mb-3">
              {featured.price}
            </p>
            <p className="text-sm text-[#F0EBE3]/60 leading-relaxed line-clamp-2 flex-1 min-h-0">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <PillDark>{featured.credits}</PillDark>
              <PillDark>{featured.validity}</PillDark>
            </div>
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium rounded-full bg-muted-gold text-cocoa hover:-translate-y-0.5 transition-transform shadow-md"
            >
              {t.pricing.cta}
            </a>
          </div>

          {/* Découverte */}
          <div
            className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-sand rounded-3xl p-7 flex flex-col"
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-xs uppercase tracking-wide text-soft-taupe/60 dark:text-foreground/70 mb-2">
              {decouverte.name}
            </p>
            <p className="font-serif text-4xl text-deep-brown dark:text-foreground leading-none mb-3">
              {decouverte.price}
            </p>
            <p className="text-sm text-soft-taupe/70 dark:text-foreground/50 leading-relaxed line-clamp-2 flex-1 min-h-0">
              {decouverte.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <Pill>{decouverte.credits}</Pill>
              <Pill>{decouverte.validity}</Pill>
            </div>
            {decouverte.restrictions.length > 0 && (
              <p className="text-xs italic text-soft-taupe/70 dark:text-foreground/40 mt-3">
                {decouverte.restrictions.join(" · ")}
              </p>
            )}
            <a
              href={decouverte.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium rounded-full hover:-translate-y-0.5 transition-transform shadow-md"
            >
              {t.pricing.cta}
            </a>
          </div>

          {/* 1 Séance */}
          <div
            className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-card rounded-3xl p-6 lg:p-7 flex flex-col"
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-xs uppercase tracking-wide text-soft-taupe/60 dark:text-foreground/70 mb-2">
              {one.name}
            </p>
            <p className="font-serif text-4xl text-deep-brown dark:text-foreground leading-none mb-3">
              {one.price}
            </p>
            <p className="text-sm text-soft-taupe/60 dark:text-foreground/50 leading-relaxed line-clamp-2 flex-1 min-h-0">
              {one.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <Pill>{one.credits}</Pill>
              <Pill>{one.validity}</Pill>
            </div>
            <a
              href={one.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium rounded-full hover:-translate-y-0.5 transition-transform shadow-md"
            >
              {t.pricing.cta}
            </a>
          </div>

          {/* 3 Séances */}
          <div
            className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-card rounded-3xl p-6 lg:p-7 flex flex-col"
            style={{ transitionDelay: "500ms" }}
          >
            <p className="text-xs uppercase tracking-wide text-soft-taupe/60 dark:text-foreground/70 mb-2">
              {three.name}
            </p>
            <p className="font-serif text-4xl text-deep-brown dark:text-foreground leading-none mb-3">
              {three.price}
            </p>
            <p className="text-sm text-soft-taupe/60 dark:text-foreground/50 leading-relaxed line-clamp-2 flex-1 min-h-0">
              {three.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <Pill>{three.credits}</Pill>
              <Pill>{three.validity}</Pill>
            </div>
            <a
              href={three.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium rounded-full hover:-translate-y-0.5 transition-transform shadow-md"
            >
              {t.pricing.cta}
            </a>
          </div>

          {/* 10 Séances */}
          <div
            className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-card rounded-3xl p-6 lg:p-7 flex flex-col"
            style={{ transitionDelay: "600ms" }}
          >
            <p className="text-xs uppercase tracking-wide text-soft-taupe/60 dark:text-foreground/70 mb-2">
              {ten.name}
            </p>
            <p className="font-serif text-4xl text-deep-brown dark:text-foreground leading-none mb-3">
              {ten.price}
            </p>
            <p className="text-sm text-soft-taupe/60 dark:text-foreground/50 leading-relaxed line-clamp-2 flex-1 min-h-0">
              {ten.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <Pill>{ten.credits}</Pill>
              <Pill>{ten.validity}</Pill>
            </div>
            <a
              href={ten.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium rounded-full hover:-translate-y-0.5 transition-transform shadow-md"
            >
              {t.pricing.cta}
            </a>
          </div>

        </div>

        {/* Abonnements Section */}
        <div className="mt-24 lg:mt-32">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-3 text-xs uppercase tracking-[0.2em] text-muted-gold font-medium">
              {t.memberships.overline}
            </p>
            <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-deep-brown dark:text-foreground mb-3 text-balance">
              {t.memberships.title}
            </h2>
            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-base text-soft-taupe max-w-xl mx-auto whitespace-pre-line">
              {t.memberships.subtitle}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.memberships.cards.map((card, idx) => (
              <div
                key={card.name}
                className={`reveal opacity-0 translate-y-8 transition-all duration-700 rounded-3xl p-7 lg:p-8 flex flex-col ${
                  card.featured 
                    ? "bg-[#3A2E2A] text-[#F0EBE3]" 
                    : "bg-card text-deep-brown dark:text-foreground border border-muted-gold/10"
                }`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <p className={`text-xs uppercase tracking-wide mb-2 ${
                  card.featured ? "text-[#F0EBE3]/70" : "text-soft-taupe/60 dark:text-foreground/70"
                }`}>
                  {card.name}
                </p>
                <p className={`font-serif text-4xl lg:text-5xl leading-none mb-3 ${
                  card.featured ? "text-[#F0EBE3]" : "text-deep-brown dark:text-foreground"
                }`}>
                  {card.price}
                </p>
                <p className={`text-sm leading-relaxed flex-1 min-h-0 ${
                  card.featured ? "text-[#F0EBE3]/60" : "text-soft-taupe/70 dark:text-foreground/50"
                }`}>
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {card.featured ? (
                    <>
                      <PillDark>{card.credits}</PillDark>
                      <PillDark>{card.validity}</PillDark>
                    </>
                  ) : (
                    <>
                      <Pill>{card.credits}</Pill>
                      <Pill>{card.validity}</Pill>
                    </>
                  )}
                </div>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium rounded-full transition-all shadow-md hover:-translate-y-0.5 ${
                    card.featured
                      ? "bg-muted-gold text-cocoa"
                      : "btn-primary"
                  }`}
                >
                  {t.memberships.cta}
                </a>
              </div>
            ))}
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
