"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Activity, Droplet, Cloud, BarChart3, TrendingUp, MonitorPlay } from "lucide-react"

const features = [
  {
    icon: Droplet,
    title: "Real-Time Monitoring",
    description: "Live soil moisture and water level tracking",
    color: "#10a881",
  },
  {
    icon: Cloud,
    title: "Rain-Hold Logic",
    description: "Smart weather integration prevents unnecessary watering",
    color: "#2DD4BF",
  },
  {
    icon: Activity,
    title: "Heatwave Protection",
    description: "Automatic adjustments during extreme weather",
    color: "#10a881",
  },
  {
    icon: BarChart3,
    title: "Climate-Aware Scheduling",
    description: "AI-powered optimization based on local climate patterns",
    color: "#2DD4BF",
  },
  {
    icon: TrendingUp,
    title: "Water Savings Insights",
    description: "Detailed analytics and resource optimization reports",
    color: "#10a881",
  },
  {
    icon: MonitorPlay,
    title: "Live Monitoring Dashboard",
    description: "Real-time system status and performance metrics",
    color: "#2DD4BF",
  },
]

export default function FeaturesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
          Everything You Need for Smart Irrigation
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-emerald-600 transition-all group"
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow"
                  style={{ backgroundColor: feature.color + "20" }}
                >
                  <Icon size={32} color={feature.color} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-forest-dark)" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
