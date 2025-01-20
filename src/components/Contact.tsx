import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact-section" ref={ref} className="bg-white py-24 px-4 sm:px-8">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            Contactez-nous
          </h2>
          <h3 className="text-4xl sm:text-5xl font-medium mb-8">
            Parlons de vos projets
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group p-8 rounded-2xl border hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">Email</h4>
            <a 
              href="mailto:contact@resonance.fr" 
              className="inline-flex items-center text-black hover:gap-2 transition-all duration-300"
            >
              contact@qualihom.io
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group p-8 rounded-2xl border hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">Téléphone</h4>
            <a 
              href="tel:+33123456789" 
              className="inline-flex items-center text-black hover:gap-2 transition-all duration-300"
            >
              +33 1 23 45 67 89
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
