"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { 
  Droplet, 
  Cloud, 
  Activity, 
  BarChart3, 
  TrendingUp, 
  Monitor 
} from "lucide-react"

const features = [
  {
    icon: <Droplet className="w-5 h-5 text-emerald-600" />,
    title: "Real-Time Monitoring",
    description: "Live soil moisture and water level tracking",
    iconBg: "bg-emerald-50",
  },
  {
    icon: <Cloud className="w-5 h-5 text-cyan-600" />,
    title: "Rain-Hold Logic",
    description: "Smart weather integration prevents unnecessary watering",
    iconBg: "bg-cyan-50",
  },
  {
    icon: <Activity className="w-5 h-5 text-rose-600" />,
    title: "Heatwave Protection",
    description: "Automatic adjustments during extreme weather",
    iconBg: "bg-rose-50",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-teal-600" />,
    title: "Climate-Aware Scheduling",
    description: "AI-powered optimization based on local climate patterns",
    iconBg: "bg-teal-50",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    title: "Water Savings Insights",
    description: "Detailed analytics and resource optimization reports",
    iconBg: "bg-emerald-50",
    active: true 
  },
  {
    icon: <Monitor className="w-5 h-5 text-blue-600" />,
    title: "Live Monitoring Dashboard",
    description: "Real-time system status and performance metrics",
    iconBg: "bg-blue-50",
  },
]

export default function FeaturesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* RESTORED: Header with original large font sizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{ color: "#1A302B" }}
          >
            Everything you need for smart irrigation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to make irrigation effortless and efficient.
          </p>
        </motion.div>

        {/* COMPACT: 6-Card Grid to maintain 'one-screen' feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className={`p-6 rounded-2xl bg-white border transition-all duration-300 hover:shadow-md flex flex-col items-start ${
                feature.active ? "border-emerald-500/50 shadow-sm" : "border-gray-100"
              }`}
            >
              <div className={`w-10 h-10 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-1" style={{ color: "#1A302B" }}>
                {feature.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}