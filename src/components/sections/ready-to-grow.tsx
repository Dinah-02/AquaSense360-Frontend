"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function ReadyToGrow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    /* Removed padding and max-width to let the box occupy the full screen width */
    <section ref={ref} className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        /* - Removed rounded-[2.5rem] for a sharp rectangular shape 
           - Match background color exactly to the box above (#1A302B)
        */
        className="w-full bg-[#1A302B] py-20 px-8 text-center relative overflow-hidden"
      >
        {/* Subtle radial gradient preserved for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 to-transparent opacity-40" />
        
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Ready to grow?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-50/80 mb-10 max-w-2xl mx-auto"
          >
            Get in touch and let's build a smarter, more sustainable future for your farm
          </motion.p>

          {/* Black Pill-Shaped Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-12 py-4 rounded-full font-bold text-lg transition-all shadow-xl border border-white/5"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}