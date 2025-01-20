import TypewriterText from './TypewriterText'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 relative overflow-hidden">
      {/* Background image with overlay */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?q=80&w=3131&auto=format&fit=crop')`
        }}
        role="img"
        aria-label="Image de fond représentant l'innovation digitale"
      >
        <motion.div 
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Made in France text */}
      <motion.div 
        className="absolute left-4 sm:left-8 bottom-8 text-sm text-gray-300 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div>Conçu en France</div>
      </motion.div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center pt-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs sm:text-sm uppercase tracking-wider mb-4 text-gray-200"
        >
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-medium mb-6 sm:mb-8 leading-tight text-white"
        >
          Transformons vos ambitions business en{' '}
          <TypewriterText />
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto"
        >
          Obtenez des résultats immédiats, impactants et durables sur la croissance de votre chiffre d'affaires.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-white/30 rounded hover:border-white/60 transition-colors text-white backdrop-blur-sm"
            onClick={() => navigate('/products')}
            aria-label="Découvrir nos solutions digitales"
          >
            DÉCOUVRIR NOS SOLUTIONS
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <motion.div 
            className="w-1 h-1 bg-white rounded-full"
            animate={{ 
              y: [0, 20],
              opacity: [1, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
