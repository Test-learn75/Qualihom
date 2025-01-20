import { RefreshCcw, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Error502 = () => {
  const navigate = useNavigate()

  const handleRefresh = () => {
    window.location.reload()
  }

  const handleHome = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-7xl sm:text-9xl font-bold text-gray-200 mb-4">502</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Mauvaise Passerelle</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm sm:text-base">
          Nos serveurs ont un problème temporaire, veuillez réessayer dans un instant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRefresh}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <RefreshCcw className="w-4 h-4" />
            Réessayer
          </button>
          <button
            onClick={handleHome}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors"
          >
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error502
