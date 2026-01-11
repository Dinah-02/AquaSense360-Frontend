"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function EfficiencyBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const cardStyle = "bg-[#DCEBE8] p-8 rounded-2xl flex flex-col justify-center min-h-[240px] transition-all duration-300 hover:bg-[#CFE2DE] cursor-default shadow-sm hover:shadow-md"
  const textBase = "text-[#1A302B] leading-snug"
  const highlight = "text-3xl md:text-4xl font-black block mb-2" // Increased size for main stats

  return (
    <section ref={ref} className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A302B]">
            The world is hungry for <br />
            sustainable agriculture solutions
          </h2>
        </motion.div>

        {/* 5-Column Typographic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cardStyle}
          >
            <p className={textBase}>
              By 2050, we will have almost <span className={highlight}>10 billion</span> mouths to feed
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={cardStyle}
          >
            <p className={textBase}>
              Agricultural production will need to grow by <span className={highlight}>50%</span>
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={cardStyle}
          >
            <p className={textBase}>
              By 2050 there will be <span className={highlight}>20% LESS</span> <strong>arable land</strong> and <span className={highlight}>50% LESS</span> <strong>available water</strong>
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={cardStyle}
          >
            <p className={textBase}>
              Over <span className={highlight}>70%</span> of our freshwater is consumed by agriculture
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={cardStyle}
          >
            <p className={textBase}>
              The average person's daily water footprint is <span className={highlight}>5,500 liters</span> of water
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}