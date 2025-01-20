import { ChevronDown, Menu, X, Globe, Share2, BarChart2, BrainCircuit } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import LoginModal from './LoginModal'
import DemoModal from './DemoModal'

const Navbar = () => {
  const [showProductsMenu, setShowProductsMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const isLightPage = ['/products', '/blog', '/about'].includes(location.pathname)
  const showBorder = scrolled || isLightPage

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowProductsMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleBlogClick = () => navigate('/blog')
  const handleAboutClick = () => navigate('/about')

  return (
    <>
      <motion.nav 
        role="navigation"
        aria-label="Navigation principale"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled || isLightPage
            ? 'bg-white/80 backdrop-blur-lg' + (showBorder ? ' border-b border-gray-200' : '')
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/"
              className={`flex items-center gap-2 font-medium text-xl transition-colors duration-300 ${
                scrolled || isLightPage ? 'text-black' : 'text-white'
              }`}
              aria-label="Accueil Qualihom"
            >
              <motion.div 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  scrolled || isLightPage
                    ? 'bg-black text-white' 
                    : 'bg-white text-black'
                }`}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                Q.
              </motion.div>
              <span>Qualihom</span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {/* Products Menu */}
              <div 
                ref={menuRef}
                className="relative"
                onMouseEnter={() => setShowProductsMenu(true)}
                onMouseLeave={() => setShowProductsMenu(false)}
              >
                <button 
                  className={`flex items-center gap-1 py-2 transition-colors ${
                    scrolled || isLightPage
                      ? showProductsMenu ? 'text-black' : 'text-gray-600 hover:text-black'
                      : showProductsMenu ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setShowProductsMenu(!showProductsMenu)}
                  aria-expanded={showProductsMenu}
                  aria-controls="products-menu"
                >
                  Produits
                  <motion.div
                    animate={{ rotate: showProductsMenu ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {showProductsMenu && (
                    <motion.div 
                      id="products-menu"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 rounded-xl shadow-lg overflow-hidden bg-white border border-gray-200"
                      role="menu"
                    >
                      <Link 
                        to="/products/website"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        role="menuitem"
                      >
                        <Globe className="w-5 h-5" />
                        <div>
                          <div className="font-medium">Site Web</div>
                          <div className="text-sm text-gray-500">Créez votre présence en ligne</div>
                        </div>
                      </Link>
                      <Link 
                        to="/products/social-media"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        role="menuitem"
                      >
                        <Share2 className="w-5 h-5" />
                        <div>
                          <div className="font-medium">Réseaux Sociaux</div>
                          <div className="text-sm text-gray-500">Gérez votre présence sociale</div>
                        </div>
                      </Link>
                      <Link 
                        to="/products/crm"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        role="menuitem"
                      >
                        <BarChart2 className="w-5 h-5" />
                        <div>
                          <div className="font-medium">CRM</div>
                          <div className="text-sm text-gray-500">Gérez vos clients</div>
                        </div>
                      </Link>
                      <Link 
                        to="/products/ai"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        role="menuitem"
                      >
                        <BrainCircuit className="w-5 h-5" />
                        <div>
                          <div className="font-medium">IA</div>
                          <div className="text-sm text-gray-500">Automatisez vos tâches</div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blog */}
              <button 
                onClick={handleBlogClick}
                className={`transition-colors ${
                  scrolled || isLightPage
                    ? 'text-gray-600 hover:text-black'
                    : 'text-white/70 hover:text-white'
                }`}
                aria-label="Accéder au blog"
              >
                Blog
              </button>

              {/* About */}
              <button 
                onClick={handleAboutClick}
                className={`transition-colors ${
                  scrolled || isLightPage
                    ? 'text-gray-600 hover:text-black'
                    : 'text-white/70 hover:text-white'
                }`}
                aria-label="À propos de nous"
              >
                À propos
              </button>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setShowLoginModal(true)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  scrolled || isLightPage
                    ? 'text-gray-600 hover:text-black hover:border-black border border-transparent'
                    : 'text-white/70 hover:text-white hover:border-white border border-transparent'
                }`}
              >
                Connectez-vous
              </button>
              <button
                onClick={() => setShowDemoModal(true)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  scrolled || isLightPage
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                Démo
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2"
              aria-expanded={showMobileMenu}
              aria-controls="mobile-menu"
            >
              {showMobileMenu ? (
                <X className={`w-6 h-6 ${
                  scrolled || isLightPage ? 'text-black' : 'text-white'
                }`} />
              ) : (
                <Menu className={`w-6 h-6 ${
                  scrolled || isLightPage ? 'text-black' : 'text-white'
                }`} />
              )}
            </button>

            {/* Mobile menu */}
            <AnimatePresence>
              {showMobileMenu && (
                <motion.div
                  id="mobile-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden"
                >
                  <div className="px-4 py-6 space-y-4">
                    <Link
                      to="/products"
                      className="block px-4 py-2 text-gray-600 hover:text-black transition-colors"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      Produits
                    </Link>
                    <Link
                      to="/blog"
                      className="block px-4 py-2 text-gray-600 hover:text-black transition-colors"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-gray-600 hover:text-black transition-colors"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      À propos
                    </Link>
                    <div className="border-t border-gray-100 pt-4">
                      <button
                        onClick={() => {
                          setShowDemoModal(true)
                          setShowMobileMenu(false)
                        }}
                        className="block w-full px-4 py-2 text-gray-600 hover:text-black transition-colors text-left"
                      >
                        Démo
                      </button>
                      <button
                        onClick={() => {
                          setShowLoginModal(true)
                          setShowMobileMenu(false)
                        }}
                        className="block w-full px-4 py-2 text-gray-600 hover:text-black transition-colors text-left"
                      >
                        Connectez-vous
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Modals */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <DemoModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  )
}

export default Navbar
