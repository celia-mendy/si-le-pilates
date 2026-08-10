"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

declare global {
  interface Window {
    BsportWidget?: { mount: (config: Record<string, unknown>) => void }
  }
}

function loadBsportCdn(): Promise<void> {
  return new Promise((resolve) => {
    if (window.BsportWidget) { resolve(); return }
    if (!document.getElementById("bsport-widget-cdn")) {
      const s = document.createElement("script")
      s.id = "bsport-widget-cdn"
      s.src = "https://cdn.bsport.io/scripts/widget.js"
      s.onload = () => waitForBsport(resolve)
      document.head.appendChild(s)
    } else {
      waitForBsport(resolve)
    }
  })
}

function waitForBsport(resolve: () => void, attempt = 0) {
  if (window.BsportWidget || attempt > 50) { resolve(); return }
  setTimeout(() => waitForBsport(resolve, attempt + 1), 100)
}

export default function MonCompte() {
  const { t } = useLanguage()

  useEffect(() => {
    loadBsportCdn().then(() => {
      if (!window.BsportWidget) return
      window.BsportWidget.mount({
        parentElement: "bsport-widget-member",
        companyId: 5398,
        franchiseId: null,
        dialogMode: 1,
        widgetType: "memberSpace",
        showFab: false,
        fullScreenPopup: false,
        config: {},
      })
    })
  }, [])

  return (
    <main>
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-deep-brown dark:text-foreground mb-6 text-balance">
              {t.myAccount.title}
            </h1>
            <p className="text-lg sm:text-xl text-soft-taupe max-w-2xl mx-auto">
              {t.myAccount.subtitle}
            </p>
          </div>

          <div className="bg-card rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-2xl shadow-cocoa/10 overflow-hidden">
            <div id="bsport-widget-member" className="rounded-2xl overflow-hidden min-h-[600px]" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
