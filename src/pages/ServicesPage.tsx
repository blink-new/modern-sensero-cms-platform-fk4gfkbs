import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Mail, Bot, Settings, ArrowRight, Check, Zap, Star, Shield, Rocket } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Link } from 'react-router-dom'
import AdvancedBackground from '../components/AdvancedBackground'

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: "Strony internetowe",
      description: "Tworzymy strony internetowe, które nie tylko wyglądają świetnie, ale także generują wyniki biznesowe. Od prostych wizytówek po zaawansowane platformy e-commerce.",
      features: [
        "Responsywny design na wszystkie urządzenia",
        "Optymalizacja SEO i szybkość ładowania", 
        "System zarządzania treścią (CMS)",
        "Integracja z systemami płatności",
        "Analityka i monitoring wydajności",
        "Wsparcie techniczne i aktualizacje"
      ],
      timeline: "1-3 tygodnie",
      price: "2,500 PLN",
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      icon: Mail,
      title: "Automaty e-mailowe",
      description: "Budujemy zaawansowane systemy automatyzacji e-mail marketingu, które pracują 24/7 i zwiększają konwersję nawet o 300%. Personalizowane kampanie dopasowane do zachowań użytkowników.",
      features: [
        "Sekwencje welcome i onboarding",
        "Zaawansowana segmentacja użytkowników",
        "A/B testing kampanii",
        "Automatyzacja na podstawie zachowań",
        "Integracja z CRM i e-commerce",
        "Szczegółowe raporty i analityka"
      ],
      timeline: "2-4 tygodnie",
      price: "3,500 PLN",
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      icon: Bot,
      title: "Boty AI",
      description: "Tworzymy inteligentne boty dla Telegram, WhatsApp i stron internetowych. Nasze boty wykorzystują najnowsze technologie AI do naturalnej komunikacji z użytkownikami.",
      features: [
        "Przetwarzanie języka naturalnego (NLP)",
        "Integracja z bazami danych i CRM",
        "Obsługa wielu języków",
        "Analiza nastrojów i intencji",
        "Automatyczna eskalacja do człowieka",
        "Uczenie maszynowe i optymalizacja"
      ],
      timeline: "3-6 tygodni",
      price: "5,000 PLN",
      color: "from-green-500 to-emerald-500",
      popular: false
    },
    {
      icon: Settings,
      title: "Integracje API",
      description: "Integrujemy różne systemy i platformy, tworząc płynne przepływy danych i automatyzując procesy biznesowe. Eliminujemy ręczną pracę i zwiększamy efektywność.",
      features: [
        "Synchronizacja danych między systemami",
        "Automatyzacja przepływów pracy",
        "Monitoring i alerting w czasie rzeczywistym",
        "Bezpieczne połączenia API",
        "Transformacja i walidacja danych",
        "Dokumentacja i wsparcie techniczne"
      ],
      timeline: "2-5 tygodni",
      price: "4,000 PLN",
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ]

  const additionalServices = [
    {
      title: "Konsultacje technologiczne",
      description: "Pomożemy Ci wybrać najlepsze rozwiązania technologiczne dla Twojego biznesu",
      price: "200 PLN/h",
      icon: "💡"
    },
    {
      title: "Audyt techniczny",
      description: "Kompleksowy przegląd Twoich systemów i rekomendacje optymalizacji",
      price: "1,500 PLN",
      icon: "🔍"
    },
    {
      title: "Szkolenia zespołu",
      description: "Przeszkolimy Twój zespół w obsłudze nowych systemów i narzędzi",
      price: "1,000 PLN/dzień",
      icon: "🎓"
    },
    {
      title: "Wsparcie techniczne",
      description: "Ciągłe wsparcie i monitoring Twoich systemów",
      price: "500 PLN/miesiąc",
      icon: "🛠️"
    },
    {
      title: "Hosting i domeny",
      description: "Profesjonalny hosting i zarządzanie domenami",
      price: "100 PLN/miesiąc",
      icon: "🌐"
    },
    {
      title: "Backup i bezpieczeństwo",
      description: "Regularne kopie zapasowe i monitoring bezpieczeństwa",
      price: "300 PLN/miesiąc",
      icon: "🔒"
    }
  ]

  const processSteps = [
    { step: "1", title: "Analiza potrzeb", time: "3-5 dni", description: "Dogłębnie analizujemy Twoje potrzeby biznesowe" },
    { step: "2", title: "Projektowanie", time: "5-7 dni", description: "Tworzymy szczegółowy plan i mockupy" },
    { step: "3", title: "Wdrożenie", time: "1-3 tygodnie", description: "Realizujemy projekt zgodnie z planem" },
    { step: "4", title: "Wsparcie", time: "Ciągle", description: "Zapewniamy długoterminowe wsparcie" }
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
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">Kompleksowe rozwiązania cyfrowe</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
          >
            Nasze{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              usługi
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Kompleksowe rozwiązania technologiczne dla Twojego biznesu. 
            Od prostych stron internetowych po zaawansowane systemy automatyzacji.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/kontakt">
              <Button className="btn-premium text-white text-lg px-10 py-4 rounded-2xl group">
                Bezpłatna konsultacja
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                className="glass border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-2xl"
              >
                Zobacz realizacje
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
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
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                {service.popular && (
                  <div className="absolute -top-4 left-6 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Najpopularniejsze
                    </div>
                  </div>
                )}
                
                <div className="glass-card hover-lift group h-full">
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
                      
                      <div className="grid grid-cols-1 gap-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-6 p-4 bg-slate-800/50 rounded-xl">
                        <div>
                          <div className="text-sm text-gray-400">Czas realizacji</div>
                          <div className="font-semibold text-white">{service.timeline}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Cena od</div>
                          <div className="font-bold text-2xl text-gradient">{service.price}</div>
                        </div>
                      </div>

                      <Link to="/kontakt">
                        <Button className="w-full btn-premium text-white">
                          Zamów {service.title.toLowerCase()}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-32 relative bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Dodatkowe{' '}
              <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                usługi
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Oferujemy również szereg dodatkowych usług wspierających Twój biznes
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card hover-lift text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="text-gradient font-bold text-lg">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Jak wygląda{' '}
              <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                współpraca?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nasz sprawdzony proces gwarantuje sukces każdego projektu
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card text-center hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">{process.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{process.description}</p>
                <div className="text-xs text-gray-500 bg-slate-800/50 px-3 py-1 rounded-full inline-block">
                  {process.time}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/jak-dzialamy">
              <Button 
                variant="outline" 
                className="glass border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-2xl"
              >
                Zobacz szczegóły procesu 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projektów", icon: Rocket },
              { number: "100%", label: "Zadowolenia", icon: Star },
              { number: "24/7", label: "Wsparcie", icon: Shield },
              { number: "5★", label: "Ocena", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Rocket className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Gotowy na{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                start?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś i rozpocznij projekt, 
              który zmieni sposób działania Twojego biznesu. Pierwsza konsultacja jest bezpłatna!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/kontakt">
                <Button className="btn-premium text-white text-lg px-10 py-4 rounded-2xl">
                  Bezpłatna konsultacja
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

export default ServicesPage