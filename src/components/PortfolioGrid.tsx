import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ImageOff } from 'lucide-react'
import IndustryCarousel from './IndustryCarousel'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
}

export const ImageWithFallback = ({ src, alt, className }: ImageWithFallbackProps) => {
  const [error, setError] = useState(false)

  return error ? (
    <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
      <ImageOff className="w-8 h-8 text-gray-400" />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  )
}

const industries = [
  {
    id: 'restauration',
    name: 'Restauration',
    projects: [
      {
        id: '1',
        title: 'Restaurant Le Gourmet',
        description: 'Site vitrine avec réservation en ligne',
        category: 'vitrine',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: '2',
        title: 'Bistrot Parisien',
        description: 'Plateforme de commande en ligne',
        category: 'ecommerce',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'sante',
    name: 'Santé',
    projects: [
      {
        id: '3',
        title: 'Cabinet Médical',
        description: 'Site web et prise de rendez-vous',
        category: 'vitrine',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: '4',
        title: 'Centre de bien-être',
        description: 'Plateforme de gestion des clients',
        category: 'business',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'mode',
    name: 'Mode',
    projects: [
      {
        id: '5',
        title: 'Boutique Mode',
        description: 'E-commerce de vêtements',
        category: 'ecommerce',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: '6',
        title: 'Accessoires Luxe',
        description: 'Site vitrine et catalogue',
        category: 'vitrine',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'sport',
    name: 'Sport',
    projects: [
      {
        id: '7',
        title: 'Club de fitness',
        description: 'Application de réservation',
        category: 'business',
        image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: '8',
        title: 'École de danse',
        description: 'Plateforme de cours en ligne',
        category: 'business',
        image: 'https://images.unsplash.com/photo-1508215885820-4585e56135c8?w=800&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'alimentation',
    name: 'Alimentation',
    projects: [
      {
        id: '9',
        title: 'Épicerie Fine',
        description: 'Boutique en ligne de produits gastronomiques',
        category: 'ecommerce',
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: '10',
        title: 'Boulangerie Artisanale',
        description: 'Site vitrine avec commande en ligne',
        category: 'vitrine',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'immobilier',
    name: 'Immobilier',
    projects: [
      {
        id: '11',
        title: 'Agence Immobilière Premium',
        description: 'Portail immobilier avec visite virtuelle',
        category: 'business',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80'
      },
      {
        id: '12',
        title: 'Promoteur Immobilier',
        description: 'Site vitrine de programmes neufs',
        category: 'vitrine',
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&auto=format&fit=crop&q=80'
      }
    ]
  }
]

interface PortfolioGridProps {
  selectedIndustry?: string
  selectedCategory?: string
}

const PortfolioGrid = ({ selectedIndustry, selectedCategory }: PortfolioGridProps) => {
  const [filteredIndustries, setFilteredIndustries] = useState(industries)

  useEffect(() => {
    let filtered = industries

    // Filter by industry if selected
    if (selectedIndustry && selectedIndustry !== 'all') {
      filtered = filtered.filter(industry => industry.id === selectedIndustry)
    }

    // Filter by category if selected
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.map(industry => ({
        ...industry,
        projects: industry.projects.filter(project => project.category === selectedCategory)
      })).filter(industry => industry.projects.length > 0)
    }

    setFilteredIndustries(filtered)
  }, [selectedIndustry, selectedCategory])

  // Split industries into rows of 3
  const rows = []
  for (let i = 0; i < filteredIndustries.length; i += 3) {
    rows.push(filteredIndustries.slice(i, i + 3))
  }

  if (filteredIndustries.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <p className="text-gray-500">Aucun projet ne correspond aux critères sélectionnés.</p>
      </motion.div>
    )
  }

  return (
    <div className="space-y-16">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {row.map(industry => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-medium">{industry.name}</h3>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {/* Carousel for each industry */}
                  {industry.projects.map((project, index) => (
                    <div
                      key={project.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === 0 ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="relative h-full">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-white">
                            <h4 className="text-xl font-medium mb-2 text-center">
                              {project.title}
                            </h4>
                            <p className="text-white/90 mb-4 text-center">
                              {project.description}
                            </p>
                            <span className="px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default PortfolioGrid
