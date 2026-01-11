"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function EfficiencyBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-gray-50 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-12 md:p-16 border border-gray-200"
        >
          <h3
            className="text-4xl md:text-5xl font-bold mb-6 text-balance-heading"
            style={{ color: "var(--color-emerald)" }}
          >
            Good Plant nutrition is a matter of efficiency
          </h3>

          <p className="text-xl text-gray-700 leading-relaxed text-balance-heading">
            Precision irrigation doesn't just save water—it transforms farming. By delivering exactly what plants need,
            exactly when they need it, AquaSense 360 ensures optimal nutrient uptake, stronger crop development, and
            higher yields. Every drop counts. Every decision matters. With real-time soil monitoring and weather-aware
            automation, you're not just farming smarter; you're farming sustainably for generations to come.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex gap-4 flex-wrap"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-emerald)" }} />
              <span className="text-gray-700">Real-time monitoring</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-emerald)" }} />
              <span className="text-gray-700">Weather prediction</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-emerald)" }} />
              <span className="text-gray-700">Automated control</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
