"use client"

import { useEffect, useState } from "react"

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approximately)
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-cream/95 backdrop-blur-md border-t border-cocoa/10 p-4 pb-safe">
        <button
          onClick={scrollToBooking}
          className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-deep-brown rounded-full hover:bg-cocoa transition-colors shadow-lg shadow-deep-brown/20"
        >
          Réserver une séance
        </button>
      </div>
    </div>
  )
}
