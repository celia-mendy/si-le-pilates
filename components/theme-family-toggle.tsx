"use client"

import { useEffect, useState } from "react"

const OPTIONS = [
  { value: "v1", label: "DS", title: "Design system actuel" },
  { value: "v2", label: "Lieu", title: "Palette inspirée du studio" },
] as const

type ThemeFamily = "v1" | "v2"

export function ThemeFamilyToggle() {
  const [family, setFamily] = useState<ThemeFamily>("v2")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = (localStorage.getItem("silpilate-theme-family") as ThemeFamily) || "v2"
    setFamily(saved)
  }, [])

  const select = (value: ThemeFamily) => {
    setFamily(value)
    localStorage.setItem("silpilate-theme-family", value)
    document.documentElement.setAttribute("data-theme-family", value)
  }

  if (!mounted) return <div className="w-[62px] h-7" aria-hidden />

  return (
    <div
      role="group"
      aria-label="Palette du site"
      className="flex items-center rounded-full p-0.5 gap-0.5"
      style={{
        background: "color-mix(in srgb, var(--card) 88%, transparent)",
        border: "1px solid var(--th-border)",
      }}
    >
      <span className="sr-only">Palette du site</span>
      {OPTIONS.map(({ value, label, title }) => {
        const active = family === value
        return (
          <button
            key={value}
            onClick={() => select(value)}
            title={title}
            aria-pressed={active}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-200 leading-none"
            style={{
              background: active ? "var(--th-accent)" : "transparent",
              color: active ? "var(--th-accent-fg)" : "var(--th-text-muted)",
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
