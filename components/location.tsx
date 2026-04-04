"use client"

import { useEffect, useRef } from "react"
import { MapPin, Mail, Phone } from "lucide-react"

export function Location() {
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
      id="localisation"
      className="py-24 sm:py-32 lg:py-40 bg-cream"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            {/* Label */}
            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
              Localisation
            </p>

            {/* Title */}
            <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown mb-8 text-balance">
              Au cœur de Cergy-Pontoise.
            </h2>

            {/* Description */}
            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-soft-taupe leading-relaxed mb-12">
              Un studio accessible, apaisant et pensé comme une vraie bulle dans le rythme du
              quotidien.
            </p>

            {/* Info Blocks */}
            <div className="space-y-6">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-warm-beige/60 flex items-center justify-center text-cocoa shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-brown mb-1">Adresse</h3>
                  <p className="text-soft-taupe">
                    Gare de Cergy
                    <br />
                    95000 Cergy-Pontoise
                  </p>
                </div>
              </div>

              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-400 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-warm-beige/60 flex items-center justify-center text-cocoa shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-brown mb-1">Accès</h3>
                  <p className="text-soft-taupe">
                    Confirmation envoyée par email après réservation avec toutes les informations
                    utiles.
                  </p>
                </div>
              </div>

              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-warm-beige/60 flex items-center justify-center text-cocoa shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-brown mb-1">Contact</h3>
                  <p className="text-soft-taupe">contact@silpilate.fr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-cocoa/10">
              <iframe
                src="https://maps.google.com/maps?q=Gare+de+Cergy&output=embed&hl=fr&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Silpilate — Gare de Cergy"
                className="absolute inset-0 w-full h-full"
              />
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
