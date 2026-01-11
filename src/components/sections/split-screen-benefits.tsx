"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Check } from "lucide-react"

const benefits = [
  {
    title: "Saves Water & Reduces Cost",
    description: "Use only the water your crops need — reducing bills and conserving precious resources."
  },
  {
    title: "Protects Crops from Stress",
    description: "Prevents heat stress and waterlogging by timing irrigation perfectly with weather conditions."
  },
  {
    title: "Improves Irrigation Accuracy",
    description: "Data-driven decisions replace guesswork, ensuring optimal watering every time."
  },
  {
    title: "Reduces Manual Effort",
    description: "Automated monitoring and control means less time checking fields and adjusting pumps."
  },
  {
    title: "Supports Climate-Resilient Farming",
    description: "Adapt to changing weather patterns with a system that learns and responds to climate data."
  }
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* RESTORED: Header with original large font sizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-32"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{ color: "#1A302B" }}
          >
            Benefits of <br /> AquaSense 360
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Transform your irrigation practices with technology that works for you. 
            Optimize water usage, protect your crops, and build a more sustainable 
            farming future with intelligent automation.
          </p>
        </motion.div>

        {/* COMPACT: Reduced vertical distance between features */}
        <div className="space-y-6 md:space-y-8"> 
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-6 group"
            >
              {/* Vertical Accent Line and Checkmark Icon Box */}
              <div className="flex items-start gap-4 h-full pt-1">
                <div 
                  className="w-1 min-h-[60px] bg-[#10B981] rounded-full" 
                  style={{ opacity: 0.8 }} 
                />
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center bg-white border border-gray-100 shadow-sm">
                   <Check className="w-5 h-5 text-[#10B981]" strokeWidth={3} />
                </div>
              </div>

              {/* Benefit Text Content */}
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-[#1A302B] mb-1">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}