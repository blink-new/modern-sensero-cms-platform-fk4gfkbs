import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Quote } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Link } from 'react-router-dom'
import AdvancedBackground from '../components/AdvancedBackground'

const ReviewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const reviews = [
    {
      id: 1,
      name: "Marcin Nowak",
      position: "Dyrektor ds. Marketingu",
      company: "Marketing Pro",
      avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      review: "Automaty e-mailowe od Sensero to game changer. Oszczędzamy 20 godzin tygodniowo na obsłudze klientów, a konwersja wzrosła o 180%. System jest intuicyjny i bardzo dobrze przemyślany.",
      project: "Automat e-mailowy",
      date: "Grudzień 2024"
    },
    {
      id: 2,
      name: "Anna Kowalska",
      position: "Właścicielka",
      company: "Fitness Studio",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      review: "Strona internetowa przekroczyła nasze oczekiwania. Profesjonalny design, szybkie ładowanie i świetna optymalizacja SEO. Liczba zapytań wzrosła o 300% w pierwszym miesiącu!",
      project: "Strona internetowa",
      date: "Listopad 2024"
    },
    {
      id: 3,
      name: "Tomasz Wiśniewski",
      position: "CEO",
      company: "TechStart",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      review: "Bot AI dla naszego Telegram kanału obsługuje 90% zapytań klientów. Zespół Sensero stworzył rozwiązanie, które naprawdę rozumie kontekst i odpowiada naturalnie.",
      project: "Bot AI",
      date: "Październik 2024"
    },
    {
      id: 4,
      name: "Katarzyna Nowacka",
      position: "Manager IT",
      company: "E-commerce Plus",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      review: "Integracja API między naszymi systemami działała od pierwszego dnia. Automatyzacja procesów oszczędza nam 15 godzin pracy tygodniowo. Profesjonalne podejście i terminowość.",
      project: "Integracja API",
      date: "Wrzesień 2024"
    },
    {
      id: 5,
      name: "Paweł Kowalczyk",
      position: "Właściciel",
      company: "Restauracja Smaki",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      review: "Bot do rezerwacji stolików w Telegram to strzał w dziesiątkę. Klienci mogą rezerwować 24/7, a my mamy pełną kontrolę nad dostępnością. Polecam każdej restauracji!",
      project: "Bot Telegram",
      date: "Sierpień 2024"
    },
    {
      id: 6,
      name: "Magdalena Zielińska",
      position: "Marketing Manager",
      company: "Beauty Salon",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      review: "Kompleksowe rozwiązanie - strona internetowa + automat e-mailowy + integracja z kalendarzem. Wszystko działa płynnie i zwiększyło naszą efektywność o 250%.",
      project: "Kompleksowe rozwiązanie",
      date: "Lipiec 2024"
    }
  ]

  return (
    <>
      {/* Advanced Background */}
      <AdvancedBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 min-h-screen flex items-center pt-20" style={{ zIndex: 2 }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Opinie <span className="text-gradient">klientów</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Zobacz, co mówią o nas zadowoleni klienci. Ich sukces to nasz sukces.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-800" style={{ zIndex: 2 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "4.9/5", label: "Średnia ocena", icon: "⭐" },
              { number: "20+", label: "Zadowolonych klientów", icon: "😊" },
              { number: "98%", label: "Poleca nas dalej", icon: "👍" },
              { number: "100%", label: "Projektów na czas", icon: "⏰" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card bg-slate-700/50 backdrop-blur-sm border border-slate-600/50"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900" style={{ zIndex: 2 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Co mówią nasi klienci</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Prawdziwe opinie od prawdziwych klientów
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-card bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-blue-400 mr-2" />
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-300 mb-6 italic">
                      "{review.review}"
                    </blockquote>
                    
                    <div className="flex items-center mb-4">
                      <img 
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-semibold text-white">{review.name}</p>
                        <p className="text-sm text-gray-400">{review.position}</p>
                        <p className="text-sm text-blue-400">{review.company}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-slate-600/50 pt-4">
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>Projekt: {review.project}</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-800" style={{ zIndex: 2 }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Wyróżniona opinia</h2>
            
            <Card className="glass-card bg-slate-700/50 backdrop-blur-sm border border-slate-600/50">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current mx-1" />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-300 mb-8 italic font-light leading-relaxed">
                  "Sensero to nie tylko wykonawca, ale prawdziwy partner biznesowy. Ich rozwiązania zmieniły sposób, w jaki prowadzimy naszą firmę. Automatyzacja procesów pozwoliła nam skupić się na rozwoju, a nie na rutynowych zadaniach."
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="Tomasz Wiśniewski"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-white text-lg">Tomasz Wiśniewski</p>
                    <p className="text-gray-300">CEO, TechStart</p>
                    <p className="text-blue-400 text-sm">Kompleksowa automatyzacja</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-800" style={{ zIndex: 2 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Historie sukcesu</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Konkretne rezultaty, które osiągnęli nasi klienci
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "+300%",
                description: "Wzrost liczby zapytań po wdrożeniu nowej strony internetowej",
                client: "Fitness Studio"
              },
              {
                metric: "+180%",
                description: "Zwiększenie konwersji dzięki automatom e-mailowym",
                client: "Marketing Pro"
              },
              {
                metric: "90%",
                description: "Zapytań obsługiwanych automatycznie przez bota AI",
                client: "TechStart"
              },
              {
                metric: "20h",
                description: "Tygodniowo oszczędzonego czasu dzięki automatyzacji",
                client: "Marketing Pro"
              },
              {
                metric: "15h",
                description: "Mniej pracy tygodniowo dzięki integracji systemów",
                client: "E-commerce Plus"
              },
              {
                metric: "24/7",
                description: "Dostępność systemu rezerwacji dla klientów",
                client: "Restauracja Smaki"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-6 text-center"
              >
                <div className="text-4xl font-bold text-gradient mb-3">{story.metric}</div>
                <p className="text-gray-300 mb-3">{story.description}</p>
                <p className="text-sm text-gray-400">{story.client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600" style={{ zIndex: 2 }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Dołącz do zadowolonych klientów
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Rozpocznij swoją historię sukcesu już dziś. Skontaktuj się z nami i zobacz, jak możemy pomóc Twojemu biznesowi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">
                  Rozpocznij projekt <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3">
                  Zobacz nasze portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ReviewsPage