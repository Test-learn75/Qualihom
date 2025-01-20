import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

type ContactPreference = 'phone' | 'video' | 'inPerson' | 'any'

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
]

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    contactPreference: 'any' as ContactPreference
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking logic here
    console.log('Booking request:', {
      ...formData,
      date: selectedDate,
      time: selectedTime
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleContactPreferenceChange = (preference: ContactPreference) => {
    setFormData(prev => ({
      ...prev,
      contactPreference: preference
    }))
  }

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
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Réserver une démo</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column - Calendar and Time */}
              <div>
                <div className="calendar-container mb-4">
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    minDate={new Date()}
                    className="w-full rounded-lg border"
                  />
                </div>

                <div className="time-slots">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Horaires disponibles
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-4 rounded-lg text-sm ${
                          selectedTime === time
                            ? 'bg-black text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column - Contact Info */}
              <div className="space-y-4">
                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom et Prénom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-gray-300"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-gray-300"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-gray-300"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-gray-300"
                    required
                  />
                </div>

                {/* Contact Preference */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Préférence de contact
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 'phone', label: 'Téléphone' },
                      { value: 'video', label: 'Visio' },
                      { value: 'inPerson', label: 'Rendez-vous Physique' },
                      { value: 'any', label: 'Peu importe' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleContactPreferenceChange(option.value as ContactPreference)}
                        className={`py-2 px-4 rounded-lg text-sm border ${
                          formData.contactPreference === option.value
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!selectedTime || !selectedDate}
                  className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirmer le rendez-vous
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default DemoModal
