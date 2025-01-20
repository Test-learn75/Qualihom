import { motion } from 'framer-motion'
import { Share2, Target, Users, TrendingUp } from 'lucide-react'
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
    title: 'Publications Planifiées',
    description: 'Planifiez et automatisez vos publications sur tous vos réseaux.',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200'
  },
  {
    title: 'Analytics Sociaux',
    description: 'Mesurez l\'impact de vos campagnes et votre engagement.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200'
  },
  {
    title: 'Gestion de Communauté',
    description: 'Gérez vos interactions et votre communauté efficacement.',
    image: 'https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=1200'
  },
  {
    title: 'Création de Contenu',
    description: 'Créez du contenu engageant avec nos outils intégrés.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200'
  }
]

const SocialMediaProduct = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section with cards */}
        <section className="relative min-h-screen flex flex-col justify-center">
          {/* Background Image with parallax effect */}
          <motion.div 
            className="fixed inset-0 z-0 will-change-transform"
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
              className="absolute inset-0 bg-black/30"
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
              className="flex justify-center mb-8"
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-[1px] flex items-center justify-center"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8 }
                }}
              >
                <Share2 className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            <motion.h1 
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl font-medium text-white mb-6"
            >
              Gestion Réseaux Sociaux
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Optimisez votre présence sur les réseaux sociaux et développez votre communauté.
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
              {/* Engagement Card */}
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
                className="group p-6 bg-white/90 backdrop-blur-[1px] rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <motion.div className="flex-shrink-0 mr-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Users className="w-6 h-6" />
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
                    Engagement
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    Augmentez l'engagement de votre communauté.
                  </p>
                </div>
              </motion.div>

              {/* Growth Card */}
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
                className="group p-6 bg-white/90 backdrop-blur-[1px] rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <motion.div className="flex-shrink-0 mr-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <TrendingUp className="w-6 h-6" />
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
                    Croissance
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    Développez votre audience de manière organique.
                  </p>
                </div>
              </motion.div>

              {/* Targeting Card */}
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
                className="group p-6 bg-white/90 backdrop-blur-[1px] rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <motion.div className="flex-shrink-0 mr-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Target className="w-6 h-6" />
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
                    Ciblage
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    Touchez votre audience cible avec précision.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Content sections with white background to cover the fixed background */}
        <div className="relative z-10 bg-white">
          {/* Key Features Section */}
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
                  Découvrez les outils essentiels pour une gestion efficace de vos réseaux sociaux.
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

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <PricingSection />
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

export default SocialMediaProduct
