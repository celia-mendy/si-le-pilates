"use client"

import { useTheme } from "next-themes"
import { Sun, Moon, Monitor } from "lucide-react"
import { useEffect, useState } from "react"

const options = [
  { value: "light", icon: Sun },
  { value: "system", icon: Monitor },
  { value: "dark", icon: Moon },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-[78px] h-7" />

  return (
    <div
      className="flex items-center gap-0.5 rounded-full p-1 backdrop-blur-sm"
      style={{
        border: "1px solid color-mix(in srgb, var(--th-border) 60%, transparent)",
        background: "color-mix(in srgb, var(--card) 40%, transparent)",
      }}
    >
      {options.map(({ value, icon: Icon }) => {
        const active = theme === value
        return (
          <button
            key={value}
            onClick={() => setTheme(value)}
            title={value === "light" ? "Mode clair" : value === "dark" ? "Mode sombre" : "Mode auto"}
            className="p-1.5 rounded-full transition-all duration-200"
            style={{
              background: active ? "var(--th-accent)" : "transparent",
              color: active ? "var(--th-accent-fg)" : "var(--th-text-muted)",
            }}
          >
            <Icon size={13} />
          </button>
        )
      })}
    </div>
  )
}
