"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div
        className="backdrop-blur-md p-4 pb-safe"
        style={{
          background: "color-mix(in srgb, var(--background) 95%, transparent)",
          borderTop: "1px solid color-mix(in srgb, var(--th-border) 70%, transparent)",
        }}
      >
        <button
          onClick={scrollToBooking}
          className="btn-primary w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-full shadow-lg"
        >
          {t.hero.ctaPrimary}
        </button>
      </div>
    </div>
  )
}
