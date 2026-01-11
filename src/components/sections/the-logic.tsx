"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Soil Moisture Monitoring",
    description: "Sensors placed in the soil continuously measure moisture levels, giving real-time data about your field's condition.",
  },
  {
    number: "02",
    title: "Weather Prediction",
    description: "The system checks weather forecasts to predict upcoming rain, temperature changes, and heatwaves.",
  },
  {
    number: "03",
    title: "Smart Decision Logic",
    description: "Our intelligent algorithm evaluates soil moisture, weather data, and crop needs to make the best irrigation decision.",
  },
  {
    number: "04",
    title: "Automatic Irrigation",
    description: "Water is only supplied when truly needed — avoiding waste, protecting crops, and saving resources.",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Animated Header Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            /* Title color updated to #1A302B to match the brand theme */
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1A302B]"
          >
            How AquaSense 360 works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl"
          >
            Four simple steps to smarter, climate-aware irrigation that protects your crops and saves water.
          </motion.p>
        </div>

        {/* Numbered Steps List */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.4 + index * 0.2, 
                ease: "easeOut" 
              }}
              className="flex items-start gap-8 md:gap-12"
            >
              {/* Large Stylized Number */}
              <span 
                className="text-6xl md:text-8xl font-bold leading-none select-none"
                style={{ color: "#D1DBDB" }} 
              >
                {step.number}
              </span>

              {/* Text Content */}
              <div className="pt-2 md:pt-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A302B] mb-2">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}