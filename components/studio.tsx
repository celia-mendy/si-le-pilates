"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function Studio() {
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
      id="studio"
      className="py-24 sm:py-32 lg:py-40 bg-cream"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-1000 order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-cocoa/10">
              <Image
                src="/images/190701_GOOD-DAY_1940.jpg"
                alt="Intérieur lumineux du studio Silpilate avec machines Pilates Reformer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/10 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Label */}
            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
              Le studio
            </p>

            {/* Title */}
            <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown mb-8 text-balance">
              Un lieu doux, élégant et lumineux.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6">
              <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-soft-taupe leading-relaxed">
                Dès l&apos;entrée, Silpilate a été pensé pour que l&apos;on se sente bien. Les matières sont
                chaleureuses, les tons sont apaisants, et chaque détail accompagne cette idée
                d&apos;un mouvement plus conscient.
              </p>
              <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 text-lg text-soft-taupe leading-relaxed">
                Les cours se déroulent en petit groupe pour préserver la qualité de
                l&apos;accompagnement et la sensation d&apos;un lieu à taille humaine.
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
