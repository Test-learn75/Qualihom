import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

interface Feature {
  title: string
  description: string
  image: string
}

interface FeatureCarouselProps {
  features: Feature[]
}

const FeatureCarousel = ({ features }: FeatureCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length)
      }, 5000) // Change slide every 5 seconds
    }

    return () => clearInterval(interval)
  }, [isPlaying, features.length])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Feature Display */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${features[currentIndex].image}')` }}
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center p-8 text-white">
              <div className="max-w-2xl mx-auto text-center w-full">
                <motion.h3 
                  className="text-3xl font-medium mb-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {features[currentIndex].title}
                </motion.h3>
                <motion.p 
                  className="text-white/90 text-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {features[currentIndex].description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 bottom-4 flex justify-center items-center gap-4 z-10">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors ml-2"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </div>
  )
}

export default FeatureCarousel
