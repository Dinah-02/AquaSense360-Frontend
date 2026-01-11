"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    /* pt-6 reduces the top gap significantly. px-4 creates a very small, equal symmetrical border on both sides. */
    <section className="relative w-full h-screen bg-white pt-6 px-4 pb-0 overflow-hidden flex flex-col">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0 }}
        className="absolute inset-0 bg-white z-40"
      />

      {/* Video Container - No rounding, sharp edges as requested. flex-grow fills the screen. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-full flex-grow overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/field-video.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          onCanPlay={() => setVideoLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative z-20 h-full flex flex-col items-start justify-center text-left px-8 md:px-16 lg:px-24"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6 text-balance-heading max-w-5xl"
          >
            AquaSense 360
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl text-balance-heading leading-relaxed"
          >
            An intelligent irrigation system that monitors soil moisture in real-time, predicts weather conditions, and
            automatically controls watering — saving water, protecting crops, and making farming smarter.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.7 }}>
            <button className="btn-secondary px-8 py-4 text-lg">Explore</button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}