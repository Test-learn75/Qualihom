import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  content: string
}

const ServiceModal = ({ isOpen, onClose, title, description, content }: ServiceModalProps) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
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
          className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="prose prose-gray max-w-none">
              {content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default ServiceModal
