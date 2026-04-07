"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const images = [
  "/images/190701_GOOD-DAY_242+copy.jpg",
  "/images/190701_GOOD-DAY_140.jpg",
]

export function Experience() {
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
    <section ref={sectionRef} className="py-24 sm:py-32 lg:py-40 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
            {t.experience.overline}
          </p>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown dark:text-foreground mb-6 text-balance">
            {t.experience.title}
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg sm:text-xl text-soft-taupe max-w-2xl mx-auto whitespace-pre-line">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {t.experience.formats.map((format, index) => (
            <div
              key={index}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="group relative bg-card rounded-3xl overflow-hidden shadow-lg shadow-cocoa/5 hover:shadow-xl hover:shadow-cocoa/10 transition-all duration-500">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={images[index]}
                    alt={format.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/20 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-deep-brown dark:text-foreground mb-3">
                    {format.title}
                  </h3>
                  <p className="text-soft-taupe leading-relaxed">{format.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-400 text-center mb-12">
          <p className="text-soft-taupe leading-relaxed max-w-2xl mx-auto">
            {t.experience.privatisation}
          </p>
        </div>

        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 text-center">
          <button
            onClick={scrollToBooking}
            className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full hover:-translate-y-0.5 shadow-lg"
          >
            {t.experience.cta}
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
