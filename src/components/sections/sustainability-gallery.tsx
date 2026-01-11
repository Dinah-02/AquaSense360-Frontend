"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/img2.png",
    title: "Agricultural Growth",
  },
  {
    src: "/images/img1.png",
    title: "Global Population",
  },
  {
    src: "/images/img3.png",
    title: "Land & Water Scarcity",
  },
  {
    src: "/images/img5.png",
    title: "Water Footprint",
  },
  {
    src: "/images/img4.png",
    title: "Agricultural Water",
  },
]

export default function SustainabilityGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [scrollPos, setScrollPos] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isInView || !scrollContainerRef.current) return

    const autoScrollTimer = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const scrollAmount = 400
        const maxScroll = container.scrollWidth - container.clientWidth

        let newPos = scrollPos + scrollAmount
        if (newPos > maxScroll) {
          newPos = 0
        }

        container.scrollLeft = newPos
        setScrollPos(newPos)
      }
    }, 4000) // Auto-scroll every 4 seconds

    return () => clearInterval(autoScrollTimer)
  }, [scrollPos, isInView])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newPos = direction === "left" ? scrollPos - scrollAmount : scrollPos + scrollAmount
      scrollContainerRef.current.scrollLeft = newPos
      setScrollPos(newPos)
    }
  }

  return (
    <section ref={ref} className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-balance-heading"
          style={{ color: "var(--color-forest-dark)" }}
        >
          The world is hungry for sustainable agriculture solutions
        </motion.h2>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative w-full h-full">
                  <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 text-white p-3 rounded-full hover:opacity-80 transition-colors z-10"
            style={{ backgroundColor: "var(--color-forest-dark)" }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 text-white p-3 rounded-full hover:opacity-80 transition-colors z-10"
            style={{ backgroundColor: "var(--color-forest-dark)" }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
