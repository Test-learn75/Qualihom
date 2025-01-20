import { motion } from 'framer-motion'
import { Globe, Zap, Palette, Search } from 'lucide-react'
import Contact from '../components/Contact'
import PageTransition from '../components/PageTransition'
import FeatureCarousel from '../components/FeatureCarousel'
import PortfolioSection from '../components/PortfolioSection'
import PricingSection from '../components/PricingSection'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

const features = [
  {
    title: 'Éditeur Visuel',
    description: 'Modifiez votre site facilement avec notre éditeur visuel intuitif.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200'
  },
  {
    title: 'Analytics Avancés',
    description: 'Suivez les performances de votre site avec des tableaux de bord détaillés.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200'
  },
  {
    title: 'Optimisation SEO',
    description: 'Améliorez votre visibilité sur les moteurs de recherche avec nos outils SEO intégrés.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200'
  },
  {
    title: 'Performance Maximale',
    description: 'Bénéficiez d\'un site web ultra-rapide avec nos optimisations de performance.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200'
  }
]

const WebsiteProduct = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section with cards */}
        <section className="relative min-h-screen flex flex-col justify-center">
          {/* Background Image with parallax effect */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?q=80&w=3131&auto=format&fit=crop')"
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              className="flex justify-center mb-12"
            >
              <motion.div 
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8 }
                }}
              >
                <Globe className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            <motion.h1 
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl font-medium mb-8 text-white"
            >
              Création de Site Web
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl text-white/90 max-w-2xl mx-auto"
            >
              Créez un site web professionnel qui attire et convertit vos visiteurs en clients.
            </motion.p>
          </div>

          {/* Feature Cards */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {/* Performance Card */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group p-6 bg-white/90 backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <motion.div className="flex-shrink-0 mr-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Zap className="w-6 h-6" />
                  </motion.div>
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-semibold mb-2"
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 5 }
                    }}
                    initial="rest"
                    whileHover="hover"
                  >
                    Performance
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sites web ultra-rapides et optimisés utilisant les dernières technologies.
                  </p>
                </div>
              </motion.div>

              {/* Design Card */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group p-6 bg-white/90 backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <motion.div className="flex-shrink-0 mr-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Palette className="w-6 h-6" />
                  </motion.div>
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-semibold mb-2"
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 5 }
                    }}
                    initial="rest"
                    whileHover="hover"
                  >
                    Design Moderne
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    Designs élégants et responsifs qui s'adaptent à tous les écrans.
                  </p>
                </div>
              </motion.div>

              {/* SEO Card */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group p-6 bg-white/90 backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <motion.div className="flex-shrink-0 mr-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Search className="w-6 h-6" />
                  </motion.div>
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-semibold mb-2"
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 5 }
                    }}
                    initial="rest"
                    whileHover="hover"
                  >
                    SEO Optimisé
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    Optimisation pour les moteurs de recherche intégrée dès la conception.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Rest of the sections */}
        <motion.section 
          className="bg-gray-50 py-24 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl font-medium mb-6"
                variants={fadeInUpVariants}
                custom={0}
              >
                Fonctionnalités Clés
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
                variants={fadeInUpVariants}
                custom={1}
              >
                Découvrez les outils essentiels qui font de notre solution la meilleure pour votre site web.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <FeatureCarousel features={features} />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <PortfolioSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <PricingSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default WebsiteProduct
