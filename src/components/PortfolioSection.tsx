import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Filter } from 'lucide-react'
import PortfolioGrid from './PortfolioGrid'

const industries = [
  { id: 'all', label: 'Toutes Industries' },
  { id: 'restauration', label: 'Restauration' },
  { id: 'sante', label: 'Santé' },
  { id: 'mode', label: 'Mode' },
  { id: 'sport', label: 'Sport' },
  { id: 'alimentation', label: 'Alimentation' },
  { id: 'immobilier', label: 'Immobilier' }
]

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'vitrine', label: 'Vitrine' },
  { id: 'business', label: 'Business' },
  { id: 'ecommerce', label: 'E-Commerce' }
]

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedIndustry, setSelectedIndustry] = useState('all')

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-4">Nos Réalisations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques exemples de sites web que nous avons créés pour nos clients
          </p>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Filter className="w-4 h-4 text-gray-400" />
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-black text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-gray-200 text-gray-600 cursor-pointer border-none focus:ring-2 focus:ring-black/5"
              >
                {industries.map(industry => (
                  <option key={industry.id} value={industry.id}>
                    {industry.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedIndustry}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <PortfolioGrid 
              selectedIndustry={selectedIndustry} 
              selectedCategory={selectedCategory}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default PortfolioSection
