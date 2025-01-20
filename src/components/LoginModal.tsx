import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await login(email, password)
      onClose()
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-4"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Form content */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Connexion</h2>
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-gray-300"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-gray-300"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2">Se souvenir de moi</span>
                </label>
                <a href="#" className="text-black hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Se connecter
              </button>

              <p className="text-center text-sm text-gray-600">
                Pas encore de compte ?{' '}
                <a href="#" className="text-black hover:underline">
                  S'inscrire
                </a>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default LoginModal
