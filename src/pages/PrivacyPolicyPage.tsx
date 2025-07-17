import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Mail, Phone } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'

const PrivacyPolicyPage: React.FC = () => {
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
              Polityka prywatności
            </h1>
            <p className="text-xl text-gray-600">
              Dbamy o Twoją prywatność i bezpieczeństwo danych osobowych
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
                <h2>1. Informacje ogólne</h2>
                <p>
                  Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
                  użytkowników strony internetowej sensero.pl oraz klientów korzystających z usług 
                  świadczonych przez Sensero.
                </p>
                <p>
                  <strong>Administrator danych:</strong><br />
                  Sensero<br />
                  31-445 Kraków<br />
                  Email: kontakt@sensero.pl<br />
                  Telefon: +48 533 773 984
                </p>

                <h2>2. Rodzaje przetwarzanych danych</h2>
                <p>Przetwarzamy następujące kategorie danych osobowych:</p>
                <ul>
                  <li><strong>Dane identyfikacyjne:</strong> imię, nazwisko, nazwa firmy</li>
                  <li><strong>Dane kontaktowe:</strong> adres email, numer telefonu, adres</li>
                  <li><strong>Dane techniczne:</strong> adres IP, informacje o przeglądarce, system operacyjny</li>
                  <li><strong>Dane dotyczące korzystania:</strong> historia przeglądania, preferencje</li>
                  <li><strong>Dane marketingowe:</strong> preferencje komunikacyjne, historia interakcji</li>
                </ul>

                <h2>3. Cele i podstawy prawne przetwarzania</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3>3.1 Świadczenie usług</h3>
                  <p>
                    <strong>Cel:</strong> Realizacja umowy o świadczenie usług<br />
                    <strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. b RODO (wykonanie umowy)<br />
                    <strong>Okres przechowywania:</strong> Do zakończenia umowy + 6 lat (przepisy podatkowe)
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <h3>3.2 Marketing i komunikacja</h3>
                  <p>
                    <strong>Cel:</strong> Wysyłanie informacji marketingowych, newsletter<br />
                    <strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. a RODO (zgoda)<br />
                    <strong>Okres przechowywania:</strong> Do wycofania zgody
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <h3>3.3 Analityka strony</h3>
                  <p>
                    <strong>Cel:</strong> Analiza ruchu, optymalizacja strony<br />
                    <strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)<br />
                    <strong>Okres przechowywania:</strong> 26 miesięcy
                  </p>
                </div>

                <h2>4. Udostępnianie danych</h2>
                <p>Twoje dane osobowe mogą być udostępniane:</p>
                <ul>
                  <li><strong>Podwykonawcom:</strong> Hosting, płatności, analityka (Google Analytics)</li>
                  <li><strong>Organom państwowym:</strong> Na podstawie przepisów prawa</li>
                  <li><strong>Partnerom biznesowym:</strong> Za Twoją wyraźną zgodą</li>
                </ul>

                <h2>5. Twoje prawa</h2>
                <p>Zgodnie z RODO przysługują Ci następujące prawa:</p>
                <ul>
                  <li><strong>Prawo dostępu</strong> do swoich danych osobowych</li>
                  <li><strong>Prawo sprostowania</strong> nieprawidłowych danych</li>
                  <li><strong>Prawo usunięcia</strong> danych ("prawo do bycia zapomnianym")</li>
                  <li><strong>Prawo ograniczenia</strong> przetwarzania</li>
                  <li><strong>Prawo przenoszenia</strong> danych</li>
                  <li><strong>Prawo sprzeciwu</strong> wobec przetwarzania</li>
                  <li><strong>Prawo wycofania zgody</strong> w dowolnym momencie</li>
                </ul>

                <h2>6. Pliki cookies</h2>
                <p>
                  Nasza strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania, 
                  personalizacji treści i analizy ruchu. Szczegółowe informacje znajdziesz w naszej 
                  <a href="/cookies" className="text-indigo-600 hover:underline"> Polityce Cookies</a>.
                </p>

                <h2>7. Bezpieczeństwo danych</h2>
                <p>Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych:</p>
                <ul>
                  <li>Szyfrowanie SSL/TLS</li>
                  <li>Regularne kopie zapasowe</li>
                  <li>Kontrola dostępu do danych</li>
                  <li>Monitoring bezpieczeństwa</li>
                  <li>Szkolenia pracowników</li>
                </ul>

                <h2>8. Zmiany w polityce prywatności</h2>
                <p>
                  Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. 
                  O wszelkich istotnych zmianach poinformujemy na stronie internetowej oraz 
                  drogą elektroniczną.
                </p>

                <h2>9. Kontakt</h2>
                <p>
                  W sprawach dotyczących ochrony danych osobowych możesz skontaktować się z nami:
                </p>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Mail className="h-5 w-5 text-indigo-600 mr-2" />
                    <span><strong>Email:</strong> kontakt@sensero.pl</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-indigo-600 mr-2" />
                    <span><strong>Telefon:</strong> +48 533 773 984</span>
                  </div>
                </div>

                <h2>10. Prawo do skargi</h2>
                <p>
                  Masz prawo wniesienia skargi do organu nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych, 
                  jeśli uważasz, że przetwarzanie Twoich danych osobowych narusza przepisy RODO.
                </p>
                <p>
                  <strong>Urząd Ochrony Danych Osobowych</strong><br />
                  ul. Stawki 2, 00-193 Warszawa<br />
                  Tel.: +48 22 531 03 00<br />
                  Email: kancelaria@uodo.gov.pl
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicyPage