"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function EfficiencyBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 bg-[#F8FAFB] px-6">
      {/* Increased max-width to 6xl for more elongation */}
      <div className="max-w-6xl mx-auto"> 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          /* Reduced vertical padding (py-12) to decrease height while maintaining width */
          className="bg-white rounded-[2.5rem] px-10 py-12 md:px-16 md:py-16 border border-gray-100/50 shadow-sm text-center"
        >
          {/* Elongated layout works better with a tighter heading */}
          <h2 
            className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight"
            style={{ color: "#004D37" }}
          >
            Good Plant nutrition is a matter of efficiency
          </h2>

          {/* Wider paragraph container to match the elongated card */}
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-4xl mx-auto">
            AquaSense 360 delivers precision irrigation and fertigation solutions that maximize crop yield 
            while minimizing resource waste. Our AI-driven system learns soil conditions and weather 
            patterns to deliver exactly what your crops need, when they need it. From soil moisture 
            sensing to predictive weather integration, every component works in harmony to optimize 
            your agricultural output.
          </p>
        </motion.div>
      </div>
    </section>
  )
}