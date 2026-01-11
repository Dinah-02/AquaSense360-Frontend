import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AquaSense 360 | Intelligent Irrigation System",
  description:
    "Smart irrigation system that monitors soil moisture, predicts weather, and automatically controls watering to save water and protect crops.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1A302B",
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} bg-background text-foreground antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
