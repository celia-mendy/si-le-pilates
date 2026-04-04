"use client"

import { useEffect, useRef } from "react"

const benefits = [
  {
    title: "Posture",
    text: "Une pratique qui aide à mieux se tenir, à mieux se placer et à retrouver une sensation de stabilité dans le corps.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6C17.1046 6 18 5.10457 18 4C18 2.89543 17.1046 2 16 2C14.8954 2 14 2.89543 14 4C14 5.10457 14.8954 6 16 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 8V18M16 18L12 28M16 18L20 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Tonicité",
    text: "Le corps se renforce en douceur, avec précision, sans brutalité, dans un rythme régulier et soutenable.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Équilibre",
    text: "Une séance pour revenir à soi, relâcher certaines tensions et retrouver une respiration plus ample.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 16H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="22" cy="20" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

export function Benefits() {
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

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-warm-beige/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
            Les bénéfices
          </p>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown text-balance">
            Renforcer, respirer, retrouver de l&apos;aisance.
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 h-full shadow-lg shadow-cocoa/5 hover:shadow-xl hover:shadow-cocoa/10 transition-shadow duration-500">
                <div className="w-16 h-16 rounded-2xl bg-powder-rose/30 flex items-center justify-center text-cocoa mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-medium text-deep-brown mb-4">
                  {benefit.title}
                </h3>
                <p className="text-soft-taupe leading-relaxed">
                  {benefit.text}
                </p>
              </div>
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
