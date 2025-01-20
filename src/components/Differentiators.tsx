import { Target, Rocket, CheckCircle } from 'lucide-react';
import DifferentiatorCard from './DifferentiatorCard';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const differentiators = [
  {
    icon: Target,
    title: 'Impactant',
    description: 'Notre but est de vous apporter un retour sur investissement rapide.'
  },
  {
    icon: Rocket,
    title: 'Innovation Continue',
    description: 'Nous faisons de la veille, testons et adoptons les dernières innovations technologiques.'
  },
  {
    icon: CheckCircle,
    title: 'Fiabilité',
    description: 'Nous assurons un suivi constant pour garantir des résultats fiables et durables.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const Differentiators = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={ref} 
      className="bg-gray-50 py-16 px-4 sm:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-12"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-sm uppercase tracking-wider text-gray-500 mb-4"
            variants={itemVariants}
          >
            Nos éléments de différenciation
          </motion.h2>
          <motion.h3 
            className="text-4xl sm:text-5xl font-medium mb-8"
            variants={itemVariants}
          >
            Ce qui nous rend uniques
          </motion.h3>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <DifferentiatorCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Differentiators;
