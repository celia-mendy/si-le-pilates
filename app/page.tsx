import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Studio } from "@/components/studio"
import { Benefits } from "@/components/benefits"
import { Experience } from "@/components/experience"
import { Pricing } from "@/components/pricing"
import { Location } from "@/components/location"
import { FAQ } from "@/components/faq"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <Studio />
      <Benefits />
      <Experience />
      <Pricing />
      <Location />
      <FAQ />
      <Booking />
      <Footer />
      <MobileCTA />
    </main>
  )
}
