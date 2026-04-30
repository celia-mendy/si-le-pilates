"use client"

import { useEffect, useRef, type RefObject } from "react"

/**
 * Robust scroll-reveal hook.
 * - threshold: 0.01 → triggers when just 1% is visible (fixes mobile)
 * - rootMargin: triggers 80px before element enters the viewport
 * - Safety fallback: reveals all elements after 1.5s if observer didn't fire
 * - Respects prefers-reduced-motion (elements start visible)
 */
export function useReveal(): RefObject<HTMLElement | null> {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reveals = section.querySelectorAll(".reveal")
    if (reveals.length === 0) return

    // If user prefers reduced motion, show everything immediately
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReducedMotion) {
      reveals.forEach((el) => el.classList.add("animate-in"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            observer.unobserve(entry.target) // stop watching once revealed
          }
        })
      },
      {
        threshold: 0.01, // just 1% visible → trigger (was 0.15-0.2)
        rootMargin: "0px 0px 80px 0px", // trigger 80px before entering viewport
      }
    )

    reveals.forEach((el) => observer.observe(el))

    // Safety net: if elements are still hidden after 2.5s, force-reveal them.
    // This catches edge cases where the observer never fires (e.g. layout shifts,
    // SSR hydration timing, or elements already scrolled past).
    const safetyTimeout = setTimeout(() => {
      reveals.forEach((el) => {
        if (!el.classList.contains("animate-in")) {
          el.classList.add("animate-in")
        }
      })
    }, 2500)

    return () => {
      observer.disconnect()
      clearTimeout(safetyTimeout)
    }
  }, [])

  return sectionRef
}
