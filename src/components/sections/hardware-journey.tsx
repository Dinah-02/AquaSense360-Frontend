"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Cpu, Droplets, Zap, Droplet } from "lucide-react"

const hardware = [
  {
    icon: Cpu,
    title: "ESP32",
    description: "Microcontroller brain of the system",
  },
  {
    icon: Droplets,
    title: "Soil Sensor",
    description: "Continuous moisture measurement",
  },
  {
    icon: Zap,
    title: "Relay Module",
    description: "Controls power to pumps",
  },
  {
    icon: Droplet,
    title: "Water Pump",
    description: "Delivers water to irrigation system",
  },
]

export default function HardwareJourney() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-balance-heading"
          style={{ color: "var(--color-forest-dark)" }}
        >
          Simple Hardware, Smart Results
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {hardware.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 text-center border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-emerald)" + "20" }}
                  >
                    <Icon size={32} style={{ color: "var(--color-emerald)" }} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-forest-dark)" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex items-center justify-between mb-16 px-4"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1 mx-2"
              style={{
                backgroundImage: `linear-gradient(to right, var(--color-emerald), var(--color-emerald) 50%, transparent 50%)`,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-xl p-12 text-white text-center"
          style={{
            backgroundImage: "linear-gradient(135deg, var(--color-forest-dark), var(--color-forest-light))",
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
            Easy to Build & Replicate
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            AquaSense 360 uses readily available components that can be assembled by farmers with basic technical
            knowledge. Open-source schematics and documentation ensure you can build and scale your own systems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
