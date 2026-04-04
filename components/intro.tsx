"use client"

import { useEffect, useRef } from "react"

const stats = [
  { label: "Petit groupe" },
  { label: "45 min" },
  { label: "Cergy-Pontoise" },
  { label: "Réservation en ligne" },
]

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-white"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
          {"L'esprit Silpilate"}
        </p>

        {/* Title */}
        <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown mb-8 text-balance">
          Un studio pensé comme une parenthèse.
        </h2>

        {/* Text */}
        <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg sm:text-xl text-soft-taupe leading-relaxed max-w-3xl mx-auto mb-16">
          Ici, tout a été imaginé pour retrouver un corps plus aligné, une respiration plus fluide
          et une sensation d&apos;équilibre durable. Le lieu est calme. La pratique est précise. La
          réservation reste simple.
        </p>

        {/* Stats */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="px-5 py-2.5 bg-warm-beige/50 rounded-full text-sm text-cocoa font-medium"
            >
              {stat.label}
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
