"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm border-b border-cocoa/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Left Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("localisation")}
              className="text-sm text-deep-brown/80 dark:text-foreground/70 hover:text-deep-brown dark:hover:text-foreground transition-colors"
            >
              Localisation
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-deep-brown/80 dark:text-foreground/70 hover:text-deep-brown dark:hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* Logo - Center */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-deep-brown dark:text-foreground"
          >
            Silpilate
          </Link>

          {/* Right Links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("tarifs")}
              className="text-sm text-deep-brown/80 dark:text-foreground/70 hover:text-deep-brown dark:hover:text-foreground transition-colors"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-deep-brown rounded-full hover:bg-cocoa transition-colors dark:bg-foreground dark:text-background dark:hover:bg-foreground/90"
            >
              Réserver
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden ml-auto items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-deep-brown dark:text-foreground"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cream/95 dark:bg-background/95 backdrop-blur-md border-b border-cocoa/10 dark:border-foreground/10 py-4">
            <div className="flex flex-col gap-4 px-4">
              <button
                onClick={() => scrollToSection("localisation")}
                className="text-left py-2 text-deep-brown/80 dark:text-foreground/70 hover:text-deep-brown dark:hover:text-foreground transition-colors"
              >
                Localisation
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left py-2 text-deep-brown/80 dark:text-foreground/70 hover:text-deep-brown dark:hover:text-foreground transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("tarifs")}
                className="text-left py-2 text-deep-brown/80 dark:text-foreground/70 hover:text-deep-brown dark:hover:text-foreground transition-colors"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection("booking")}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-deep-brown rounded-full hover:bg-cocoa transition-colors dark:bg-foreground dark:text-background dark:hover:bg-foreground/90 w-full"
              >
                Réserver
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
