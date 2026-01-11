"use client"

import { motion } from "framer-motion"

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      /* Removed bg-white and border-b to allow the white frame from the hero to show through */
      className="fixed top-0 left-0 right-0 z-50 pt-4 px-4"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold" style={{ color: "var(--color-forest-dark)" }}>
          AquaSense 360
        </div>
        <div className="flex gap-4 items-center">
          {/* Black background, white text, fully rounded pill shape */}
          <button
            onClick={() => scrollToSection("#footer")}
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all active:scale-95"
          >
            Contact Us
          </button>
          
          {/* Black background, white text, fully rounded pill shape */}
          <button 
            onClick={() => scrollToSection("#problem-grid")} 
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-zinc-800 transition-all active:scale-95"
          >
            Explore More
          </button>
        </div>
      </div>
    </motion.nav>
  )
}