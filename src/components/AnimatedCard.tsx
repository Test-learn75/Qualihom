import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
}

const AnimatedCard = ({ children, delay = 0, className = '' }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className={`transform transition-shadow duration-300 hover:shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard
