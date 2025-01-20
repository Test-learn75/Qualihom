import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Share2, BarChart2, BrainCircuit } from 'lucide-react'

interface Product {
  id: string
  title: string
  icon: typeof Globe
  description: string
  image: string
}

const products: Product[] = [
  {
    id: 'website',
    title: 'Site Web',
    icon: Globe,
    description: 'La création d\'un site web professionnel est essentielle pour établir votre présence en ligne. Notre solution offre un design moderne, une expérience utilisateur optimale et une parfaite compatibilité mobile.',
    image: '/images/website-preview.jpg'
  },
  {
    id: 'social',
    title: 'Réseaux Sociaux',
    icon: Share2,
    description: 'Gérez efficacement votre présence sur les réseaux sociaux avec notre solution complète de gestion et d\'automatisation des publications.',
    image: '/images/social-preview.jpg'
  },
  {
    id: 'crm',
    title: 'CRM',
    icon: BarChart2,
    description: 'Notre CRM vous permet de centraliser et d\'optimiser la gestion de vos relations clients, avec des outils puissants d\'analyse et d\'automatisation.',
    image: '/images/crm-preview.jpg'
  },
  {
    id: 'ai',
    title: 'IA Générative',
    icon: BrainCircuit,
    description: 'Exploitez la puissance de l\'intelligence artificielle pour automatiser vos tâches et générer du contenu pertinent pour votre entreprise.',
    image: '/images/ai-preview.jpg'
  }
]

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0])
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4">
      {/* Left column - Product list */}
      <div className="space-y-6">
        <h2 className="text-4xl font-medium mb-8">Nos Solutions</h2>
        <div className="space-y-4">
          {products.map((product) => {
            const isSelected = selectedProduct.id === product.id
            const isHovered = hoveredId === product.id

            return (
              <motion.div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProduct(product)}
                className={`relative cursor-pointer p-4 transition-colors ${
                  isSelected ? 'text-black' : 'text-gray-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <product.icon className={`w-6 h-6 ${isSelected ? 'text-black' : 'text-gray-400'}`} />
                  <span className="text-2xl font-medium">{product.title}</span>
                </div>

                {/* Indicator line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-black"
                  initial={false}
                  animate={{
                    opacity: isSelected || isHovered ? 1 : 0,
                    height: isSelected ? '100%' : '0%'
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut'
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Right column - Product details */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-medium">{selectedProduct.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {selectedProduct.description}
            </p>
            <motion.div 
              className="aspect-video rounded-xl overflow-hidden bg-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ProductList
