import { motion } from 'framer-motion'
import { Users, Target, Heart, Award } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import Contact from '../components/Contact'

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Nous exploitons les dernières technologies et méthodologies pour offrir des solutions toujours plus performantes.'
  },
  {
    icon: Heart,
    title: 'Engagement',
    description: 'Nous nous engageons pleinement dans la réussite de chaque projet client, avec passion et détermination.'
  },
  {
    icon: Users,
    title: 'Proximité',
    description: 'Nous privilégions une relation de confiance et de proximité avec nos clients pour mieux comprendre leurs besoins.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque aspect de notre travail, de la conception à la réalisation.'
  }
]

const team = [
  {
    name: 'William Tran',
    role: 'Fondateur & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Expert en transformation digitale avec plus de 15 ans d\'expérience dans le consulting et le développement web.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="À Propos"
        description="Découvrez Qualihom, votre partenaire en solutions digitales. Experts en création de sites web, gestion des réseaux sociaux, CRM et IA générative."
        canonical="https://qualihom.io/about"
      />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
      >
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400')`
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-medium mb-6 text-white">
            Notre Histoire
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Depuis 2023, Qualihom accompagne les entreprises dans leur transformation 
            digitale avec expertise et passion.
          </p>
        </motion.div>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 my-24"
      >
        <div className="text-center">
          <h2 className="text-3xl font-medium mb-6">Notre Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Notre mission est de démocratiser l'accès aux solutions digitales professionnelles 
            pour les entreprises de toutes tailles. Nous croyons que chaque entreprise mérite 
            d'avoir accès aux meilleurs outils digitaux pour réussir dans l'ère numérique. 
            C'est pourquoi nous proposons des solutions innovantes, accessibles et sur-mesure 
            qui répondent aux besoins spécifiques de chaque client.
          </p>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 mb-24"
      >
        <h2 className="text-3xl font-medium text-center mb-12">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <motion.div 
                className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/5"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <value.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-medium mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 mb-24"
      >
        <h2 className="text-3xl font-medium text-center mb-12">Notre Équipe</h2>
        <div className="flex justify-center">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="text-center max-w-sm"
            >
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-medium mb-1">{member.name}</h3>
              <div className="text-gray-600 mb-2">{member.role}</div>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div 
        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        whileInView={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-white py-24 mb-24"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              { number: "50+", label: "Clients Satisfaits" },
              { number: "100+", label: "Projets Réalisés" },
              { number: "1", label: "Année d'Innovation" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="text-4xl font-bold mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default About
