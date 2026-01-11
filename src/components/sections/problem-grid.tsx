"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const problems = [
  {
    icon: "💧",
    title: "Over-Watering Wastes Water",
    description: "Unnecessary watering depletes precious freshwater resources",
  },
  {
    icon: "🌧️",
    title: "Irrigating Before Rain",
    description: "Poor timing leads to waterlogging and crop damage",
  },
  {
    icon: "🔥",
    title: "Heatwave Irrigation",
    description: "Extreme heat demands precise water management",
  },
  {
    icon: "👨‍🌾",
    title: "Manual Guesswork",
    description: "Human error costs time, money, and resources",
  },
]

export default function ProblemGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="problem-grid" ref={ref} className="py-20 bg-white px-4">
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
            <span className="text-gray-400">Why</span> Traditional Irrigation{" "}
            <span className="text-gray-400">Needs</span> Improvement?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conventional irrigation methods waste resources and can harm your crops. Here's what farmers face every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white border border-gray-200 rounded-lg p-8 h-48 flex flex-col justify-center hover:border-emerald-600 transition-all"
              style={{ "--hover-color": "var(--color-emerald)" } as any}
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--color-forest-dark)" }}>
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
