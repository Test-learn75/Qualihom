import { Linkedin, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/qualihom', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/qualihom', label: 'GitHub' }
  ]

  const productLinks = [
    { name: 'Site Web', href: '/products/website' },
    { name: 'Réseaux Sociaux', href: '/products/social-media' },
    { name: 'CRM', href: '/products/crm' },
    { name: 'IA', href: '/products/ai' }
  ]

  const companyLinks = [
    { name: 'À Propos', href: '/about' },
    { name: 'Blog', href: '/blog' }
  ]

  const legalLinks = [
    { name: 'Mentions Légales', href: '/legal' },
    { name: 'Politique de Confidentialité', href: '/privacy' },
    { name: 'CGV', href: '/terms' }
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-4">
              <Link 
                to="/" 
                className="group inline-flex items-center gap-3 mb-4"
              >
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-xl bg-white flex items-center justify-center"
                >
                  <span className="text-black font-medium text-lg">Q.</span>
                </motion.div>
                <span className="text-xl font-medium text-white">Qualihom</span>
              </Link>
              <p className="text-gray-400 mb-4 text-sm">
                Solutions digitales pour les TPE, PME et associations.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Products */}
              <div>
                <h3 className="text-white font-medium mb-3">Produits</h3>
                <ul className="space-y-2">
                  {productLinks.map((link) => (
                    <motion.li
                      key={link.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors inline-block text-sm"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-medium mb-3">Entreprise</h3>
                <ul className="space-y-2">
                  {companyLinks.map((link) => (
                    <motion.li
                      key={link.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors inline-block text-sm"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-white font-medium mb-3">Contact</h3>
                <ul className="space-y-2">
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="mailto:contact@qualihom.io"
                      className="text-gray-400 hover:text-white transition-colors inline-block text-sm"
                    >
                      contact@qualihom.io
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="tel:+33123456789"
                      className="text-gray-400 hover:text-white transition-colors inline-block text-sm"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-xs">
                © {currentYear} Qualihom. Tous droits réservés.
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {legalLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.href}
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
    </footer>
  )
}

export default Footer
