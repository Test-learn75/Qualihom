import { LucideIcon } from 'lucide-react'

interface DifferentiatorCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const DifferentiatorCard = ({ icon: Icon, title, description }: DifferentiatorCardProps) => {
  return (
    <div className="group relative p-6 bg-white rounded-2xl border transition-all duration-300 hover:shadow-lg h-full flex items-center">
      {/* Icon container - fixed width, centered */}
      <div className="flex-shrink-0 mr-6">
        <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {/* Content container - takes remaining space */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default DifferentiatorCard
