import { Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import AnimatedCard from './AnimatedCard'
import AnimatedText from './AnimatedText'
import ServiceModal from './ServiceModal'
import { useNavigate } from 'react-router-dom'

const challenges = [
  {
    id: '01',
    name: 'Acquérir des nouveaux clients',
    description: "Développez votre base client grâce à des solutions à l'état de l'art et rapidement actionnables",
    image: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=2574&auto=format&fit=crop',
    content: `• Un site web optimisé pour le SEO local
    • Une gestion automatisée de vos réseaux sociaux`
  },
  {
    id: '02',
    name: 'Fidéliser vos clients',
    description: 'Construisez des relations durables avec vos clients grâce à des interactions engageantes.',
    image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2666&auto=format&fit=crop',
    content: `• Un espace client optimisé
    • Un CRM pour des communications personnalisées et automatisées
    • Des clients transformés en ambassadeurs de votre marque`
  },
  {
    id: '03',
    name: 'Optimiser vos ressources',
    description: 'Maximisez votre efficacité grâce à l\'IA',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    content: `• IA générative personnalisée pour la vente et la relation client
    • IA prédictive pour optimiser vos stocks`
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const Services = () => {
  const ref = useRef(null)
  const navigate = useNavigate()
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedService, setSelectedService] = useState<(typeof challenges)[0] | null>(null)

  return (
    <motion.section 
      ref={ref} 
      className="bg-white py-16 px-4 sm:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedText delay={0.2} className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            Vos Enjeux
          </h2>
          <h3 className="text-4xl sm:text-5xl font-medium mb-8">
            Obtenir des nouveaux clients et fidéliser vos clients actuels
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Mettre en avant vos produits et services sur le web et les réseaux sociaux? 
            Je n'ai pas ni le temps ni les compétences, ça vous coûte trop cher pour un résultat discutable ? 
            Nous vous proposons des outils clés en main, à l'état de l'art de la technologie et avec les bonnes pratiques du Marketing Digital.
          </p>
        </AnimatedText>

        {/* Challenges Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          variants={containerVariants}
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedService(challenge)}
              className="cursor-pointer"
            >
              <div className="group relative overflow-hidden rounded-lg">
                {/* Image with overlay */}
                <div className="aspect-[4/3] relative">
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${challenge.image}')` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black/40"
                    whileHover={{ 
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col">
                  <div className="flex-1">
                    <span className="text-white/70 text-xs">{challenge.id}</span>
                    <motion.h4 
                      className="text-lg font-medium text-white mt-1 mb-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {challenge.name}
                    </motion.h4>
                    <motion.p 
                      className="text-white/90 leading-relaxed text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {challenge.description}
                    </motion.p>
                  </div>

                  {/* Plus icon */}
                  <motion.div 
                    className="flex justify-end"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm 
                        flex items-center justify-center"
                      whileHover={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        rotate: 90,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Plus className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/products')}
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 
              transition-all duration-300"
          >
            Découvrir nos solutions
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.name}
          description={selectedService.description}
          content={selectedService.content || ''}
        />
      )}
    </motion.section>
  )
}

export default Services
