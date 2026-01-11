"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const problems = [
  {
    icon: "💧",
    title: "Over-Watering Wastes Water",
    description: "Traditional irrigation often uses more water than plants need, wasting precious resources and increasing costs.",
    borderColor: "border-emerald-500/40",
    iconBg: "bg-blue-50",
  },
  {
    icon: "🌧️",
    title: "Irrigating Before Rain",
    description: "Watering fields before rainfall causes waterlogging, damages roots, and promotes disease in crops.",
    borderColor: "border-gray-100",
    iconBg: "bg-blue-50",
  },
  {
    icon: "🌡️",
    title: "Heatwave Irrigation",
    description: "Watering during extreme heat leads to rapid evaporation, wasting water and stressing plants.",
    borderColor: "border-gray-100",
    iconBg: "bg-red-50",
  },
  {
    icon: "❓",
    title: "Manual Guesswork",
    description: "Without sensors and data, farmers rely on intuition, often leading to inefficient irrigation timing.",
    borderColor: "border-gray-100",
    iconBg: "bg-orange-50",
  }
]

export default function ProblemGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="problem-grid" ref={ref} className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* RESTORED: Original Heading and Description Style */}
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

        {/* UPDATED: Minimal, Organized Cards from Latest Screenshot */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
              className={`p-6 rounded-2xl bg-white border border-gray-100 ${problem.borderColor} shadow-sm transition-all flex items-start gap-5`}
            >
              {/* Icon Box from Screenshot */}
              <div className={`flex-shrink-0 w-12 h-12 ${problem.iconBg} rounded-xl flex items-center justify-center text-2xl shadow-sm`}>
                {problem.icon}
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-[#1a302b] mb-1">
                  {problem.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}