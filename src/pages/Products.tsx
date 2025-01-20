import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ProductList from '../components/ProductList'

const Products = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image avec overlay */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?q=80&w=3131&auto=format&fit=crop')"
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-medium text-white mb-6"
            >
              Nos Solutions Digitales
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            >
              Découvrez notre gamme complète de solutions digitales conçues pour propulser votre entreprise vers le succès.
            </motion.p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24">
          <ProductList />
        </section>
      </div>
    </PageTransition>
  )
}

export default Products
