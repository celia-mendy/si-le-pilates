"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Studio() {
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

  return (
    <section ref={sectionRef} id="studio" className="py-24 sm:py-32 lg:py-40 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-1000 order-2 lg:order-1">
            <div className="relative h-[520px] sm:h-[620px] lg:h-[680px]">
              {/* Image principale — haut gauche */}
              <div className="absolute left-0 top-0 w-[62%] h-[88%] rounded-3xl overflow-hidden shadow-2xl shadow-cocoa/10">
                <Image
                  src="/images/studio.jpeg"
                  alt={t.studio.imgAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 62vw, 31vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/10 to-transparent" />
              </div>
              {/* Image accent (fleurs) — bas droite */}
              <div className="absolute right-0 bottom-0 w-[55%] h-[68%] rounded-2xl overflow-hidden shadow-xl shadow-cocoa/15 ring-4 ring-cream">
                <Image
                  src="/images/studio2.jpeg"
                  alt={t.studio.imgAlt2}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 55vw, 28vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/8 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
              {t.studio.overline}
            </p>
            <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown dark:text-foreground mb-8 text-balance">
              {t.studio.title}
            </h2>
            <div className="space-y-6">
              <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-soft-taupe leading-relaxed whitespace-pre-line">
                {t.studio.p1}
              </p>
              <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 text-lg text-soft-taupe leading-relaxed whitespace-pre-line">
                {t.studio.p2}
              </p>
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
