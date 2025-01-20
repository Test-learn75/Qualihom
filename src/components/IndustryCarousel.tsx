import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './PortfolioGrid'

interface Project {
  id: string
  title: string
  description: string
  image: string
}

interface IndustryCarouselProps {
  projects: Project[]
}

const IndustryCarousel = ({ projects }: IndustryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Image container with zoom animation */}
          <motion.div
            className="relative w-full h-full overflow-hidden"
            whileHover="hover"
            initial="initial"
            animate="initial"
          >
            {/* Image with zoom effect */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              variants={{
                initial: { scale: 1 },
                hover: { 
                  scale: 1.1,
                  transition: {
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                    yoyo: 1, // This makes the animation alternate between scale up and down
                    repeat: Infinity,
                    repeatDelay: 1 // Add a delay between repetitions
                  }
                }
              }}
            >
              <ImageWithFallback
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Overlay with project info */}
            <motion.div 
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              variants={{
                initial: { opacity: 0 },
                hover: { 
                  opacity: 1,
                  transition: { duration: 0.3 }
                }
              }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.h4 
                  className="text-xl font-medium text-white mb-2"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { 
                      y: 0, 
                      opacity: 1,
                      transition: { duration: 0.3, delay: 0.1 }
                    }
                  }}
                >
                  {projects[currentIndex].title}
                </motion.h4>
                <motion.p 
                  className="text-white/80"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { 
                      y: 0, 
                      opacity: 1,
                      transition: { duration: 0.3, delay: 0.2 }
                    }
                  }}
                >
                  {projects[currentIndex].description}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default IndustryCarousel
