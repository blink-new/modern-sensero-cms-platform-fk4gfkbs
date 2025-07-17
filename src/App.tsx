import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ProcessPage from './pages/ProcessPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import CookiesPage from './pages/CookiesPage'
import GDPRPage from './pages/GDPRPage'
import AdminDashboard from './pages/AdminDashboard'
import CMSEditor from './pages/CMSEditor'


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Toaster position="top-right" />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/uslugi" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/jak-dzialamy" element={<ProcessPage />} />
            <Route path="/opinie" element={<ReviewsPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
            <Route path="/regulamin" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/rodo" element={<GDPRPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/cms-editor" element={<CMSEditor />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App