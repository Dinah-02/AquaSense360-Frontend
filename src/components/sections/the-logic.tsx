"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Monitor Soil",
    description: "Real-time soil moisture sensors continuously track water levels",
  },
  {
    number: "02",
    title: "Predict Weather",
    description: "AI analyzes weather patterns to anticipate rainfall and temperature changes",
  },
  {
    number: "03",
    title: "Calculate Needs",
    description: "Intelligent algorithms determine optimal watering schedules",
  },
  {
    number: "04",
    title: "Automate Watering",
    description: "Smart relays control pumps and irrigation systems automatically",
  },
]

export default function TheLogic() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-balance-heading"
            style={{ color: "var(--color-forest-dark)" }}
          >
            How AquaSense 360 Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to smarter, climate-aware irrigation that protects your crops and saves water.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div
                  className="flex items-center justify-center w-20 h-20 text-white rounded-full text-2xl font-bold"
                  style={{ backgroundColor: "var(--color-emerald)" }}
                >
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--color-forest-dark)" }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
