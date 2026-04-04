"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

/**
 * Synchronise l'attribut data-theme-mode sur <html> avec l'état
 * résolu de next-themes (light / dark).
 * Requis pour que les sélecteurs CSS v2 fonctionnent correctement.
 */
export function ThemeModeSync() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme-mode",
      resolvedTheme === "dark" ? "dark" : "light"
    )
  }, [resolvedTheme])

  return null
}
