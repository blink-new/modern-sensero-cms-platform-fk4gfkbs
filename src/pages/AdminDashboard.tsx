import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  FileText, 
  Users, 
  Mail, 
  Settings, 
  Plus,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Upload,
  TrendingUp,
  Calendar,
  Globe,
  Star
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { Switch } from '../components/ui/switch'
import blink from '../blink/client'

interface Page {
  id: string
  title: string
  slug: string
  status: 'published' | 'draft' | 'archived'
  updatedAt: string
  views: number
}

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  category: string
  featured: boolean
  createdAt: string
}

interface Message {
  id: string
  name: string
  email: string
  service: string
  message: string
  status: 'new' | 'replied' | 'archived'
  createdAt: string
}

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatarUrl: string
  featured: boolean
}

const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  
  // Mock data - in real app this would come from database
  const [pages] = useState<Page[]>([
    { id: '1', title: 'Strona główna', slug: 'home', status: 'published', updatedAt: '2025-01-16', views: 1250 },
    { id: '2', title: 'Usługi', slug: 'uslugi', status: 'published', updatedAt: '2025-01-15', views: 890 },
    { id: '3', title: 'Portfolio', slug: 'portfolio', status: 'draft', updatedAt: '2025-01-14', views: 650 },
    { id: '4', title: 'Kontakt', slug: 'kontakt', status: 'published', updatedAt: '2025-01-13', views: 420 }
  ])

  const [projects] = useState<Project[]>([
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'Nowoczesna platforma e-commerce z zaawansowanymi funkcjami',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
      featured: true,
      createdAt: '2025-01-10'
    },
    {
      id: '2',
      title: 'AI Chatbot',
      description: 'Inteligentny chatbot z wykorzystaniem GPT-4',
      imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=300&h=200&fit=crop',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'React'],
      category: 'AI Solutions',
      featured: true,
      createdAt: '2025-01-08'
    },
    {
      id: '3',
      title: 'Marketing Automation',
      description: 'System automatyzacji marketingu e-mailowego',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      technologies: ['Node.js', 'SendGrid', 'React', 'PostgreSQL'],
      category: 'Automation',
      featured: false,
      createdAt: '2025-01-05'
    }
  ])

  const [messages] = useState<Message[]>([
    {
      id: '1',
      name: 'Jan Kowalski',
      email: 'jan@example.com',
      service: 'Strona internetowa',
      message: 'Potrzebuję nowoczesnej strony internetowej dla mojej firmy...',
      status: 'new',
      createdAt: '2025-01-16'
    },
    {
      id: '2',
      name: 'Anna Nowak',
      email: 'anna@example.com',
      service: 'Bot AI',
      message: 'Interesuje mnie implementacja chatbota na stronie...',
      status: 'replied',
      createdAt: '2025-01-15'
    },
    {
      id: '3',
      name: 'Piotr Wiśniewski',
      email: 'piotr@example.com',
      service: 'Automatyzacja',
      message: 'Chciałbym zautomatyzować procesy w mojej firmie...',
      status: 'new',
      createdAt: '2025-01-14'
    }
  ])

  const [testimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: 'Anna Kowalska',
      role: 'CEO',
      company: 'TechStart',
      content: 'Sensero przekroczyło nasze oczekiwania. Strona internetowa jest nie tylko piękna, ale także funkcjonalna i szybka.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=100&h=100&fit=crop&crop=face',
      featured: true
    },
    {
      id: '2',
      name: 'Piotr Nowak',
      role: 'Founder',
      company: 'E-commerce Pro',
      content: 'Automatyzacja e-mail marketingu zwiększyła nasze konwersje o 300%. Niesamowite rezultaty!',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      featured: true
    }
  ])

  const stats = {
    totalPages: pages.length,
    totalProjects: projects.length,
    totalMessages: messages.filter(m => m.status === 'new').length,
    totalTestimonials: testimonials.length,
    totalViews: pages.reduce((sum, page) => sum + page.views, 0),
    publishedPages: pages.filter(p => p.status === 'published').length
  }

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Ładowanie panelu...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card max-w-md w-full mx-4"
        >
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Panel Administracyjny</h2>
            <p className="text-gray-400 mb-6">Zaloguj się, aby uzyskać dostęp do panelu CMS</p>
            <Button 
              onClick={() => blink.auth.login('/admin')}
              className="w-full btn-premium text-white"
            >
              Zaloguj się
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div>
              <h1 className="text-3xl font-black text-gradient">Panel CMS</h1>
              <p className="text-gray-400">Witaj, {user.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="glass border-white/20 text-white hover:bg-white/10">
                <Eye className="h-4 w-4 mr-2" />
                Zobacz stronę
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => blink.auth.logout()}
                className="glass border-white/20 text-white hover:bg-white/10"
              >
                Wyloguj
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: FileText, label: 'Strony', value: stats.totalPages, subValue: `${stats.publishedPages} opublikowanych`, color: 'from-blue-500 to-cyan-500' },
            { icon: BarChart3, label: 'Projekty', value: stats.totalProjects, subValue: `${projects.filter(p => p.featured).length} wyróżnionych`, color: 'from-green-500 to-emerald-500' },
            { icon: Mail, label: 'Wiadomości', value: stats.totalMessages, subValue: 'nowych', color: 'from-orange-500 to-red-500' },
            { icon: TrendingUp, label: 'Wyświetlenia', value: stats.totalViews, subValue: 'łącznie', color: 'from-purple-500 to-pink-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card hover-lift"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-black text-white mt-1">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{stat.subValue}</p>
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800/50 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500">
              Przegląd
            </TabsTrigger>
            <TabsTrigger value="pages" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500">
              Strony
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500">
              Portfolio
            </TabsTrigger>
            <TabsTrigger value="messages" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500">
              Wiadomości
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500">
              Ustawienia
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Pages */}
              <Card className="glass border-white/10">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-white">Ostatnie strony</CardTitle>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="btn-premium">
                        <Plus className="h-4 w-4 mr-2" />
                        Nowa strona
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-800 border-white/10 text-white">
                      <DialogHeader>
                        <DialogTitle>Utwórz nową stronę</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title">Tytuł strony</Label>
                          <Input id="title" className="bg-slate-700 border-white/20 text-white" />
                        </div>
                        <div>
                          <Label htmlFor="slug">Slug URL</Label>
                          <Input id="slug" className="bg-slate-700 border-white/20 text-white" />
                        </div>
                        <Button className="w-full btn-premium">Utwórz stronę</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pages.slice(0, 4).map((page) => (
                      <div key={page.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl border border-white/5">
                        <div className="flex-1">
                          <p className="font-semibold text-white">{page.title}</p>
                          <p className="text-sm text-gray-400">/{page.slug}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {page.views} wyświetleń • Zaktualizowano: {page.updatedAt}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge 
                            variant={page.status === 'published' ? 'default' : 'secondary'}
                            className={page.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}
                          >
                            {page.status === 'published' ? 'Opublikowana' : 'Szkic'}
                          </Badge>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Messages */}
              <Card className="glass border-white/10">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-white">Nowe wiadomości</CardTitle>
                  <Button size="sm" variant="outline" className="glass border-white/20 text-white hover:bg-white/10">
                    Zobacz wszystkie
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {messages.slice(0, 4).map((message) => (
                      <div key={message.id} className="flex items-start justify-between p-4 bg-slate-700/30 rounded-xl border border-white/5">
                        <div className="flex-1">
                          <p className="font-semibold text-white">{message.name}</p>
                          <p className="text-sm text-gray-400">{message.email}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {message.service} • {message.createdAt}
                          </p>
                          <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                            {message.message}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <Badge 
                            variant={message.status === 'new' ? 'destructive' : 'default'}
                            className={message.status === 'new' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}
                          >
                            {message.status === 'new' ? 'Nowa' : 'Odpowiedziano'}
                          </Badge>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Szybkie akcje</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { icon: Plus, label: 'Nowa strona', action: 'Utwórz' },
                    { icon: Upload, label: 'Nowy projekt', action: 'Dodaj' },
                    { icon: Settings, label: 'Ustawienia', action: 'Konfiguruj' },
                    { icon: Download, label: 'Eksport danych', action: 'Pobierz' }
                  ].map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="glass border-white/20 text-white hover:bg-white/10 h-20 flex-col space-y-2"
                    >
                      <action.icon className="h-6 w-6" />
                      <div className="text-center">
                        <div className="font-medium">{action.label}</div>
                        <div className="text-xs text-gray-400">{action.action}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pages">
            <Card className="glass border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Zarządzanie stronami</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Search className="h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Szukaj stron..." 
                      className="w-64 bg-slate-700 border-white/20 text-white"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-40 bg-slate-700 border-white/20 text-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-white/20">
                      <SelectItem value="all">Wszystkie</SelectItem>
                      <SelectItem value="published">Opublikowane</SelectItem>
                      <SelectItem value="draft">Szkice</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="btn-premium">
                    <Plus className="h-4 w-4 mr-2" />
                    Nowa strona
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pages.map((page) => (
                    <div key={page.id} className="flex items-center justify-between p-6 bg-slate-700/30 rounded-xl border border-white/5 hover:bg-slate-700/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{page.title}</h3>
                          <p className="text-sm text-gray-400">/{page.slug}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-xs text-gray-500">
                              <Calendar className="h-3 w-3 inline mr-1" />
                              {page.updatedAt}
                            </span>
                            <span className="text-xs text-gray-500">
                              <Eye className="h-3 w-3 inline mr-1" />
                              {page.views} wyświetleń
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={page.status === 'published' ? 'default' : 'secondary'}
                          className={page.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}
                        >
                          {page.status === 'published' ? 'Opublikowana' : 'Szkic'}
                        </Badge>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-400">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio">
            <Card className="glass border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Portfolio</CardTitle>
                <Button className="btn-premium">
                  <Plus className="h-4 w-4 mr-2" />
                  Nowy projekt
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <div key={project.id} className="glass-card hover-lift group">
                      <div className="relative overflow-hidden rounded-xl mb-4">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {project.featured && (
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-yellow-500/20 text-yellow-400">
                              <Star className="h-3 w-3 mr-1" />
                              Wyróżniony
                            </Badge>
                          </div>
                        )}
                      </div>
                      <h3 className="font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{project.createdAt}</span>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-400">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="glass border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Wiadomości kontaktowe</CardTitle>
                <div className="flex items-center space-x-4">
                  <Select>
                    <SelectTrigger className="w-40 bg-slate-700 border-white/20 text-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-white/20">
                      <SelectItem value="all">Wszystkie</SelectItem>
                      <SelectItem value="new">Nowe</SelectItem>
                      <SelectItem value="replied">Odpowiedziane</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="p-6 bg-slate-700/30 rounded-xl border border-white/5">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-white">{message.name}</h3>
                          <p className="text-sm text-gray-400">{message.email}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {message.service} • {message.createdAt}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={message.status === 'new' ? 'destructive' : 'default'}
                            className={message.status === 'new' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}
                          >
                            {message.status === 'new' ? 'Nowa' : 'Odpowiedziano'}
                          </Badge>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{message.message}</p>
                      <div className="flex items-center space-x-2 mt-4">
                        <Button size="sm" className="btn-premium">
                          Odpowiedz
                        </Button>
                        <Button size="sm" variant="outline" className="glass border-white/20 text-white hover:bg-white/10">
                          Archiwizuj
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="glass border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Ustawienia strony</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="siteTitle" className="text-white">Tytuł strony</Label>
                    <Input 
                      id="siteTitle" 
                      defaultValue="Sensero - Nowoczesne rozwiązania cyfrowe"
                      className="bg-slate-700 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="siteDescription" className="text-white">Opis strony</Label>
                    <Textarea 
                      id="siteDescription" 
                      defaultValue="Agencja technologiczna specjalizująca się w tworzeniu innowacyjnych rozwiązań cyfrowych"
                      className="bg-slate-700 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail" className="text-white">Email kontaktowy</Label>
                    <Input 
                      id="contactEmail" 
                      defaultValue="kontakt@sensero.pl"
                      className="bg-slate-700 border-white/20 text-white"
                    />
                  </div>
                  <Button className="btn-premium">Zapisz ustawienia</Button>
                </CardContent>
              </Card>

              <Card className="glass border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Ustawienia SEO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Indeksowanie przez wyszukiwarki</Label>
                      <p className="text-sm text-gray-400">Pozwól wyszukiwarkom indeksować stronę</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Sitemap XML</Label>
                      <p className="text-sm text-gray-400">Automatycznie generuj sitemap</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Analytics</Label>
                      <p className="text-sm text-gray-400">Włącz śledzenie Google Analytics</p>
                    </div>
                    <Switch />
                  </div>
                  <div>
                    <Label htmlFor="googleAnalytics" className="text-white">Google Analytics ID</Label>
                    <Input 
                      id="googleAnalytics" 
                      placeholder="G-XXXXXXXXXX"
                      className="bg-slate-700 border-white/20 text-white"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default AdminDashboard