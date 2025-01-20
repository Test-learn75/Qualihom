import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID") // Replace with your actual EmailJS user ID

const BetaForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    try {
      // Store in localStorage
      const betaTesters = JSON.parse(localStorage.getItem('betaTesters') || '[]')
      betaTesters.push(formData)
      localStorage.setItem('betaTesters', JSON.stringify(betaTesters))

      // Send email using EmailJS
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          to_email: "william.tran@qualihom.io",
          cc_email: formData.email,
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.useCase,
          reply_to: formData.email
        }
      )

      setSubmitted(true)
    } catch (error) {
      console.error('Error sending email:', error)
      setError("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8 max-w-md mx-auto"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-medium mb-2">Merci de votre intérêt !</h3>
        <p className="text-gray-600">
          Nous avons bien reçu votre demande pour rejoindre notre programme bêta.
          Un email de confirmation vous a été envoyé.
          Notre équipe vous contactera très prochainement.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium mb-2">Rejoignez notre programme bêta</h2>
        <p className="text-gray-600">
          Participez à l'évolution de notre IA et bénéficiez d'un accès privilégié à nos dernières innovations.
        </p>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 text-red-600"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-colors"
              placeholder="Jean Dupont"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email professionnel
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-colors"
              placeholder="jean@entreprise.fr"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-colors"
            placeholder="Nom de votre entreprise"
          />
        </div>

        <div>
          <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-1">
            Cas d'usage envisagé
          </label>
          <textarea
            id="useCase"
            name="useCase"
            required
            value={formData.useCase}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-colors"
            placeholder="Décrivez comment vous souhaitez utiliser notre IA dans votre entreprise..."
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!formData.email || !formData.name || !formData.company || !formData.useCase}
          >
            Postuler au programme bêta
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
          </p>
        </div>
      </form>
    </motion.div>
  )
}

export default BetaForm
