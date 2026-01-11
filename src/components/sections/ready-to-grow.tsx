"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function ReadyToGrow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section
      ref={ref}
      className="py-32 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, var(--color-forest-dark), var(--color-forest-light))",
      }}
    >
      <div
        className="absolute -right-40 -top-40 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "var(--color-emerald)" }}
      />
      <div
        className="absolute -left-40 -bottom-40 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "var(--color-emerald)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold text-white mb-8 text-balance-heading"
        >
          Ready to grow?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl mb-12 text-balance-heading opacity-90"
          style={{ color: "white" }}
        >
          Get in touch and let's build a smarter, more sustainable future for your farm
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="px-10 py-4 bg-white rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          style={{ color: "var(--color-forest-dark)" }}
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  )
}
