"use client"

import { useEffect, useRef } from "react"
import { MapPin, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Location() {
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

  const loc = t.location

  return (
    <section ref={sectionRef} id="localisation" className="py-24 sm:py-32 lg:py-40 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
              {loc.overline}
            </p>
            <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown dark:text-foreground mb-8 text-balance">
              {loc.title}
            </h2>
            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-soft-taupe leading-relaxed mb-12">
              {loc.body}
            </p>

            <div className="space-y-6">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-warm-beige/60 flex items-center justify-center text-muted-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-brown dark:text-foreground mb-1">{loc.address.label}</h3>
                  <p className="text-soft-taupe">
                    {loc.address.line1}<br />{loc.address.line2}
                  </p>
                </div>
              </div>

              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-400 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-warm-beige/60 flex items-center justify-center text-muted-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-brown dark:text-foreground mb-1">{loc.access.label}</h3>
                  <p className="text-soft-taupe">{loc.access.text}</p>
                </div>
              </div>

              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-warm-beige/60 flex items-center justify-center text-muted-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-brown dark:text-foreground mb-1">{loc.contact.label}</h3>
                  <p className="text-soft-taupe">{loc.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-cocoa/10">
              <iframe
                src="https://maps.google.com/maps?q=34+rue+Pierre+Butin+95300+Pontoise&output=embed&hl=fr&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Si Le Pilates — Pontoise"
                className="absolute inset-0 w-full h-full dark:invert dark:hue-rotate-180 dark:saturate-[0.8]"
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
