import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Differentiators from './components/Differentiators'
import Contact from './components/Contact'
import Error502 from './components/Error502'
import Products from './pages/Products'
import WebsiteProduct from './pages/WebsiteProduct'
import SocialMediaProduct from './pages/SocialMediaProduct'
import CRMProduct from './pages/CRMProduct'
import AIProduct from './pages/AIProduct'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import About from './pages/About'

const AppRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Differentiators />
              <Contact />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/website" element={<WebsiteProduct />} />
        <Route path="/products/social-media" element={<SocialMediaProduct />} />
        <Route path="/products/crm" element={<CRMProduct />} />
        <Route path="/products/ai" element={<AIProduct />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/502" element={<Error502 />} />
        <Route path="*" element={<Error502 />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
