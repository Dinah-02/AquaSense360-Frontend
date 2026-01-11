"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Check } from "lucide-react"

const benefits = [
  "Saves Water & Reduces Cost",
  "Protects Crops",
  "Improves Accuracy",
  "Reduces Manual Effort",
  "Supports Climate-Resilient Farming",
]

export default function SplitScreenBenefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-5xl md:text-6xl font-bold mb-8 text-balance-heading"
              style={{ color: "var(--color-forest-dark)" }}
            >
              Benefits of AquaSense 360
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed text-balance-heading">
              Transform your irrigation practices with technology that works for you. Optimize water usage, protect your
              crops, and build a more sustainable farming future with intelligent automation.
            </p>
          </motion.div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-l-4 pl-6 py-4 hover:shadow-lg transition-all"
                style={{ borderLeftColor: "var(--color-emerald)" }}
              >
                <div className="flex items-center gap-4">
                  <Check style={{ color: "var(--color-emerald)" }} size={24} className="flex-shrink-0" />
                  <p className="text-lg font-medium" style={{ color: "var(--color-forest-dark)" }}>
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
