import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { 
  Save, 
  Eye, 
  ArrowLeft, 
  Image, 
  Link, 
  Bold, 
  Italic,
  List,
  Settings,
  Code,
  Type,
  Palette,
  Layout,
  Monitor,
  Smartphone,
  Tablet,
  Undo,
  Redo,
  Upload,
  Globe,
  Search
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Badge } from '../components/ui/badge'
import { Switch } from '../components/ui/switch'
import { Slider } from '../components/ui/slider'
import { Separator } from '../components/ui/separator'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import blink from '../blink/client'

interface PageData {
  id: string
  title: string
  slug: string
  content: string
  metaDescription: string
  metaKeywords: string
  status: 'published' | 'draft' | 'archived'
  featuredImage: string
  customCSS: string
  customJS: string
  seoScore: number
}

const CMSEditor: React.FC = () => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [activeTab, setActiveTab] = useState('content')
  const contentRef = useRef<HTMLTextAreaElement>(null)
  
  const [currentPage, setCurrentPage] = useState<PageData>({
    id: 'home',
    title: 'Strona główna',
    slug: 'home',
    content: `# Kreujemy nowoczesne doświadczenia webowe

Strony internetowe, automaty e-mailowe, boty AI i integracje API — wszystko szyte na miarę Twojego biznesu z wykorzystaniem najnowszych technologii.

## Nasze usługi

### 🌐 Strony internetowe
Responsywne, szybkie i zoptymalizowane pod SEO strony internetowe z najnowszymi technologiami.

### 📧 Automaty e-mailowe  
Zaawansowane systemy automatyzacji e-mail marketingu z AI i personalizacją.

### 🤖 Boty AI
Inteligentne boty dla Telegram, WhatsApp i stron internetowych z GPT-4.

### ⚙️ Integracje API
Łączymy różne systemy i automatyzujemy procesy biznesowe z najwyższą precyzją.

## Dlaczego warto nas wybrać?

- ✅ **Doświadczenie i ekspertyza** - Nasz zespół to doświadczeni specjaliści
- ✅ **Najnowsze technologie** - Wykorzystujemy cutting-edge rozwiązania  
- ✅ **Kompleksowe podejście** - Od analizy po wsparcie
- ✅ **24/7 wsparcie** - Jesteśmy zawsze dostępni

---

*Skontaktuj się z nami już dziś i rozpocznij transformację cyfrową swojego biznesu!*`,
    metaDescription: 'Agencja technologiczna specjalizująca się w tworzeniu innowacyjnych rozwiązań cyfrowych. Strony internetowe, boty AI, automatyzacja.',
    metaKeywords: 'strony internetowe, boty AI, automatyzacja, e-mail marketing, integracje API',
    status: 'published',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
    customCSS: `/* Custom styles for this page */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4rem 0;
  text-align: center;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}`,
    customJS: `// Custom JavaScript for this page
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });
});`,
    seoScore: 85
  })

  const [history, setHistory] = useState<PageData[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  const handleSave = async () => {
    setSaving(true)
    
    // Add to history for undo/redo
    const newHistory = [...history.slice(0, historyIndex + 1), { ...currentPage }]
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
    
    // Simulate save to database
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSaving(false)
  }

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setCurrentPage(history[historyIndex - 1])
    }
  }

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      setCurrentPage(history[historyIndex + 1])
    }
  }

  const handlePreview = () => {
    window.open('/', '_blank')
  }

  const insertTextAtCursor = (text: string) => {
    if (contentRef.current) {
      const start = contentRef.current.selectionStart
      const end = contentRef.current.selectionEnd
      const content = currentPage.content
      const newContent = content.substring(0, start) + text + content.substring(end)
      
      setCurrentPage({ ...currentPage, content: newContent })
      
      // Restore cursor position
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.selectionStart = start + text.length
          contentRef.current.selectionEnd = start + text.length
          contentRef.current.focus()
        }
      }, 0)
    }
  }

  const formatText = (format: string) => {
    const selectedText = window.getSelection()?.toString() || 'tekst'
    
    switch (format) {
      case 'bold':
        insertTextAtCursor(`**${selectedText}**`)
        break
      case 'italic':
        insertTextAtCursor(`*${selectedText}*`)
        break
      case 'link':
        insertTextAtCursor(`[${selectedText}](https://example.com)`)
        break
      case 'image':
        insertTextAtCursor(`![${selectedText}](https://example.com/image.jpg)`)
        break
      case 'list':
        insertTextAtCursor(`\n- ${selectedText}\n- Element 2\n- Element 3`)
        break
      case 'heading':
        insertTextAtCursor(`\n## ${selectedText}\n`)
        break
    }
  }

  const calculateSEOScore = useCallback(() => {
    let score = 0
    
    // Title length (optimal: 30-60 characters)
    if (currentPage.title.length >= 30 && currentPage.title.length <= 60) score += 20
    else if (currentPage.title.length > 0) score += 10
    
    // Meta description (optimal: 120-160 characters)
    if (currentPage.metaDescription.length >= 120 && currentPage.metaDescription.length <= 160) score += 20
    else if (currentPage.metaDescription.length > 0) score += 10
    
    // Content length (optimal: >300 words)
    const wordCount = currentPage.content.split(' ').length
    if (wordCount > 300) score += 20
    else if (wordCount > 100) score += 10
    
    // Keywords in content
    if (currentPage.metaKeywords) {
      const keywords = currentPage.metaKeywords.split(',').map(k => k.trim().toLowerCase())
      const contentLower = currentPage.content.toLowerCase()
      const keywordDensity = keywords.filter(keyword => contentLower.includes(keyword)).length
      score += Math.min(keywordDensity * 5, 20)
    }
    
    // Featured image
    if (currentPage.featuredImage) score += 15
    
    // URL structure (slug)
    if (currentPage.slug && currentPage.slug.length > 0 && !currentPage.slug.includes(' ')) score += 5
    
    return Math.min(score, 100)
  }, [currentPage.title, currentPage.content, currentPage.metaDescription, currentPage.metaKeywords, currentPage.featuredImage, currentPage.slug])

  useEffect(() => {
    const newScore = calculateSEOScore()
    setCurrentPage(prev => ({ ...prev, seoScore: newScore }))
  }, [currentPage.title, currentPage.content, currentPage.metaDescription, currentPage.metaKeywords, currentPage.featuredImage, currentPage.slug, calculateSEOScore])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Ładowanie edytora...</p>
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
              <Code className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Edytor CMS</h2>
            <p className="text-gray-400 mb-6">Zaloguj się, aby edytować treści</p>
            <Button 
              onClick={() => blink.auth.login('/cms-editor')}
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
      <header className="bg-slate-800/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Powrót
              </Button>
              <Separator orientation="vertical" className="h-6 bg-white/20" />
              <div>
                <h1 className="text-xl font-bold text-white">Edytor CMS</h1>
                <p className="text-sm text-gray-400">Edytujesz: {currentPage.title}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Undo/Redo */}
              <div className="flex items-center space-x-1">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={handleUndo}
                  disabled={historyIndex <= 0}
                  className="text-gray-400 hover:text-white disabled:opacity-50"
                >
                  <Undo className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={handleRedo}
                  disabled={historyIndex >= history.length - 1}
                  className="text-gray-400 hover:text-white disabled:opacity-50"
                >
                  <Redo className="h-4 w-4" />
                </Button>
              </div>
              
              <Separator orientation="vertical" className="h-6 bg-white/20" />
              
              {/* Preview Mode */}
              <div className="flex items-center space-x-1 bg-slate-700/50 rounded-lg p-1">
                <Button 
                  size="sm" 
                  variant={previewMode === 'desktop' ? 'default' : 'ghost'}
                  onClick={() => setPreviewMode('desktop')}
                  className="text-xs"
                >
                  <Monitor className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant={previewMode === 'tablet' ? 'default' : 'ghost'}
                  onClick={() => setPreviewMode('tablet')}
                  className="text-xs"
                >
                  <Tablet className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant={previewMode === 'mobile' ? 'default' : 'ghost'}
                  onClick={() => setPreviewMode('mobile')}
                  className="text-xs"
                >
                  <Smartphone className="h-4 w-4" />
                </Button>
              </div>
              
              <Separator orientation="vertical" className="h-6 bg-white/20" />
              
              {/* Status Badge */}
              <Badge 
                variant={currentPage.status === 'published' ? 'default' : 'secondary'}
                className={currentPage.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}
              >
                {currentPage.status === 'published' ? 'Opublikowana' : 'Szkic'}
              </Badge>
              
              {/* Actions */}
              <Button variant="outline" size="sm" onClick={handlePreview} className="glass border-white/20 text-white hover:bg-white/10">
                <Eye className="h-4 w-4 mr-2" />
                Podgląd
              </Button>
              <Button 
                size="sm" 
                onClick={handleSave}
                disabled={saving}
                className="btn-premium"
              >
                <Save className="h-4 w-4 mr-2" />
                {saving ? 'Zapisywanie...' : 'Zapisz'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-3 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-white/10">
                <TabsTrigger value="content" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500">
                  <Type className="h-4 w-4 mr-2" />
                  Treść
                </TabsTrigger>
                <TabsTrigger value="design" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500">
                  <Palette className="h-4 w-4 mr-2" />
                  Design
                </TabsTrigger>
                <TabsTrigger value="seo" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500">
                  <Search className="h-4 w-4 mr-2" />
                  SEO
                </TabsTrigger>
                <TabsTrigger value="advanced" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500">
                  <Code className="h-4 w-4 mr-2" />
                  Zaawansowane
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-6">
                <Card className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Podstawowe informacje</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title" className="text-white">Tytuł strony</Label>
                        <Input
                          id="title"
                          value={currentPage.title}
                          onChange={(e) => setCurrentPage({...currentPage, title: e.target.value})}
                          placeholder="Wprowadź tytuł strony"
                          className="bg-slate-700 border-white/20 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="slug" className="text-white">Slug URL</Label>
                        <Input
                          id="slug"
                          value={currentPage.slug}
                          onChange={(e) => setCurrentPage({...currentPage, slug: e.target.value})}
                          placeholder="url-strony"
                          className="bg-slate-700 border-white/20 text-white"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-white/10">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-white">Edytor treści</CardTitle>
                    <div className="flex items-center space-x-2">
                      {/* Formatting Toolbar */}
                      <div className="flex items-center space-x-1 bg-slate-700/50 rounded-lg p-1">
                        <Button size="sm" variant="ghost" onClick={() => formatText('bold')} className="text-gray-400 hover:text-white">
                          <Bold className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => formatText('italic')} className="text-gray-400 hover:text-white">
                          <Italic className="h-4 w-4" />
                        </Button>
                        <Separator orientation="vertical" className="h-4 bg-white/20" />
                        <Button size="sm" variant="ghost" onClick={() => formatText('heading')} className="text-gray-400 hover:text-white">
                          <Type className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => formatText('list')} className="text-gray-400 hover:text-white">
                          <List className="h-4 w-4" />
                        </Button>
                        <Separator orientation="vertical" className="h-4 bg-white/20" />
                        <Button size="sm" variant="ghost" onClick={() => formatText('link')} className="text-gray-400 hover:text-white">
                          <Link className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => formatText('image')} className="text-gray-400 hover:text-white">
                          <Image className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      ref={contentRef}
                      value={currentPage.content}
                      onChange={(e) => setCurrentPage({...currentPage, content: e.target.value})}
                      placeholder="Wprowadź treść strony... (obsługuje Markdown)"
                      className="min-h-[500px] bg-slate-700 border-white/20 text-white font-mono resize-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                      <span>Obsługuje składnię Markdown</span>
                      <span>{currentPage.content.split(' ').length} słów</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="design" className="space-y-6">
                <Card className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Obraz wyróżniający</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-4">
                      <Input
                        value={currentPage.featuredImage}
                        onChange={(e) => setCurrentPage({...currentPage, featuredImage: e.target.value})}
                        placeholder="URL obrazu"
                        className="bg-slate-700 border-white/20 text-white"
                      />
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="glass border-white/20 text-white hover:bg-white/10">
                            <Upload className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-slate-800 border-white/10 text-white">
                          <DialogHeader>
                            <DialogTitle>Prześlij obraz</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                              <p className="text-gray-400">Przeciągnij i upuść obraz lub kliknij, aby wybrać</p>
                              <Button className="mt-4 btn-premium">Wybierz plik</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    {currentPage.featuredImage && (
                      <div className="mt-4">
                        <img 
                          src={currentPage.featuredImage} 
                          alt="Podgląd obrazu"
                          className="w-full max-w-md h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Niestandardowe style CSS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={currentPage.customCSS}
                      onChange={(e) => setCurrentPage({...currentPage, customCSS: e.target.value})}
                      placeholder="/* Dodaj niestandardowe style CSS */&#10;.my-class {&#10;  color: #fff;&#10;}"
                      className="min-h-[200px] bg-slate-700 border-white/20 text-white font-mono"
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="seo" className="space-y-6">
                <Card className="glass border-white/10">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-white">Optymalizacja SEO</CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${currentPage.seoScore >= 80 ? 'bg-green-500' : currentPage.seoScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                      <span className="text-sm font-medium">{currentPage.seoScore}/100</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="metaDescription" className="text-white">Meta opis</Label>
                      <Textarea
                        id="metaDescription"
                        value={currentPage.metaDescription}
                        onChange={(e) => setCurrentPage({...currentPage, metaDescription: e.target.value})}
                        placeholder="Krótki opis strony dla wyszukiwarek (120-160 znaków)"
                        rows={3}
                        className="bg-slate-700 border-white/20 text-white"
                      />
                      <div className="flex justify-between items-center mt-2 text-sm">
                        <span className={`${currentPage.metaDescription.length >= 120 && currentPage.metaDescription.length <= 160 ? 'text-green-400' : 'text-gray-400'}`}>
                          {currentPage.metaDescription.length}/160 znaków
                        </span>
                        <span className="text-gray-500">Optymalne: 120-160</span>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="metaKeywords" className="text-white">Słowa kluczowe</Label>
                      <Input
                        id="metaKeywords"
                        value={currentPage.metaKeywords}
                        onChange={(e) => setCurrentPage({...currentPage, metaKeywords: e.target.value})}
                        placeholder="słowo1, słowo2, słowo3"
                        className="bg-slate-700 border-white/20 text-white"
                      />
                      <p className="text-sm text-gray-400 mt-1">Oddziel słowa kluczowe przecinkami</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-white">Analiza SEO</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <span className="text-sm text-gray-300">Długość tytułu</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">{currentPage.title.length} znaków</span>
                            <div className={`w-3 h-3 rounded-full ${currentPage.title.length >= 30 && currentPage.title.length <= 60 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <span className="text-sm text-gray-300">Długość opisu</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">{currentPage.metaDescription.length} znaków</span>
                            <div className={`w-3 h-3 rounded-full ${currentPage.metaDescription.length >= 120 && currentPage.metaDescription.length <= 160 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <span className="text-sm text-gray-300">Liczba słów</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">{currentPage.content.split(' ').length} słów</span>
                            <div className={`w-3 h-3 rounded-full ${currentPage.content.split(' ').length > 300 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <span className="text-sm text-gray-300">Obraz wyróżniający</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">{currentPage.featuredImage ? 'Dodany' : 'Brak'}</span>
                            <div className={`w-3 h-3 rounded-full ${currentPage.featuredImage ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-6">
                <Card className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Niestandardowy JavaScript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={currentPage.customJS}
                      onChange={(e) => setCurrentPage({...currentPage, customJS: e.target.value})}
                      placeholder="// Dodaj niestandardowy kod JavaScript&#10;document.addEventListener('DOMContentLoaded', function() {&#10;  // Twój kod tutaj&#10;});"
                      className="min-h-[300px] bg-slate-700 border-white/20 text-white font-mono"
                    />
                  </CardContent>
                </Card>

                <Card className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Ustawienia zaawansowane</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white">Indeksowanie przez wyszukiwarki</Label>
                        <p className="text-sm text-gray-400">Pozwól wyszukiwarkom indeksować tę stronę</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white">Sitemap</Label>
                        <p className="text-sm text-gray-400">Uwzględnij w sitemap XML</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white">Cache</Label>
                        <p className="text-sm text-gray-400">Włącz cache dla tej strony</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Page Settings */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Ustawienia strony</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="status" className="text-white">Status</Label>
                  <Select 
                    value={currentPage.status} 
                    onValueChange={(value: 'published' | 'draft' | 'archived') => setCurrentPage({...currentPage, status: value})}
                  >
                    <SelectTrigger className="bg-slate-700 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-white/20">
                      <SelectItem value="draft">Szkic</SelectItem>
                      <SelectItem value="published">Opublikowana</SelectItem>
                      <SelectItem value="archived">Zarchiwizowana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator className="bg-white/20" />

                <div>
                  <p className="text-sm text-gray-400 mb-2">Ostatnia modyfikacja:</p>
                  <p className="text-sm font-medium text-white">16 stycznia 2025, 14:30</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-2">Autor:</p>
                  <p className="text-sm font-medium text-white">{user.email}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-2">URL strony:</p>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-blue-400">/{currentPage.slug}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SEO Score */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Wynik SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className={`text-4xl font-bold mb-2 ${currentPage.seoScore >= 80 ? 'text-green-400' : currentPage.seoScore >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {currentPage.seoScore}
                  </div>
                  <div className="text-sm text-gray-400 mb-4">z 100 punktów</div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${currentPage.seoScore >= 80 ? 'bg-green-500' : currentPage.seoScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${currentPage.seoScore}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {currentPage.seoScore >= 80 ? 'Doskonałe SEO' : currentPage.seoScore >= 60 ? 'Dobre SEO' : 'Wymaga poprawy'}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Szybkie akcje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start glass border-white/20 text-white hover:bg-white/10">
                  <Eye className="h-4 w-4 mr-2" />
                  Podgląd na żywo
                </Button>
                <Button variant="outline" className="w-full justify-start glass border-white/20 text-white hover:bg-white/10">
                  <Image className="h-4 w-4 mr-2" />
                  Galeria mediów
                </Button>
                <Button variant="outline" className="w-full justify-start glass border-white/20 text-white hover:bg-white/10">
                  <Layout className="h-4 w-4 mr-2" />
                  Szablony
                </Button>
                <Button variant="outline" className="w-full justify-start glass border-white/20 text-white hover:bg-white/10">
                  <Settings className="h-4 w-4 mr-2" />
                  Ustawienia strony
                </Button>
              </CardContent>
            </Card>

            {/* Page Templates */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Szablony</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: 'Strona standardowa', emoji: '📄' },
                    { name: 'Strona główna', emoji: '🏠' },
                    { name: 'Strona kontaktowa', emoji: '📞' },
                    { name: 'Portfolio', emoji: '💼' },
                    { name: 'Blog', emoji: '📝' },
                    { name: 'Landing page', emoji: '🚀' }
                  ].map((template, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      className="w-full justify-start text-sm text-gray-300 hover:text-white hover:bg-white/5"
                    >
                      <span className="mr-2">{template.emoji}</span>
                      {template.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CMSEditor