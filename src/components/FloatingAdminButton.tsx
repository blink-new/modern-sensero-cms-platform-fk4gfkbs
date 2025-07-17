import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, X, User, FileText, BarChart3 } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import blink from '../blink/client'

const FloatingAdminButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
    })
    return unsubscribe
  }, [])

  // Only show for authenticated users
  if (!user) return null

  const menuItems = [
    {
      icon: BarChart3,
      label: 'Dashboard',
      href: '/admin',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: FileText,
      label: 'Editor CMS',
      href: '/cms-editor',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: User,
      label: 'Profil',
      href: '#',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <span className="bg-white px-3 py-1 rounded-lg shadow-lg text-sm font-medium text-gray-700 whitespace-nowrap">
                  {item.label}
                </span>
                <Link to={item.href}>
                  <Button
                    size="sm"
                    className={`w-12 h-12 rounded-full shadow-lg ${item.color} text-white hover:scale-110 transition-all duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-indigo-600 hover:bg-indigo-700'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Settings className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  )
}

export default FloatingAdminButton