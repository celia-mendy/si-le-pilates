"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"
import { useLanguage } from "@/contexts/language-context"

export function Booking() {
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
      { threshold: 0.1 }
    )

    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="booking" className="py-24 sm:py-32 lg:py-40 bg-warm-beige/40">
      <Script
        id="insert-bsport-widget-cdn"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function (b, s, p, o, r, t) { typeof window.BsportWidget === "undefined" && !document.getElementById("bsport-widget-cdn") && !function () { m = b.createElement(s), m.id = "bsport-widget-cdn", m.src = p, b.getElementsByTagName("head")[0].appendChild(m) }() }(document, "script", "https://cdn.bsport.io/scripts/widget.js")`,
        }}
      />
      <Script
        id="bsport-widget-mount"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function MountBsportWidget(config, repeat) {
              repeat = repeat || 1;
              if (repeat > 50) { return }
              if (!window.BsportWidget) {
                return setTimeout(function() {
                  MountBsportWidget(config, repeat + 1)
                }, 100 * repeat || 1)
              }
              BsportWidget.mount(config)
            }
            MountBsportWidget({
              "parentElement": "bsport-widget-758785",
              "companyId": 5398,
              "franchiseId": null,
              "dialogMode": 1,
              "widgetType": "calendar",
              "showFab": false,
              "fullScreenPopup": false,
              "styles": undefined,
              "config": { "calendar": {} }
            })
          `,
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
            {t.booking.overline}
          </p>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown dark:text-foreground mb-6 text-balance">
            {t.booking.title}
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg sm:text-xl text-soft-taupe max-w-2xl mx-auto">
            {t.booking.subtitle}
          </p>
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-1000 delay-300">
          <div className="bg-card rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-2xl shadow-cocoa/10 overflow-hidden">
            <div id="bsport-widget-758785" className="rounded-2xl overflow-hidden min-h-[600px]" />
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
