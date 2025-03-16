"use client"

import { useEffect, useRef } from "react"

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    // Honeycomb pattern variables
    const hexSize = 40
    const hexHeight = hexSize * Math.sqrt(3)
    const hexagonPoints = 6
    const angle = (2 * Math.PI) / hexagonPoints

    // Animation variables
    let frame = 0
    const colors = ['#6200ee', '#3700b3', '#8400ff']

    // Animation function
    const drawHoneycomb = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create honeycomb pattern
      for (let row = 0; row < canvas.height / hexHeight + 1; row++) {
        for (let col = 0; col < canvas.width / (hexSize * 1.5) + 1; col++) {
          // Calculate center position
          const x = col * hexSize * 1.5 + (row % 2 === 0 ? 0 : hexSize * 0.75)
          const y = row * hexHeight * 0.75

          // Only draw if in visible area with some margin
          if (x > -hexSize && x < canvas.width + hexSize &&
              y > -hexHeight && y < canvas.height + hexHeight) {

            // Pulse effect
            const dist = Math.sqrt(Math.pow((canvas.width / 2) - x, 2) + Math.pow((canvas.height / 2) - y, 2))
            const pulseEffect = Math.sin(frame * 0.01 + dist * 0.01) * 0.5 + 0.5

            // Draw hexagon
            ctx.beginPath()
            for (let i = 0; i < hexagonPoints; i++) {
              const pointAngle = angle * i
              const currX = x + hexSize * Math.cos(pointAngle) * 0.8
              const currY = y + hexSize * Math.sin(pointAngle) * 0.8

              if (i === 0) {
                ctx.moveTo(currX, currY)
              } else {
                ctx.lineTo(currX, currY)
              }
            }
            ctx.closePath()

            // Set color based on distance and pulse
            const colorIndex = Math.floor(pulseEffect * colors.length) % colors.length
            ctx.strokeStyle = colors[colorIndex]
            ctx.lineWidth = 1
            ctx.globalAlpha = 0.1 + pulseEffect * 0.1
            ctx.stroke()

            // Occasionally add filled hexagons
            if (Math.random() < 0.1 && pulseEffect > 0.7) {
              ctx.fillStyle = colors[colorIndex]
              ctx.globalAlpha = 0.05
              ctx.fill()
            }
          }
        }
      }

      frame++
      requestAnimationFrame(drawHoneycomb)
    }

    const animationId = requestAnimationFrame(drawHoneycomb)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full bg-gradient-to-b from-zinc-950 to-zinc-900 -z-10"
    />
  )
}
