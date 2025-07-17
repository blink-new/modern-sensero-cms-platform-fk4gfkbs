import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Globe, Mail, Bot, Settings, Star, Zap, Shield, Rocket, Play, CheckCircle, Users, Award, TrendingUp } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import AdvancedBackground from '../components/AdvancedBackground'

const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      icon: Globe,
      title: "Strony internetowe",
      description: "Responsywne, szybkie i zoptymalizowane pod SEO strony internetowe z najnowszymi technologiami",
      features: ["React & Next.js", "SEO Optimization", "Mobile First", "Performance"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Mail,
      title: "Automaty e-mailowe",
      description: "Zaawansowane systemy automatyzacji e-mail marketingu z AI i personalizacją",
      features: ["AI Personalization", "Advanced Analytics", "A/B Testing", "Automation"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Bot,
      title: "Boty AI",
      description: "Inteligentne boty dla Telegram, WhatsApp i stron internetowych z GPT-4",
      features: ["GPT-4 Integration", "Multi-platform", "Natural Language", "24/7 Support"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Integracje API",
      description: "Łączymy różne systemy i automatyzujemy procesy biznesowe z najwyższą precyzją",
      features: ["Custom APIs", "Third-party Integration", "Real-time Sync", "Scalable"],
      color: "from-purple-500 to-indigo-500"
    }
  ]

  const stats = [
    { number: "50+", label: "Projektów", icon: Rocket },
    { number: "100%", label: "Zadowolenia", icon: Star },
    { number: "24/7", label: "Wsparcie", icon: Shield },
    { number: "5★", label: "Ocena", icon: Award }
  ]

  const testimonials = [
    {
      name: "Anna Kowalska",
      role: "CEO, TechStart",
      content: "Sensero przekroczyło nasze oczekiwania. Strona internetowa jest nie tylko piękna, ale także funkcjonalna i szybka.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Piotr Nowak",
      role: "Founder, E-commerce Pro",
      content: "Automatyzacja e-mail marketingu zwiększyła nasze konwersje o 300%. Niesamowite rezultaty!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Maria Wiśniewska",
      role: "Marketing Director",
      content: "Bot AI obsługuje 80% zapytań klientów. Oszczędność czasu i kosztów jest ogromna.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ]

  const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef<HTMLSpanElement>(null)
    const isInView = useInView(countRef)

    useEffect(() => {
      if (isInView) {
        let startTime: number
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
    }, [isInView, end, duration])

    return <span ref={countRef}>{count}</span>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        <AdvancedBackground />
        
        {/* Floating cursor effect */}
        <div 
          className="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full pointer-events-none z-50 mix-blend-difference"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transition: 'all 0.1s ease-out'
          }}
        />

        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                  <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-sm font-medium">Nowa era rozwoju cyfrowego</span>
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
              >
                Kreujemy{' '}
                <span className="text-gradient bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  nowoczesne
                </span>
                <br />
                doświadczenia{' '}
                <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  webowe
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
              >
                Strony internetowe, automaty e-mailowe, boty AI i integracje API — 
                wszystko szyte na miarę Twojego biznesu z wykorzystaniem najnowszych technologii
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6 lg:justify-start justify-center mb-16"
              >
                <Link to="/kontakt">
                  <Button className="btn-premium text-white text-lg px-10 py-4 rounded-2xl group">
                    Rozpocznij projekt
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="glass border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-2xl group"
                >
                  <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Zobacz realizacje
                </Button>
              </motion.div>

              {/* Service Icons */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl lg:mx-0 mx-auto"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="glass-card text-center group cursor-pointer hover-glow"
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-xs">{service.title}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right side - Character Image */}
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className="relative"
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/25 via-indigo-500/25 to-purple-500/25 rounded-3xl blur-3xl animate-pulse-slow"></div>
                
                {/* Character image */}
                <div className="relative z-10 rounded-3xl overflow-hidden border border-white/20 backdrop-blur-sm">
                  <img 
                    src="/hero-character.png" 
                    alt="Cyberpunk Character" 
                    className="w-full h-auto max-w-lg animate-float"
                    style={{ filter: 'drop-shadow(0 0 50px rgba(77, 208, 225, 0.3))' }}
                  />
                </div>

                {/* Floating particles */}
                <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 right-10 w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-0 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-card hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gradient mb-2">
                  {stat.number.includes('+') ? (
                    <>
                      <AnimatedCounter end={parseInt(stat.number)} />+
                    </>
                  ) : (
                    stat.number
                  )}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Co robimy{' '}
              <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                najlepiej
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specjalizujemy się w nowoczesnych rozwiązaniach technologicznych, 
              które przekształcają sposób działania Twojego biznesu
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-card hover-lift group"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/uslugi">
              <Button className="btn-premium text-white text-lg px-10 py-4 rounded-2xl">
                Zobacz wszystkie usługi
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Co mówią{' '}
              <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                klienci
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Poznaj opinie naszych zadowolonych klientów i zobacz, 
              jak pomagamy im osiągać sukces w świecie cyfrowym
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card hover-lift"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <Rocket className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Gotowy na{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                transformację
              </span>{' '}
              cyfrową?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś i rozpocznij projekt, 
              który zmieni sposób działania Twojego biznesu
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/kontakt">
                <Button className="btn-premium text-white text-lg px-10 py-4 rounded-2xl">
                  Skontaktuj się z nami
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/jak-dzialamy">
                <Button 
                  variant="outline" 
                  className="glass border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-2xl"
                >
                  Zobacz jak działamy
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage