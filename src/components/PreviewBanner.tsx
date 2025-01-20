import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'
import { usePreviewMode } from '../contexts/PreviewModeContext'

const PreviewBanner = () => {
  const { isPreviewMode, togglePreviewMode } = usePreviewMode()

  if (!isPreviewMode) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500 to-amber-400 text-black py-2 px-4 flex items-center justify-center gap-4"
      >
        <span className="text-sm font-medium">
          Mode Aperçu — Ceci est une version de prévisualisation du site
        </span>
        <button
          onClick={togglePreviewMode}
          className="p-1 rounded hover:bg-black/10 transition-colors"
          aria-label="Toggle preview mode"
        >
          <EyeOff className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export const PreviewToggle = () => {
  const { isPreviewMode, togglePreviewMode } = usePreviewMode()

  if (isPreviewMode) return null

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={togglePreviewMode}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-amber-400 text-black shadow-lg hover:bg-amber-500 transition-colors"
      aria-label="Enable preview mode"
    >
      <Eye className="w-5 h-5" />
    </motion.button>
  )
}

export default PreviewBanner
