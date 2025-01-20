import { ReactNode } from 'react'

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="p-4 sm:p-6 rounded-xl border hover:shadow-lg transition-shadow duration-300 flex items-center">
      {/* Icon container - fixed width, centered */}
      <div className="flex-shrink-0 mr-6">
        {icon}
      </div>

      {/* Content container - takes remaining space */}
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default Feature
