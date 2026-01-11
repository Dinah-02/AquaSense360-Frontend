"use client"
import Hero from "@/components/sections/hero"
import ProblemGrid from "@/components/sections/problem-grid"
import SustainabilityGallery from "@/components/sections/sustainability-gallery"
import EfficiencyBlock from "@/components/sections/efficiency-block"
import TheLogic from "@/components/sections/the-logic"
import FeaturesGrid from "@/components/sections/features-grid"
import SplitScreenBenefits from "@/components/sections/split-screen-benefits"
import HardwareJourney from "@/components/sections/hardware-journey"
import ReadyToGrow from "@/components/sections/ready-to-grow"
import Footer from "@/components/sections/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Navigation />
      <Hero />
      <ProblemGrid />
      <SustainabilityGallery />
      <EfficiencyBlock />
      <TheLogic />
      <FeaturesGrid />
      <SplitScreenBenefits />
      <HardwareJourney />
      <ReadyToGrow />
      <Footer />
    </main>
  )
}
