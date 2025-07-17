import React from 'react'
import { motion } from 'framer-motion'
import { Cookie, Mail, Phone } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'

const CookiesPage: React.FC = () => {
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
            <Cookie className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Polityka Cookies
            </h1>
            <p className="text-xl text-gray-600">
              Informacje o wykorzystywaniu plików cookies na naszej stronie
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
                <h2>1. Czym są pliki cookies?</h2>
                <p>
                  Pliki cookies to małe pliki tekstowe zapisywane na Twoim urządzeniu podczas 
                  odwiedzania strony internetowej. Pozwalają one stronie "zapamiętać" Twoje 
                  działania i preferencje przez określony czas.
                </p>

                <h2>2. Jakie cookies wykorzystujemy?</h2>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3>2.1 Cookies niezbędne (zawsze aktywne)</h3>
                  <p>
                    Te pliki cookies są niezbędne do prawidłowego funkcjonowania strony 
                    i nie można ich wyłączyć.
                  </p>
                  <ul>
                    <li><strong>Sesja użytkownika</strong> - utrzymanie sesji podczas przeglądania</li>
                    <li><strong>Bezpieczeństwo</strong> - ochrona przed atakami CSRF</li>
                    <li><strong>Preferencje</strong> - zapamiętywanie ustawień językowych</li>
                  </ul>
                  <p><strong>Czas przechowywania:</strong> Do zamknięcia przeglądarki lub 24 godziny</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-4">
                  <h3>2.2 Cookies analityczne</h3>
                  <p>
                    Pomagają nam zrozumieć, jak użytkownicy korzystają ze strony, 
                    co pozwala na jej ulepszanie.
                  </p>
                  <ul>
                    <li><strong>Google Analytics</strong> - analiza ruchu na stronie</li>
                    <li><strong>Statystyki odwiedzin</strong> - liczba odsłon, czas na stronie</li>
                    <li><strong>Źródła ruchu</strong> - skąd przychodzą użytkownicy</li>
                  </ul>
                  <p><strong>Czas przechowywania:</strong> 26 miesięcy</p>
                  <p><strong>Dostawca:</strong> Google LLC</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mt-4">
                  <h3>2.3 Cookies marketingowe</h3>
                  <p>
                    Służą do wyświetlania spersonalizowanych reklam i śledzenia 
                    skuteczności kampanii marketingowych.
                  </p>
                  <ul>
                    <li><strong>Facebook Pixel</strong> - śledzenie konwersji z Facebook</li>
                    <li><strong>Google Ads</strong> - remarketing i optymalizacja reklam</li>
                    <li><strong>LinkedIn Insight</strong> - analiza ruchu z LinkedIn</li>
                  </ul>
                  <p><strong>Czas przechowywania:</strong> 12 miesięcy</p>
                  <p><strong>Dostawcy:</strong> Facebook, Google, LinkedIn</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mt-4">
                  <h3>2.4 Cookies funkcjonalne</h3>
                  <p>
                    Umożliwiają zapamiętywanie wyborów użytkownika i personalizację 
                    doświadczenia korzystania ze strony.
                  </p>
                  <ul>
                    <li><strong>Preferencje użytkownika</strong> - motyw, język, rozmiar czcionki</li>
                    <li><strong>Formularz kontaktowy</strong> - zapamiętywanie danych w formularzu</li>
                    <li><strong>Chat online</strong> - historia rozmów z obsługą</li>
                  </ul>
                  <p><strong>Czas przechowywania:</strong> 12 miesięcy</p>
                </div>

                <h2>3. Zarządzanie cookies</h2>
                <p>
                  Możesz kontrolować i zarządzać plikami cookies na kilka sposobów:
                </p>

                <h3>3.1 Ustawienia przeglądarki</h3>
                <p>Większość przeglądarek pozwala na:</p>
                <ul>
                  <li>Przeglądanie zapisanych cookies</li>
                  <li>Blokowanie wszystkich lub wybranych cookies</li>
                  <li>Usuwanie cookies</li>
                  <li>Otrzymywanie powiadomień o nowych cookies</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4>Instrukcje dla popularnych przeglądarek:</h4>
                  <ul>
                    <li><strong>Chrome:</strong> Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie</li>
                    <li><strong>Firefox:</strong> Opcje → Prywatność i bezpieczeństwo → Pliki cookie</li>
                    <li><strong>Safari:</strong> Preferencje → Prywatność → Zarządzaj danymi stron</li>
                    <li><strong>Edge:</strong> Ustawienia → Pliki cookie i uprawnienia witryn</li>
                  </ul>
                </div>

                <h3>3.2 Narzędzia zewnętrzne</h3>
                <p>Możesz również skorzystać z narzędzi do zarządzania cookies:</p>
                <ul>
                  <li><strong>Google Ads Settings</strong> - zarządzanie reklamami Google</li>
                  <li><strong>Facebook Ad Preferences</strong> - ustawienia reklam Facebook</li>
                  <li><strong>Your Online Choices</strong> - europejskie narzędzie opt-out</li>
                </ul>

                <h2>4. Konsekwencje wyłączenia cookies</h2>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <p>
                    <strong>Uwaga:</strong> Wyłączenie niektórych cookies może wpłynąć na 
                    funkcjonowanie strony:
                  </p>
                  <ul>
                    <li>Problemy z logowaniem i utrzymaniem sesji</li>
                    <li>Utrata personalizacji i preferencji</li>
                    <li>Ograniczona funkcjonalność formularzy</li>
                    <li>Brak możliwości analizy i ulepszania strony</li>
                  </ul>
                </div>

                <h2>5. Cookies stron trzecich</h2>
                <p>
                  Nasza strona może zawierać treści od zewnętrznych dostawców, 
                  którzy mogą ustawiać własne cookies:
                </p>
                <ul>
                  <li><strong>YouTube</strong> - odtwarzacze wideo</li>
                  <li><strong>Google Maps</strong> - mapy i lokalizacja</li>
                  <li><strong>Social Media</strong> - przyciski udostępniania</li>
                </ul>
                <p>
                  Te cookies podlegają polityce prywatności odpowiednich dostawców.
                </p>

                <h2>6. Aktualizacje polityki</h2>
                <p>
                  Niniejsza Polityka Cookies może być aktualizowana. O istotnych 
                  zmianach poinformujemy poprzez powiadomienie na stronie lub email.
                </p>

                <h2>7. Kontakt</h2>
                <p>
                  W sprawach dotyczących cookies możesz skontaktować się z nami:
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

                <h2>8. Przydatne linki</h2>
                <ul>
                  <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">All About Cookies</a></li>
                  <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Your Online Choices</a></li>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Zarządzanie cookies w Chrome</a></li>
                  <li><a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Zarządzanie cookies w Firefox</a></li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default CookiesPage