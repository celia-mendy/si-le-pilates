"use client"

import { useLanguage } from "@/contexts/language-context"
import type { Lang } from "@/lib/translations"

const OPTIONS: { value: Lang; label: string; title: string }[] = [
  { value: "fr", label: "FR", title: "Version française" },
  { value: "en", label: "EN", title: "English version" },
]

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language / Langue"
      className="flex items-center rounded-full p-0.5 gap-0.5"
      style={{
        background: "color-mix(in srgb, var(--card) 88%, transparent)",
        border: "1px solid var(--th-border)",
      }}
    >
      {OPTIONS.map(({ value, label, title }) => {
        const active = lang === value
        return (
          <button
            key={value}
            onClick={() => setLang(value)}
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
