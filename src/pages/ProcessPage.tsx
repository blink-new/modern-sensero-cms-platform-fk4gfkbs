import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Clock, Users, Zap } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Link } from 'react-router-dom'
import AdvancedBackground from '../components/AdvancedBackground'

const ProcessPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const processSteps = [
    {
      step: "1",
      title: "Analiza potrzeb",
      subtitle: "Dokładnie poznajemy Twój biznes",
      description: "Rozpoczynamy od głębokiej analizy Twoich potrzeb biznesowych, celów i grupy docelowej. Analizujemy konkurencję i rynek, aby stworzyć strategię idealnie dopasowaną do Twojej branży.",
      features: ["Analiza biznesowa", "Research konkurencji", "Persona użytkowników", "Mapa procesów"],
      time: "3-5 dni",
      deliverables: [
        "Dokument analizy biznesowej",
        "Raport z analizy konkurencji",
        "Persony użytkowników",
        "Mapa procesów biznesowych",
        "Rekomendacje technologiczne"
      ]
    },
    {
      step: "2",
      title: "Projektowanie rozwiązania",
      subtitle: "Tworzymy szczegółowy plan działania",
      description: "Na podstawie analizy projektujemy optymalne rozwiązanie. Tworzymy wireframes, mockupy i prototypy, które pozwalają wizualizować końcowy efekt przed rozpoczęciem implementacji.",
      features: ["Wireframes", "UI/UX Design", "Prototypy interaktywne", "Architektura systemu"],
      time: "5-7 dni",
      deliverables: [
        "Wireframes wszystkich ekranów",
        "Projekt graficzny (UI/UX)",
        "Interaktywny prototyp",
        "Architektura techniczna",
        "Specyfikacja funkcjonalna"
      ]
    },
    {
      step: "3",
      title: "Wdrożenie i testy",
      subtitle: "Budujemy i testujemy rozwiązanie",
      description: "Implementujemy rozwiązanie używając najnowszych technologii i najlepszych praktyk. Każdy element jest dokładnie testowany, aby zapewnić najwyższą jakość i bezpieczeństwo.",
      features: ["Kod aplikacji", "Testy funkcjonalne", "Testy bezpieczeństwa", "Optymalizacja wydajności"],
      time: "1-3 tygodnie",
      deliverables: [
        "Działająca aplikacja/strona",
        "Kod źródłowy",
        "Dokumentacja techniczna",
        "Raporty z testów",
        "Instrukcja obsługi"
      ]
    },
    {
      step: "4",
      title: "Wsparcie i rozwój",
      subtitle: "Zapewniamy ciągłe wsparcie",
      description: "Po wdrożeniu zapewniamy pełne wsparcie techniczne, monitoring systemu i regularne aktualizacje. Pomagamy również w rozwoju i dodawaniu nowych funkcjonalności.",
      features: ["Wsparcie 24/7", "Monitoring systemu", "Regularne aktualizacje", "Backup i bezpieczeństwo"],
      time: "Ciągle",
      deliverables: [
        "Wsparcie techniczne 24/7",
        "Monitoring i alerty",
        "Regularne backupy",
        "Aktualizacje bezpieczeństwa",
        "Raporty wydajności"
      ]
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
            Jak <span className="text-gradient">działamy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Nasz sprawdzony proces gwarantuje sukces każdego projektu. Poznaj szczegóły naszej metodologii pracy.
          </motion.p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-800" style={{ zIndex: 2 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nasz proces w 4 krokach</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Każdy projekt realizujemy według sprawdzonej metodologii, która gwarantuje sukces
            </p>
          </div>
          
          <div className="space-y-16">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <Card className="h-full bg-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                          {process.step}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{process.title}</h3>
                          <p className="text-indigo-600 font-medium">{process.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{process.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Kluczowe działania:</h4>
                          <ul className="space-y-2">
                            {process.features.map((feature, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Otrzymujesz:</h4>
                          <ul className="space-y-2">
                            {process.deliverables.map((deliverable, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-center">
                                <ArrowRight className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-gray-600">Czas realizacji: </span>
                        <span className="font-medium text-indigo-600 ml-1">{process.time}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-indigo-600">{process.step}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dlaczego nasz proces działa?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nasze podejście opiera się na sprawdzonych metodologiach i wieloletnim doświadczeniu
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Współpraca na każdym etapie",
                description: "Regularnie konsultujemy postępy z klientem, zapewniając pełną transparentność procesu i możliwość wprowadzania zmian."
              },
              {
                icon: Zap,
                title: "Agile i iteracyjność",
                description: "Pracujemy w krótkich iteracjach, co pozwala na szybkie reagowanie na zmiany i dostarczanie wartości już na wczesnych etapach."
              },
              {
                icon: CheckCircle,
                title: "Kontrola jakości",
                description: "Każdy etap kończy się dokładną kontrolą jakości i testami, co gwarantuje wysoką jakość końcowego produktu."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Przykładowy timeline projektu</h2>
            <p className="text-xl text-gray-600">
              Tak może wyglądać realizacja typowego projektu strony internetowej
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
            
            <div className="space-y-8">
              {[
                { week: "Tydzień 1", title: "Analiza i research", status: "completed" },
                { week: "Tydzień 2", title: "Projektowanie UX/UI", status: "completed" },
                { week: "Tydzień 3-4", title: "Implementacja front-end", status: "in-progress" },
                { week: "Tydzień 5", title: "Implementacja back-end", status: "pending" },
                { week: "Tydzień 6", title: "Testy i optymalizacja", status: "pending" },
                { week: "Tydzień 7", title: "Wdrożenie i launch", status: "pending" }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    phase.status === 'completed' ? 'bg-green-500 border-green-500' :
                    phase.status === 'in-progress' ? 'bg-indigo-500 border-indigo-500' :
                    'bg-white border-gray-300'
                  } relative z-10`}></div>
                  
                  <div className="ml-6 bg-white rounded-lg p-4 shadow-sm border flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">{phase.title}</h4>
                        <p className="text-sm text-gray-500">{phase.week}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                        phase.status === 'in-progress' ? 'bg-indigo-100 text-indigo-800' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {phase.status === 'completed' ? 'Ukończone' :
                         phase.status === 'in-progress' ? 'W trakcie' : 'Oczekuje'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Często zadawane pytania</h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na najczęstsze pytania dotyczące naszego procesu pracy
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Czy mogę wprowadzać zmiany w trakcie projektu?",
                answer: "Tak, nasz proces jest elastyczny i pozwala na wprowadzanie zmian. Pracujemy w iteracjach, co umożliwia regularne konsultacje i modyfikacje. Większe zmiany mogą wpłynąć na timeline i budżet projektu."
              },
              {
                question: "Jak często otrzymuję aktualizacje o postępach?",
                answer: "Wysyłamy cotygodniowe raporty z postępów oraz organizujemy spotkania kontrolne na końcu każdego etapu. Dodatkowo masz stały dostęp do naszego systemu zarządzania projektami."
              },
              {
                question: "Co się dzieje po zakończeniu projektu?",
                answer: "Po wdrożeniu oferujemy 30-dniowe wsparcie techniczne bez dodatkowych kosztów. Następnie możesz wykupić pakiet wsparcia lub korzystać z naszych usług na zasadzie pay-per-use."
              },
              {
                question: "Czy otrzymam kod źródłowy?",
                answer: "Tak, po pełnej zapłacie za projekt otrzymujesz pełny kod źródłowy wraz z dokumentacją techniczną i instrukcjami wdrożenia."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Gotowy na start?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Skontaktuj się z nami i rozpocznij transformację cyfrową swojego biznesu już dziś
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

export default ProcessPage