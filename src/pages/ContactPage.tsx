import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Zap, MessageSquare, Calendar, User } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import AdvancedBackground from '../components/AdvancedBackground'
import blink from '../blink/client'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send email notification using Blink SDK
      await blink.notifications.email({
        to: 'kontakt@sensero.pl',
        subject: `Nowe zapytanie od ${formData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Nowe zapytanie kontaktowe</h1>
            </div>
            <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-bottom: 20px;">Dane kontaktowe:</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Imię i nazwisko:</td>
                  <td style="padding: 10px 0; color: #333;">${formData.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 10px 0; color: #333;">${formData.email}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Telefon:</td>
                  <td style="padding: 10px 0; color: #333;">${formData.phone || 'Nie podano'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Firma:</td>
                  <td style="padding: 10px 0; color: #333;">${formData.company || 'Nie podano'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Usługa:</td>
                  <td style="padding: 10px 0; color: #333;">${formData.service}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Budżet:</td>
                  <td style="padding: 10px 0; color: #333;">${formData.budget || 'Nie podano'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Termin:</td>
                  <td style="padding: 10px 0; color: #333;">${formData.timeline || 'Nie podano'}</td>
                </tr>
              </table>
              
              <h3 style="color: #333; margin: 30px 0 15px 0;">Wiadomość:</h3>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                <p style="margin: 0; line-height: 1.6; color: #555;">${formData.message}</p>
              </div>
              
              <div style="margin-top: 30px; padding: 20px; background: #e3f2fd; border-radius: 8px; text-align: center;">
                <p style="margin: 0; color: #1976d2; font-weight: bold;">Odpowiedz w ciągu 24 godzin!</p>
              </div>
            </div>
          </div>
        `,
        text: `
          Nowe zapytanie kontaktowe
          
          Imię i nazwisko: ${formData.name}
          Email: ${formData.email}
          Telefon: ${formData.phone || 'Nie podano'}
          Firma: ${formData.company || 'Nie podano'}
          Usługa: ${formData.service}
          Budżet: ${formData.budget || 'Nie podano'}
          Termin: ${formData.timeline || 'Nie podano'}
          
          Wiadomość:
          ${formData.message}
        `
      })

      setIsSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
          timeline: ''
        })
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      // You could show an error message here
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kontakt@sensero.pl",
      description: "Odpowiadamy w ciągu 24h",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+48 533 773 984",
      description: "Pon-Pt: 9:00-17:00",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "31-445 Kraków",
      description: "Polska",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Godziny pracy",
      value: "Pon-Pt: 9:00-17:00",
      description: "Wsparcie 24/7 dla klientów",
      color: "from-orange-500 to-red-500"
    }
  ]

  const faqs = [
    {
      question: "Ile kosztuje konsultacja?",
      answer: "Pierwsza konsultacja jest bezpłatna. Trwa do 60 minut i pozwala nam zrozumieć Twoje potrzeby."
    },
    {
      question: "Jak długo trwa realizacja projektu?",
      answer: "Zależy od złożoności. Proste strony: 1-2 tygodnie, zaawansowane systemy: 4-8 tygodni."
    },
    {
      question: "Czy oferujecie wsparcie po wdrożeniu?",
      answer: "Tak, oferujemy 30-dniowe wsparcie gratis, a następnie pakiety wsparcia długoterminowego."
    },
    {
      question: "Jakie technologie wykorzystujecie?",
      answer: "Używamy najnowszych technologii: React, Node.js, Python, AI/ML, cloud computing i więcej."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <AdvancedBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <MessageSquare className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">Skontaktuj się z ekspertami</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
          >
            Skontaktuj się{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              z nami
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Gotowy na transformację cyfrową? Napisz do nas lub umów bezpłatną konsultację. 
            Odpowiemy w ciągu 24 godzin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button className="btn-premium text-white text-lg px-10 py-4 rounded-2xl group">
              <Phone className="mr-3 h-5 w-5" />
              Zadzwoń: +48 533 773 984
            </Button>
            <Button 
              variant="outline" 
              className="glass border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-2xl"
            >
              <Mail className="mr-3 h-5 w-5" />
              kontakt@sensero.pl
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Wyślij zapytanie</h2>
                </div>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Dziękujemy za wiadomość!</h3>
                    <p className="text-gray-400 mb-6">Odpowiemy w ciągu 24 godzin.</p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                      <Zap className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-sm text-green-400">Wiadomość została wysłana</span>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2 flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          Imię i nazwisko *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Twoje imię i nazwisko"
                          className="bg-slate-800/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2 flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          Adres email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="twoj@email.pl"
                          className="bg-slate-800/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2 flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          Telefon
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+48 123 456 789"
                          className="bg-slate-800/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Firma
                        </label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Nazwa firmy"
                          className="bg-slate-800/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Rodzaj usługi *
                        </label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="bg-slate-800/50 border-white/20 text-white">
                            <SelectValue placeholder="Wybierz usługę" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-white/20">
                            <SelectItem value="website">Strona internetowa</SelectItem>
                            <SelectItem value="email-automation">Automat e-mailowy</SelectItem>
                            <SelectItem value="ai-bot">Bot AI</SelectItem>
                            <SelectItem value="api-integration">Integracja API</SelectItem>
                            <SelectItem value="consultation">Konsultacja</SelectItem>
                            <SelectItem value="other">Inne</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Budżet
                        </label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="bg-slate-800/50 border-white/20 text-white">
                            <SelectValue placeholder="Wybierz budżet" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-white/20">
                            <SelectItem value="under-5k">Poniżej 5,000 PLN</SelectItem>
                            <SelectItem value="5k-10k">5,000 - 10,000 PLN</SelectItem>
                            <SelectItem value="10k-25k">10,000 - 25,000 PLN</SelectItem>
                            <SelectItem value="25k-50k">25,000 - 50,000 PLN</SelectItem>
                            <SelectItem value="over-50k">Powyżej 50,000 PLN</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Preferowany termin realizacji
                      </label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="bg-slate-800/50 border-white/20 text-white">
                          <SelectValue placeholder="Wybierz termin" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-white/20">
                          <SelectItem value="asap">Jak najszybciej</SelectItem>
                          <SelectItem value="1-month">W ciągu miesiąca</SelectItem>
                          <SelectItem value="2-3-months">2-3 miesiące</SelectItem>
                          <SelectItem value="flexible">Elastyczny termin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Opis projektu *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Opowiedz nam o swoim projekcie, celach biznesowych i oczekiwaniach..."
                        rows={6}
                        className="bg-slate-800/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn-premium text-white py-4 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Wysyłanie...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5" />
                          Wyślij zapytanie
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Dane kontaktowe</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-card hover-lift flex items-start space-x-4"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-1">{info.title}</div>
                        <div className="text-white font-bold text-lg mb-1">{info.value}</div>
                        <div className="text-sm text-gray-500">{info.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-card">
                <h3 className="text-xl font-bold text-white mb-6">Znajdź nas w sieci</h3>
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
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="glass-card">
                <h3 className="text-xl font-bold text-white mb-6">Często zadawane pytania</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/30 rounded-xl p-4 border border-white/10"
                    >
                      <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-800/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Zap className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Nie czekaj -{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                rozpocznij już dziś!
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Każdy dzień zwłoki to stracone możliwości. 
              Skontaktuj się z nami i zacznij budować przyszłość swojego biznesu.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="btn-premium text-white text-lg px-10 py-4 rounded-2xl">
                <Phone className="mr-3 h-5 w-5" />
                Zadzwoń: +48 533 773 984
              </Button>
              <Button 
                variant="outline" 
                className="glass border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-2xl"
              >
                <Mail className="mr-3 h-5 w-5" />
                kontakt@sensero.pl
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage