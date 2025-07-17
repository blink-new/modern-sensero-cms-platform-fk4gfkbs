import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Mail, Phone } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'

const TermsPage: React.FC = () => {
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
            <FileText className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Regulamin
            </h1>
            <p className="text-xl text-gray-600">
              Zasady korzystania z naszych usług i strony internetowej
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
                <h2>1. Postanowienia ogólne</h2>
                <p>
                  Niniejszy Regulamin określa zasady korzystania ze strony internetowej sensero.pl 
                  oraz usług świadczonych przez Sensero.
                </p>
                <p>
                  <strong>Usługodawca:</strong><br />
                  Sensero<br />
                  31-445 Kraków<br />
                  Email: kontakt@sensero.pl<br />
                  Telefon: +48 533 773 984
                </p>

                <h2>2. Definicje</h2>
                <ul>
                  <li><strong>Usługodawca</strong> - Sensero</li>
                  <li><strong>Klient</strong> - osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług</li>
                  <li><strong>Strona</strong> - strona internetowa sensero.pl</li>
                  <li><strong>Usługi</strong> - usługi IT świadczone przez Usługodawcę</li>
                  <li><strong>Regulamin</strong> - niniejszy dokument</li>
                </ul>

                <h2>3. Zakres usług</h2>
                <p>Usługodawca świadczy następujące usługi:</p>
                <ul>
                  <li>Tworzenie stron internetowych</li>
                  <li>Systemy automatyzacji e-mail marketingu</li>
                  <li>Boty AI dla różnych platform</li>
                  <li>Integracje API między systemami</li>
                  <li>Konsultacje technologiczne</li>
                  <li>Wsparcie techniczne</li>
                </ul>

                <h2>4. Zasady korzystania ze strony</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3>4.1 Dozwolone działania</h3>
                  <ul>
                    <li>Przeglądanie treści w celach informacyjnych</li>
                    <li>Kontakt z Usługodawcą przez dostępne formularze</li>
                    <li>Korzystanie z udostępnionych materiałów zgodnie z ich przeznaczeniem</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg mt-4">
                  <h3>4.2 Działania zabronione</h3>
                  <ul>
                    <li>Naruszanie praw autorskich i własności intelektualnej</li>
                    <li>Wprowadzanie wirusów lub szkodliwego oprogramowania</li>
                    <li>Próby nieautoryzowanego dostępu do systemów</li>
                    <li>Spam i działania naruszające prawo</li>
                    <li>Kopiowanie treści bez zgody Usługodawcy</li>
                  </ul>
                </div>

                <h2>5. Proces realizacji usług</h2>
                <h3>5.1 Składanie zamówienia</h3>
                <p>
                  Zamówienie można złożyć poprzez formularz kontaktowy, email lub telefon. 
                  Każde zamówienie wymaga indywidualnej wyceny i akceptacji przez obie strony.
                </p>

                <h3>5.2 Umowa</h3>
                <p>
                  Szczegóły współpracy określa indywidualna umowa zawierająca:
                </p>
                <ul>
                  <li>Zakres prac</li>
                  <li>Terminy realizacji</li>
                  <li>Wynagrodzenie</li>
                  <li>Warunki płatności</li>
                  <li>Prawa autorskie</li>
                </ul>

                <h3>5.3 Realizacja</h3>
                <p>
                  Usługodawca realizuje usługi zgodnie z uzgodnionym harmonogramem, 
                  informując Klienta o postępach prac.
                </p>

                <h2>6. Płatności</h2>
                <h3>6.1 Zasady płatności</h3>
                <ul>
                  <li>Płatności realizowane są zgodnie z umową</li>
                  <li>Standardowy termin płatności: 14 dni od daty wystawienia faktury</li>
                  <li>Możliwe płatności etapowe dla większych projektów</li>
                  <li>Akceptowane formy płatności: przelew bankowy, karta płatnicza</li>
                </ul>

                <h3>6.2 Opóźnienia w płatnościach</h3>
                <p>
                  W przypadku opóźnienia w płatności Usługodawca może:
                </p>
                <ul>
                  <li>Naliczać odsetki ustawowe</li>
                  <li>Wstrzymać realizację usług</li>
                  <li>Rozwiązać umowę z winy Klienta</li>
                </ul>

                <h2>7. Prawa autorskie</h2>
                <p>
                  Wszystkie materiały na stronie (teksty, grafiki, kod) są chronione prawem autorskim. 
                  Kopiowanie bez zgody jest zabronione.
                </p>
                <p>
                  Prawa do wykonanych prac przechodzą na Klienta po pełnej zapłacie, 
                  chyba że umowa stanowi inaczej.
                </p>

                <h2>8. Odpowiedzialność</h2>
                <h3>8.1 Odpowiedzialność Usługodawcy</h3>
                <p>
                  Usługodawca odpowiada za wykonanie usług zgodnie z umową. 
                  Odpowiedzialność ograniczona jest do wysokości wynagrodzenia za daną usługę.
                </p>

                <h3>8.2 Odpowiedzialność Klienta</h3>
                <p>
                  Klient odpowiada za:
                </p>
                <ul>
                  <li>Dostarczenie kompletnych i prawdziwych informacji</li>
                  <li>Terminowe płatności</li>
                  <li>Współpracę w procesie realizacji</li>
                  <li>Zgodność treści z prawem</li>
                </ul>

                <h2>9. Reklamacje</h2>
                <p>
                  Reklamacje można składać w terminie 14 dni od odbioru usługi:
                </p>
                <ul>
                  <li>Drogą elektroniczną: kontakt@sensero.pl</li>
                  <li>Telefonicznie: +48 533 773 984</li>
                </ul>
                <p>
                  Reklamacja powinna zawierać opis problemu i oczekiwany sposób rozwiązania. 
                  Odpowiedź udzielana jest w terminie 14 dni roboczych.
                </p>

                <h2>10. Ochrona danych osobowych</h2>
                <p>
                  Zasady przetwarzania danych osobowych określa 
                  <a href="/polityka-prywatnosci" className="text-indigo-600 hover:underline"> Polityka Prywatności</a>.
                </p>

                <h2>11. Postanowienia końcowe</h2>
                <h3>11.1 Zmiany regulaminu</h3>
                <p>
                  Usługodawca może zmieniać Regulamin, informując o tym na stronie internetowej. 
                  Zmiany wchodzą w życie po 7 dniach od publikacji.
                </p>

                <h3>11.2 Prawo właściwe</h3>
                <p>
                  W sprawach nieuregulowanych stosuje się prawo polskie. 
                  Sądem właściwym jest sąd właściwy dla siedziby Usługodawcy.
                </p>

                <h3>11.3 Rozstrzyganie sporów</h3>
                <p>
                  Strony będą dążyć do polubownego rozwiązania sporów. 
                  W przypadku braku porozumienia właściwy jest sąd powszechny.
                </p>

                <h2>12. Kontakt</h2>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <p className="mb-4">
                    W sprawach dotyczących Regulaminu możesz skontaktować się z nami:
                  </p>
                  <div className="flex items-center mb-3">
                    <Mail className="h-5 w-5 text-indigo-600 mr-2" />
                    <span><strong>Email:</strong> kontakt@sensero.pl</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-indigo-600 mr-2" />
                    <span><strong>Telefon:</strong> +48 533 773 984</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TermsPage