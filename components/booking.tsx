"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

const Cal = dynamic(() => import("@calcom/embed-react").then((mod) => mod.default), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[600px]">
      <div className="animate-pulse text-soft-taupe">Chargement du calendrier...</div>
    </div>
  ),
})

export function Booking() {
  const sectionRef = useRef<HTMLElement>(null)
  const [calLoaded, setCalLoaded] = useState(false)

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
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setCalLoaded(true)
  }, [])

  useEffect(() => {
    if (!calLoaded) return
    
    const initCal = async () => {
      const { getCalApi } = await import("@calcom/embed-react")
      const cal = await getCalApi({ namespace: "reserver-une-seance-de-pilates-reformer" })
      cal("ui", {
        styles: { branding: { brandColor: "#3A2E2A" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      })
    }
    initCal()
  }, [calLoaded])

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="py-24 sm:py-32 lg:py-40 bg-warm-beige/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
            Réservation
          </p>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown dark:text-foreground mb-6 text-balance">
            Réserver votre séance
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg sm:text-xl text-soft-taupe max-w-2xl mx-auto">
            Choisissez votre créneau directement en ligne. Une réservation simple, pensée pour
            revenir facilement chaque fois que vous en avez envie.
          </p>
        </div>

        {/* Cal.com Embed Container */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-1000 delay-300">
          <div className="bg-white dark:bg-card rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-2xl shadow-cocoa/10 overflow-hidden">
            <div className="cal-embed-container rounded-2xl overflow-hidden">
              {calLoaded && (
                <Cal
                  namespace="reserver-une-seance-de-pilates-reformer"
                  calLink="tewfiqferahi/reserver-une-seance-de-pilates-reformer"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{
                    layout: "month_view",
                  }}
                />
              )}
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
