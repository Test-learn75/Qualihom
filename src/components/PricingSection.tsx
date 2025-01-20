import { Check } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const socialPlans = [
  {
    name: 'Gratuit',
    description: 'Pour débuter sur les réseaux sociaux',
    price: 0,
    features: [
      'Gestion d\'un réseau social',
      'Publication de contenu',
      'Analytics de base',
      'Support email',
      'Planification de 10 posts/mois',
      'Suggestions de hashtags',
      'Interface intuitive',
      'Guide de démarrage'
    ]
  },
  {
    name: 'Pro',
    description: 'Pour une gestion professionnelle de vos réseaux',
    price: 25,
    popular: true,
    features: [
      'Tous les réseaux sociaux',
      'Publications illimitées',
      'Analytics avancés',
      'Support prioritaire',
      'Planification illimitée',
      'IA pour la création de contenu',
      'Gestion des commentaires',
      'Rapports personnalisés',
      'Multi-utilisateurs',
      'Export des données',
      'Intégration CRM',
      'Formation personnalisée'
    ]
  }
]

const crmPlans = [
  {
    name: 'Gratuit',
    description: 'Pour débuter avec la gestion de contacts',
    price: 0,
    features: [
      'Jusqu\'à 100 contacts',
      'Gestion de base des contacts',
      'Notes et historique',
      'Support email',
      'Interface intuitive',
      'Applications mobiles',
      'Sécurité des données',
      'Mises à jour régulières'
    ]
  },
  {
    name: 'Pro',
    description: 'Pour une gestion professionnelle de la relation client',
    price: 25,
    popular: true,
    features: [
      'Contacts illimités',
      'Pipeline de vente avancé',
      'Automatisation des tâches',
      'Support prioritaire 24/7',
      'Analyses et rapports avancés',
      'Intégration emails et agenda',
      'Multi-utilisateurs',
      'Personnalisation complète',
      'API développeur',
      'Sauvegarde automatique',
      'Formation personnalisée',
      'Gestion des documents'
    ]
  }
]

const websitePlans = [
  {
    name: 'Vitrine',
    description: 'Pour mettre en avant ses produits et services',
    price: 60,
    features: [
      'Template à personnaliser',
      'Page d\'accueil',
      'Pages produits',
      'Responsive design',
      'SSL gratuit',
      'Support email',
      'Référencement SEO au démarrage',
      'Statistiques de navigation',
      'Hébergement inclus',
      'Nom de domaine offert',
    ]
  },
  {
    name: 'Business',
    description: 'Pour obtenir des rendez-vous et/ou des réservations',
    price: 90,
    popular: true,
    features: [
      'Template à personnaliser',
      'Page d\'accueil',
      'Pages produits',
      'Click & Collect',
      'Système de réservation',
      'Responsive design',
      'SSL gratuit',
      'Support email',
      'Référencement SEO au démarrage',
      'Statistiques de navigation',
      'Hébergement inclus',
      'Nom de domaine offert',
    ]
  },
  {
    name: 'E-Commerce',
    description: 'Pour la vente en ligne',
    price: 120,
    features: [
      'Boutique en ligne complète',
      'Template à personnaliser',
      'Page d\'accueil',
      'Pages produits',
      'Click & Collect',
      'Système de réservation',
      'Paiement en ligne sécurisé',
      'SSL gratuit',
      'Support email',
      'Référencement SEO au démarrage',
      'Statistiques de navigation',
      'Hébergement inclus',
      'Nom de domaine offert',
    ]
  },
  {
    name: 'Sur-Mesure',
    description: 'Vous avez une maquette, une photo ou une idée',
    price: 90,
    custom: true,
    features: [
      'Fonctionnalités personnalisées',
      'Architecture personnalisée',
      'Intégrations sur mesure',
      'Design unique',
      'Évolutions planifiées'
    ]
  }
]

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const location = useLocation()
  const isSocialMediaPage = location.pathname === '/products/social-media'
  const isCRMPage = location.pathname === '/products/crm'
  const plans = isCRMPage ? crmPlans : isSocialMediaPage ? socialPlans : websitePlans
  
  // Calculate price with annual discount (1 month free)
  const calculatePrice = (basePrice: number, isCustom: boolean = false) => {
    if (isAnnual) {
      // For annual plans, multiply by 11 instead of 12 (one month free)
      return isCustom ? basePrice * 11 : basePrice * 11
    }
    return basePrice
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-medium mb-4"
          >
            Nos Offres
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mb-8"
          >
            Choisissez l'offre qui correspond le mieux à vos besoins
          </motion.p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-2">
            <span className={`text-sm ${!isAnnual ? 'text-black' : 'text-gray-500'}`}>Mensuel</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-black' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm flex items-center gap-1 ${isAnnual ? 'text-black' : 'text-gray-500'}`}>
              Annuel
              <span className="text-xs text-green-600">(1 mois offert)</span>
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className={`grid grid-cols-1 ${isCRMPage || isSocialMediaPage ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-2 lg:grid-cols-4'} gap-8 mx-auto`}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 bg-white rounded-2xl border ${
                plan.popular ? 'border-black' : 'border-gray-200'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                    Plus populaire
                  </span>
                </div>
              )}

              {/* Card header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm min-h-[40px]">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                {plan.custom ? (
                  <div>
                    <div className="text-2xl font-bold mb-1">
                      à partir de {calculatePrice(plan.price, true)}€
                    </div>
                    <div className="text-sm text-gray-600">
                      {isAnnual ? '/an' : '/mois'}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl font-bold mb-1">
                      {plan.price === 0 ? (
                        'Gratuit'
                      ) : (
                        `${calculatePrice(plan.price)}€`
                      )}
                    </div>
                    {plan.price > 0 && (
                      <div className="text-sm text-gray-600">
                        {isAnnual ? '/an' : '/mois'}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Features list */}
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button - now aligned at bottom */}
              <button
                className={`w-full py-2 px-4 rounded-lg transition-colors mt-auto ${
                  plan.custom
                    ? 'bg-white border border-black hover:bg-gray-50'
                    : plan.popular
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {plan.price === 0 ? 'Commencer gratuitement' : (plan.custom ? 'Demander un devis' : 'Sélectionner')}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-500 mt-8">
          Tous nos prix sont HT. TVA applicable en sus.
        </div>
      </div>
    </section>
  )
}

export default PricingSection
