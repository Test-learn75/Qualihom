import { motion } from 'framer-motion'
import { BarChart2, Users, MessageSquare, LineChart } from 'lucide-react'
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
    title: 'Gestion des Contacts',
    description: 'Centralisez et organisez efficacement toutes vos relations clients.',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=1200'
  },
  {
    title: 'Automatisation',
    description: 'Automatisez vos tâches répétitives et vos campagnes marketing.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200'
  },
  {
    title: 'Analytics Avancés',
    description: 'Analysez vos performances et prenez des décisions éclairées.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200'
  },
  {
    title: 'Intégrations',
    description: 'Connectez votre CRM à vos outils préférés pour plus d\'efficacité.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200'
  }
]

const CRMProduct = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section with cards */}
        <section className="relative h-screen flex flex-col justify-center">
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
                <BarChart2 className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            <motion.h1 
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl font-medium text-white mb-6"
            >
              Solution CRM
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Gérez et optimisez vos relations clients avec notre CRM intuitif et puissant.
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
              {/* Contacts Management Card */}
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
                    Gestion des Contacts
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    Centralisez et organisez efficacement vos contacts clients.
                  </p>
                </div>
              </motion.div>

              {/* Communication Card */}
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
                    <MessageSquare className="w-6 h-6" />
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
                    Communication
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    Gérez tous vos échanges clients depuis une interface unique.
                  </p>
                </div>
              </motion.div>

              {/* Analytics Card */}
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
                    <LineChart className="w-6 h-6" />
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
                    Analytics
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    Suivez et analysez vos performances commerciales.
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
                  Découvrez les outils essentiels qui font de notre CRM la meilleure solution pour votre entreprise.
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

export default CRMProduct
