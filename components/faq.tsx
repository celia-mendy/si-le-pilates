"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useReveal } from "@/hooks/use-reveal"

export function FAQ() {
  const sectionRef = useReveal()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section ref={sectionRef} id="faq" className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-gold font-medium">
            {t.faq.overline}
          </p>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown dark:text-foreground text-balance">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((faq, index) => (
            <div
              key={index}
              className="reveal opacity-0 translate-y-6 transition-all duration-700"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div
                className="bg-card rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--th-border)" }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-deep-brown dark:text-foreground pr-8">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-gold shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-soft-taupe leading-relaxed whitespace-pre-line">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}
