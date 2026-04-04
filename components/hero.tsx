"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    
    if (prefersReducedMotion) return

    // Simple fade-in animation on load
    const content = contentRef.current
    if (content) {
      content.style.opacity = "0"
      content.style.transform = "translateY(30px)"
      
      requestAnimationFrame(() => {
        content.style.transition = "opacity 1s ease-out, transform 1s ease-out"
        content.style.opacity = "1"
        content.style.transform = "translateY(0)"
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('/images/NRO_201009_GD_0705.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/40 to-cream/80" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        {/* Eyebrow */}
        <p className="mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-soft-taupe font-medium">
          Studio de Pilates Reformer
        </p>

        {/* Main Title */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-medium leading-[1.05] text-deep-brown text-balance mb-8">
          Le calme du lieu.
          <br />
          <span className="text-cocoa">La simplicité pour réserver.</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-soft-taupe leading-relaxed mb-12">
          Silpilate est un studio de Pilates Reformer à Cergy-Pontoise, pensé pour offrir une
          expérience élégante, apaisante et facile à vivre.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("booking")}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-deep-brown rounded-full hover:bg-cocoa transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-deep-brown/20"
          >
            Réserver une séance
          </button>
          <button
            onClick={() => scrollToSection("studio")}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-deep-brown bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 transition-all duration-300 border border-cocoa/10"
          >
            Découvrir le studio
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-soft-taupe">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-soft-taupe to-transparent" />
      </div>
    </section>
  )
}
