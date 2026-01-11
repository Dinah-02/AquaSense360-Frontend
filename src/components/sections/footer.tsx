"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <footer id="footer" ref={ref} className="bg-white border-t border-gray-200 px-4">
      <div className="max-w-6xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-forest-dark)" }}>
              AquaSense 360
            </h3>
            <p className="text-gray-600">
              Intelligent irrigation for sustainable agriculture. Making farming smarter, one drop at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4" style={{ color: "var(--color-forest-dark)" }}>
              About Us
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="transition-colors hover:opacity-70" style={{ color: "var(--color-emerald)" }}>
                  College Project
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:opacity-70" style={{ color: "var(--color-emerald)" }}>
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:opacity-70" style={{ color: "var(--color-emerald)" }}>
                  Institution
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:opacity-70" style={{ color: "var(--color-emerald)" }}>
                  Research
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4" style={{ color: "var(--color-forest-dark)" }}>
              Contact Us
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="mailto:contact@aquasense360.com"
                  className="transition-colors hover:opacity-70"
                  style={{ color: "var(--color-emerald)" }}
                >
                  contact@aquasense360.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="transition-colors hover:opacity-70"
                  style={{ color: "var(--color-emerald)" }}
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>Visit our campus</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4" style={{ color: "var(--color-forest-dark)" }}>
              Connect
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="transition-colors hover:opacity-70" style={{ color: "var(--color-emerald)" }}>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:opacity-70" style={{ color: "var(--color-emerald)" }}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:opacity-70" style={{ color: "var(--color-emerald)" }}>
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-200 pt-8 text-center text-gray-600"
        >
          <p>Made with ❤️ for sustainable farming • © 2026 AquaSense 360</p>
        </motion.div>
      </div>
    </footer>
  )
}
