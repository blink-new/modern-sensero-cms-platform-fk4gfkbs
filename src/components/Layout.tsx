import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import FloatingAdminButton from './FloatingAdminButton'


interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { href: '/', label: 'Strona główna' },
    { href: '/uslugi', label: 'Usługi' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/jak-dzialamy', label: 'Jak działamy' },
    { href: '/opinie', label: 'Opinie' },
    { href: '/kontakt', label: 'Kontakt' }
  ]

  const legalItems = [
    { href: '/polityka-prywatnosci', label: 'Polityka prywatności' },
    { href: '/regulamin', label: 'Regulamin' },
    { href: '/cookies', label: 'Cookies' },
    { href: '/rodo', label: 'RODO' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' 
            : 'bg-slate-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-black text-white group-hover:text-gradient transition-colors">
                  Sensero
                </span>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                      location.pathname === item.href
                        ? 'text-white bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/20"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/kontakt">
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="btn-premium text-white px-6 py-3 rounded-xl text-sm font-semibold"
                >
                  Rozpocznij projekt
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-md"
              >
                <div className="py-6 space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => {
                        setIsMenuOpen(false)
                        window.scrollTo(0, 0)
                      }}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-white bg-white/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full btn-premium text-white px-6 py-3 rounded-xl text-sm font-semibold">
                        Rozpocznij projekt
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Floating Admin Button */}
      <FloatingAdminButton />

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <span className="text-3xl font-black">Sensero</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                Agencja technologiczna nowej generacji, specjalizująca się w tworzeniu 
                innowacyjnych rozwiązań cyfrowych. Pomagamy firmom rozwijać się w erze 
                cyfrowej transformacji.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: 'M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z' },
                  { name: 'LinkedIn', icon: 'M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z' },
                  { name: 'GitHub', icon: 'M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5-.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-xl flex items-center justify-center transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-gradient">Szybkie linki</h4>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      to={item.href} 
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Informacje prawne</h4>
              <ul className="space-y-3">
                {legalItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      to={item.href} 
                      className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Sensero. Wszystkie prawa zastrzeżone.
              </p>
              <p className="text-gray-500 text-sm">
                Zaprojektowane i wykonane z ❤️ w Polsce
              </p>
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}

export default Layout