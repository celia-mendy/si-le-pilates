"use client"

import { MapPin, Phone, Train, Car } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useReveal } from "@/hooks/use-reveal"

export function Location() {
  const sectionRef = useReveal()
  const { t } = useLanguage()

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
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-brown dark:text-foreground mb-1">{loc.contact.label}</h3>
                  <a
                    href={`mailto:${loc.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-soft-taupe hover:text-deep-brown transition-colors"
                  >
                    {loc.contact.email}
                  </a>
                </div>
              </div>

              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-warm-beige/60 flex items-center justify-center text-muted-gold shrink-0">
                  <Train className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-brown dark:text-foreground mb-1">{loc.transport.label}</h3>
                  <p className="text-soft-taupe">{loc.transport.text}</p>
                </div>
              </div>

              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-600 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-warm-beige/60 flex items-center justify-center text-muted-gold shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-brown dark:text-foreground mb-1">{loc.parking.label}</h3>
                  <p className="text-soft-taupe">{loc.parking.text}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-cocoa/10">
              <iframe
                src="https://maps.google.com/maps?q=24+rue+Pierre+Butin+95300+Pontoise&output=embed&hl=fr&z=16"
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


    </section>
  )
}
