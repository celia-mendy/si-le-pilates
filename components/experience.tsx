"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const formats = [
  {
    title: "Séances privées",
    text: "Un format dédié à celles et ceux qui souhaitent un accompagnement entièrement personnalisé.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Cours collectifs",
    text: "Une dynamique douce et motivante, dans un groupe à taille humaine pour pratiquer avec confort.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
  },
]

export function Experience() {
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
      { threshold: 0.15 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-cream"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
            {"L'expérience"}
          </p>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown mb-6 text-balance">
            Une pratique guidée, dans un cadre serein.
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg sm:text-xl text-soft-taupe max-w-2xl mx-auto">
            {"L'énergie du collectif, avec l'attention et la précision qui comptent vraiment."}
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {formats.map((format, index) => (
            <div
              key={format.title}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-cocoa/5 hover:shadow-xl hover:shadow-cocoa/10 transition-all duration-500">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={format.image}
                    alt={format.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/20 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-deep-brown mb-3">
                    {format.title}
                  </h3>
                  <p className="text-soft-taupe leading-relaxed">
                    {format.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 text-center">
          <button
            onClick={scrollToBooking}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-deep-brown rounded-full hover:bg-cocoa transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-deep-brown/20"
          >
            Voir les disponibilités
          </button>
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
