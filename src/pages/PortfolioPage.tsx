import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Github, Star, Zap, Award, TrendingUp } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Link } from 'react-router-dom'
import AdvancedBackground from '../components/AdvancedBackground'

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Strona Wizytówka \"Trener Personalny\"",
      category: "website",
      image: "https://sensero.pl/portfolio_nowakon.png",
      description: "Nowoczesna strona wizytówka dla trenera personalnego z intuicyjnym formularzem kontaktowym oraz interaktywnym kalkulatorem BMI i zapotrzebowania kalorycznego.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsywny design",
        "Kalkulator BMI",
        "Formularz kontaktowy",
        "Animacje i efekty wizualne",
        "Optymalizacja SEO"
      ],
      results: {
        metric: "Wzrost konwersji",
        value: "180%",
        description: "Zwiększenie liczby zapytań o treningi"
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "AI Assistant \"CustomerBot Pro\"",
      category: "bot",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Inteligentny bot obsługi klienta dla Telegram i WhatsApp z zaawansowanym przetwarzaniem języka naturalnego. Bot obsługuje 85% zapytań bez interwencji człowieka.",
      technologies: ["Python", "OpenAI GPT-4", "Telegram API", "WhatsApp API", "PostgreSQL"],
      features: [
        "Przetwarzanie języka naturalnego",
        "Integracja z CRM",
        "Obsługa wielu języków",
        "Analiza nastrojów",
        "Automatyczna eskalacja"
      ],
      results: {
        metric: "Redukcja kosztów obsługi",
        value: "65%",
        description: "Automatyzacja 85% zapytań klientów"
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Marketing Agency Website",
      category: "website",
      image: "https://sensero.pl/agencjajakas.png",
      description: "Nowoczesna strona wizytówka dla agencji marketingowej z przejrzystym układem, intuicyjnym formularzem kontaktowym oraz szybkim dostępem do oferty. W skład wchodzą 4 podstrony.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Strapi CMS"],
      features: [
        "Multi-page struktura",
        "System CMS",
        "Portfolio gallery",
        "Contact forms",
        "Blog system"
      ],
      results: {
        metric: "Wzrost ruchu organicznego",
        value: "240%",
        description: "Poprawa pozycji w wyszukiwarkach"
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "E-commerce Automation System",
      category: "automation",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Zaawansowany system automatyzacji e-mail marketingu dla sklepu internetowego. Zwiększył konwersję o 280% i zredukował porzucone koszyki o 45%.",
      technologies: ["Node.js", "MongoDB", "Redis", "Mailgun API", "Stripe API"],
      features: [
        "Abandoned cart recovery",
        "Welcome sequences",
        "Behavioral triggers",
        "A/B testing",
        "Advanced analytics"
      ],
      results: {
        metric: "Wzrost konwersji",
        value: "280%",
        description: "Redukcja porzuconych koszyków o 45%"
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "Restaurant Management Bot",
      category: "bot",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Bot Telegram do zarządzania rezerwacjami w restauracji. Automatyzuje proces rezerwacji, przypomina o wizytach i zbiera feedback od klientów.",
      technologies: ["Python", "Telegram Bot API", "SQLite", "Schedule", "Pandas"],
      features: [
        "Rezerwacje online",
        "Przypomnienia automatyczne",
        "Menu digitalne",
        "Feedback system",
        "Analytics dashboard"
      ],
      results: {
        metric: "Wzrost rezerwacji",
        value: "150%",
        description: "Automatyzacja 90% procesu rezerwacji"
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "CRM Integration Platform",
      category: "integration",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Platforma integrująca różne systemy CRM, e-commerce i marketing automation. Synchronizuje dane w czasie rzeczywistym między 8 różnymi systemami.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
      features: [
        "Real-time synchronization",
        "Multi-system integration",
        "Data transformation",
        "Error handling",
        "Monitoring dashboard"
      ],
      results: {
        metric: "Oszczędność czasu",
        value: "40h/tydzień",
        description: "Automatyzacja procesów manualnych"
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ]

  const categories = [
    { id: 'all', label: 'Wszystkie', count: projects.length },
    { id: 'website', label: 'Strony internetowe', count: projects.filter(p => p.category === 'website').length },
    { id: 'bot', label: 'Boty AI', count: projects.filter(p => p.category === 'bot').length },
    { id: 'automation', label: 'Automatyzacja', count: projects.filter(p => p.category === 'automation').length },
    { id: 'integration', label: 'Integracje', count: projects.filter(p => p.category === 'integration').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const stats = [
    { number: "20+", label: "Zrealizowanych projektów", icon: Award },
    { number: "20+", label: "Zadowolonych klientów", icon: Star },
    { number: "100%", label: "Projektów na czas", icon: TrendingUp },
    { number: "24/7", label: "Wsparcie techniczne", icon: Zap }
  ]

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "Docker", "AWS", "Telegram API", "OpenAI", "Stripe", "Tailwind CSS",
    "Next.js", "Express", "Redis", "GraphQL", "Firebase", "Vercel"
  ]

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'website': return 'Strona internetowa'
      case 'bot': return 'Bot AI'
      case 'automation': return 'Automatyzacja'
      case 'integration': return 'Integracja'
      default: return category
    }
  }

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
              <Award className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">Nasze najlepsze realizacje</span>
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
              portfolio
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Sprawdź najnowsze projekty, które stworzyliśmy dla naszych klientów. 
            Każdy projekt to unikalne rozwiązanie dopasowane do konkretnych potrzeb biznesowych.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/kontakt">
              <Button className="btn-premium text-white text-lg px-10 py-4 rounded-2xl group">
                Rozpocznij projekt
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/uslugi">
              <Button 
                variant="outline" 
                className="glass border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-2xl"
              >
                Zobacz nasze usługi
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'glass border-white/20 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{category.label}</span>
                <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="glass-card overflow-hidden hover-lift group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                          <Star className="w-3 h-3 mr-1" />
                          Wyróżniony
                        </Badge>
                      </div>
                    )}

                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                        <a 
                          href={project.liveUrl}
                          className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors hover:scale-110"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                        <a 
                          href={project.githubUrl}
                          className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors hover:scale-110"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        variant="secondary" 
                        className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                      >
                        {getCategoryLabel(project.category)}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    
                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2">Kluczowe funkcje:</h4>
                      <div className="space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center text-xs text-gray-400">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-4 p-3 bg-slate-800/50 rounded-xl border border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-400">{project.results.metric}</div>
                          <div className="text-lg font-bold text-gradient">{project.results.value}</div>
                        </div>
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{project.results.description}</div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-white/20 text-gray-400">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-white/20 text-gray-400">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Action Button */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full glass border-white/20 text-white hover:bg-white/10 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:border-transparent transition-all duration-300"
                    >
                      Zobacz szczegóły
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Nasze{' '}
              <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                osiągnięcia
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Liczby, które mówią same za siebie
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card text-center hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Technologie, z których{' '}
              <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                korzystamy
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Wykorzystujemy najnowsze i najbardziej niezawodne technologie
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card text-center hover-lift group"
              >
                <div className="text-gray-300 font-medium group-hover:text-gradient transition-colors">
                  {tech}
                </div>
              </motion.div>
            ))}
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
                <Award className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Chcesz podobny{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                projekt?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Skontaktuj się z nami i omówmy Twoje potrzeby. 
              Stworzymy rozwiązanie idealne dla Twojego biznesu.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/kontakt">
                <Button className="btn-premium text-white text-lg px-10 py-4 rounded-2xl">
                  Rozpocznij projekt
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/uslugi">
                <Button 
                  variant="outline" 
                  className="glass border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-2xl"
                >
                  Zobacz nasze usługi
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage