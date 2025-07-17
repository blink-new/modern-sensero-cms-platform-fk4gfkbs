import React, { useEffect, useRef, useMemo } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
}

interface Wave {
  x: number
  y: number
  amplitude: number
  frequency: number
  phase: number
  speed: number
}

const AdvancedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const wavesRef = useRef<Wave[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)

  const colors = useMemo(() => [
    'rgba(0, 255, 255, 0.8)',    // Electric cyan
    'rgba(255, 0, 255, 0.8)',    // Electric magenta
    'rgba(255, 20, 147, 0.8)',   // Deep pink
    'rgba(0, 191, 255, 0.8)',    // Electric blue
    'rgba(138, 43, 226, 0.8)',   // Blue violet
    'rgba(0, 255, 127, 0.8)',    // Spring green
  ], [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * 100,
          maxLife: Math.random() * 200 + 100
        })
      }

      particlesRef.current = particles
    }

    const createWaves = () => {
      const waves: Wave[] = []
      for (let i = 0; i < 3; i++) {
        waves.push({
          x: 0,
          y: canvas.height * (0.3 + i * 0.2),
          amplitude: 50 + Math.random() * 30,
          frequency: 0.01 + Math.random() * 0.005,
          phase: Math.random() * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.01
        })
      }
      wavesRef.current = waves
    }

    const drawWaves = () => {
      wavesRef.current.forEach((wave, index) => {
        ctx.beginPath()
        ctx.moveTo(0, wave.y)
        
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase + timeRef.current * wave.speed) * wave.amplitude
          ctx.lineTo(x, y)
        }
        
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        
        const gradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, canvas.height)
        gradient.addColorStop(0, `rgba(0, 255, 255, ${0.08 - index * 0.02})`)
        gradient.addColorStop(1, `rgba(255, 0, 255, ${0.04 - index * 0.01})`)
        
        ctx.fillStyle = gradient
        ctx.fill()
      })
    }

    const drawParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        // Update particle
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.vx += (dx / distance) * force * 0.01
          particle.vy += (dy / distance) * force * 0.01
        }

        // Boundary conditions with wrapping
        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = canvas.height + 10
        if (particle.y > canvas.height + 10) particle.y = -10

        // Lifecycle
        if (particle.life > particle.maxLife) {
          particle.life = 0
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.vx = (Math.random() - 0.5) * 0.8
          particle.vy = (Math.random() - 0.5) * 0.8
          particle.color = colors[Math.floor(Math.random() * colors.length)]
        }

        // Pulsing effect
        const pulseOpacity = particle.opacity * (0.5 + 0.5 * Math.sin(timeRef.current * 0.02 + index * 0.1))

        // Draw particle with glow effect
        ctx.save()
        ctx.globalCompositeOperation = 'screen'
        
        // Outer glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace('0.8', '0.1')
        ctx.fill()
        
        // Inner particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace('0.8', pulseOpacity.toString())
        ctx.fill()
        
        ctx.restore()

        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 120) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              
              const connectionOpacity = (1 - distance / 120) * 0.4
              ctx.strokeStyle = `rgba(0, 255, 255, ${connectionOpacity})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
      })
    }

    const drawFloatingOrbs = () => {
      const orbCount = 5
      for (let i = 0; i < orbCount; i++) {
        const x = canvas.width * 0.1 + (canvas.width * 0.8 * i) / orbCount + 
                  Math.sin(timeRef.current * 0.01 + i) * 100
        const y = canvas.height * 0.3 + Math.sin(timeRef.current * 0.008 + i * 0.5) * 80
        const size = 20 + Math.sin(timeRef.current * 0.02 + i) * 10
        
        // Create radial gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2)
        gradient.addColorStop(0, colors[i % colors.length].replace('0.8', '0.4'))
        gradient.addColorStop(0.5, colors[i % colors.length].replace('0.8', '0.2'))
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        
        ctx.save()
        ctx.globalCompositeOperation = 'screen'
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        ctx.restore()
      }
    }

    const animate = () => {
      timeRef.current += 1
      
      // Clear with cyberpunk gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#0a0a0a')
      gradient.addColorStop(0.3, '#1a1a2e')
      gradient.addColorStop(0.7, '#16213e')
      gradient.addColorStop(1, '#0a0a0a')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw layers
      drawWaves()
      drawFloatingOrbs()
      drawParticles()

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
      createWaves()
    }

    // Initialize
    resizeCanvas()
    createParticles()
    createWaves()
    animate()

    // Event listeners
    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [colors])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

export default AdvancedBackground