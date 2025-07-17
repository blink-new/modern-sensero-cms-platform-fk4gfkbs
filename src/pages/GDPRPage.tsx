import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Mail, Phone, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'

const GDPRPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              RODO / GDPR
            </h1>
            <p className="text-xl text-gray-600">
              Informacje o przetwarzaniu danych osobowych zgodnie z RODO
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Ostatnia aktualizacja: 16 stycznia 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8 prose prose-lg max-w-none">
                <h2>1. Wprowadzenie do RODO</h2>
                <p>
                  Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. 
                  w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych 
                  i w sprawie swobodnego przepływu takich danych (RODO/GDPR) weszło w życie 25 maja 2018 r.
                </p>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3>Nasze zobowiązanie</h3>
                  <p>
                    Sensero w pełni przestrzega przepisów RODO i zobowiązuje się do ochrony 
                    Twoich danych osobowych zgodnie z najwyższymi standardami bezpieczeństwa.
                  </p>
                </div>

                <h2>2. Administrator danych</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p>
                    <strong>Administrator danych osobowych:</strong><br />
                    Sensero<br />
                    31-445 Kraków, Polska<br />
                    Email: kontakt@sensero.pl<br />
                    Telefon: +48 533 773 984
                  </p>
                </div>

                <h2>3. Twoje prawa zgodnie z RODO</h2>
                <p>
                  Zgodnie z RODO przysługują Ci następujące prawa w odniesieniu do Twoich danych osobowych:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                      <h4 className="font-semibold">Prawo dostępu (Art. 15)</h4>
                    </div>
                    <p className="text-sm">
                      Masz prawo uzyskać informację o tym, czy przetwarzamy Twoje dane osobowe, 
                      a jeśli tak - otrzymać kopię tych danych.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                      <h4 className="font-semibold">Prawo sprostowania (Art. 16)</h4>
                    </div>
                    <p className="text-sm">
                      Możesz żądać sprostowania nieprawidłowych danych osobowych 
                      lub uzupełnienia niekompletnych danych.
                    </p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-6 w-6 text-red-600 mr-2" />
                      <h4 className="font-semibold">Prawo do usunięcia (Art. 17)</h4>
                    </div>
                    <p className="text-sm">
                      "Prawo do bycia zapomnianym" - możesz żądać usunięcia swoich 
                      danych osobowych w określonych przypadkach.
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-6 w-6 text-yellow-600 mr-2" />
                      <h4 className="font-semibold">Prawo ograniczenia (Art. 18)</h4>
                    </div>
                    <p className="text-sm">
                      Możesz żądać ograniczenia przetwarzania swoich danych osobowych 
                      w określonych sytuacjach.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-6 w-6 text-purple-600 mr-2" />
                      <h4 className="font-semibold">Prawo przenoszenia (Art. 20)</h4>
                    </div>
                    <p className="text-sm">
                      Masz prawo otrzymać swoje dane w ustrukturyzowanym formacie 
                      i przenieść je do innego administratora.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-6 w-6 text-orange-600 mr-2" />
                      <h4 className="font-semibold">Prawo sprzeciwu (Art. 21)</h4>
                    </div>
                    <p className="text-sm">
                      Możesz wnieść sprzeciw wobec przetwarzania swoich danych osobowych 
                      w określonych przypadkach.
                    </p>
                  </div>
                </div>

                <h2>4. Jak skorzystać ze swoich praw?</h2>
                <p>
                  Aby skorzystać z przysługujących Ci praw, skontaktuj się z nami:
                </p>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Sposoby kontaktu:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-indigo-600 mr-3" />
                      <span><strong>Email:</strong> kontakt@sensero.pl</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-indigo-600 mr-3" />
                      <span><strong>Telefon:</strong> +48 533 773 984</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      <Mail className="mr-2 h-4 w-4" />
                      Wyślij zapytanie RODO
                    </Button>
                  </div>
                </div>

                <h2>5. Terminy realizacji</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul>
                    <li><strong>Standardowy termin:</strong> 30 dni od otrzymania wniosku</li>
                    <li><strong>Przedłużenie:</strong> Do 60 dni w uzasadnionych przypadkach</li>
                    <li><strong>Potwierdzenie:</strong> Otrzymasz potwierdzenie w ciągu 72 godzin</li>
                    <li><strong>Bezpłatnie:</strong> Pierwsze żądanie jest bezpłatne</li>
                  </ul>
                </div>

                <h2>6. Podstawy prawne przetwarzania</h2>
                <p>Twoje dane osobowe przetwarzamy na podstawie:</p>

                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Art. 6 ust. 1 lit. a - Zgoda</h4>
                    <p className="text-sm text-gray-600">
                      Newsletter, marketing, cookies analityczne i marketingowe
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Art. 6 ust. 1 lit. b - Wykonanie umowy</h4>
                    <p className="text-sm text-gray-600">
                      Realizacja zamówionych usług, obsługa klienta
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold">Art. 6 ust. 1 lit. c - Obowiązek prawny</h4>
                    <p className="text-sm text-gray-600">
                      Księgowość, podatki, archiwizacja dokumentów
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Art. 6 ust. 1 lit. f - Prawnie uzasadniony interes</h4>
                    <p className="text-sm text-gray-600">
                      Analityka strony, bezpieczeństwo, dochodzenie roszczeń
                    </p>
                  </div>
                </div>

                <h2>7. Przekazywanie danych do krajów trzecich</h2>
                <p>
                  Niektóre z naszych usług mogą przekazywać dane do krajów spoza UE/EOG:
                </p>
                <ul>
                  <li><strong>Google (USA)</strong> - Analytics, Ads - Adequacy Decision</li>
                  <li><strong>Facebook (USA)</strong> - Marketing - Standard Contractual Clauses</li>
                  <li><strong>Microsoft (USA)</strong> - Hosting - Adequacy Decision</li>
                </ul>
                <p>
                  Wszystkie przekazania są zabezpieczone odpowiednimi gwarancjami prawnymi.
                </p>

                <h2>8. Automatyczne podejmowanie decyzji</h2>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <p>
                    <strong>Informujemy, że nie stosujemy automatycznego podejmowania decyzji, 
                    w tym profilowania, które wywierałoby skutki prawne lub w podobny sposób 
                    istotnie wpływało na Twoją sytuację.</strong>
                  </p>
                </div>

                <h2>9. Naruszenia ochrony danych</h2>
                <p>
                  W przypadku naruszenia ochrony danych osobowych:
                </p>
                <ul>
                  <li>Powiadomimy organ nadzorczy w ciągu 72 godzin</li>
                  <li>Poinformujemy Cię, jeśli naruszenie może powodować wysokie ryzyko</li>
                  <li>Podejmiemy natychmiastowe działania naprawcze</li>
                  <li>Przeprowadzimy analizę przyczyn i wdrożymy zabezpieczenia</li>
                </ul>

                <h2>10. Prawo do skargi</h2>
                <p>
                  Masz prawo wniesienia skargi do organu nadzorczego:
                </p>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p>
                    <strong>Prezes Urzędu Ochrony Danych Osobowych</strong><br />
                    ul. Stawki 2, 00-193 Warszawa<br />
                    Tel.: +48 22 531 03 00<br />
                    Email: kancelaria@uodo.gov.pl<br />
                    <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                      www.uodo.gov.pl
                    </a>
                  </p>
                </div>

                <h2>11. Środki bezpieczeństwa</h2>
                <p>
                  Stosujemy odpowiednie środki techniczne i organizacyjne:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Środki techniczne:</h4>
                    <ul className="text-sm">
                      <li>Szyfrowanie SSL/TLS</li>
                      <li>Firewall i monitoring</li>
                      <li>Regularne kopie zapasowe</li>
                      <li>Aktualizacje bezpieczeństwa</li>
                      <li>Kontrola dostępu</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Środki organizacyjne:</h4>
                    <ul className="text-sm">
                      <li>Szkolenia pracowników</li>
                      <li>Procedury bezpieczeństwa</li>
                      <li>Umowy z podwykonawcami</li>
                      <li>Audyty bezpieczeństwa</li>
                      <li>Plan reagowania na incydenty</li>
                    </ul>
                  </div>
                </div>

                <h2>12. Kontakt w sprawach RODO</h2>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <p className="mb-4">
                    W sprawach dotyczących ochrony danych osobowych skontaktuj się z nami:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-indigo-600 mr-3" />
                      <span><strong>Email:</strong> kontakt@sensero.pl</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-indigo-600 mr-3" />
                      <span><strong>Telefon:</strong> +48 533 773 984</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    W temacie wiadomości prosimy o podanie: "RODO - [rodzaj wniosku]"
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default GDPRPage