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
    <div className="flex items-center gap-0.5 rounded-full border border-cocoa/20 dark:border-foreground/10 p-1 bg-white/40 dark:bg-white/5 backdrop-blur-sm">
      {options.map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          title={value === "light" ? "Mode clair" : value === "dark" ? "Mode sombre" : "Mode auto"}
          className={`p-1.5 rounded-full transition-all duration-200 ${
            theme === value
              ? "bg-muted-gold text-white shadow-sm"
              : "text-soft-taupe hover:text-cocoa dark:hover:text-foreground"
          }`}
        >
          <Icon size={13} />
        </button>
      ))}
    </div>
  )
}
