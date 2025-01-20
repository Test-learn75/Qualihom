import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Tag, Clock, User, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'

// Sample blog data structure
interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
  }
  category: string
  readTime: number
  publishedAt: string
  image: string
  slug: string
}

// Sample categories
const categories = [
  'Tous',
  'Réseaux Sociaux',
  'CRM',
  'IA',
  'E-commerce',
  'SEO'
]

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Comment l\'IA révolutionne le marketing digital en 2024',
    excerpt: 'Découvrez comment l\'intelligence artificielle transforme les stratégies marketing et offre de nouvelles opportunités aux entreprises.',
    content: '',
    author: {
      name: 'William Tran',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    },
    category: 'IA',
    readTime: 5,
    publishedAt: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    slug: 'ia-revolution-marketing-digital-2024'
  },
  {
    id: '2',
    title: 'Les meilleures pratiques SEO pour 2024',
    excerpt: 'Un guide complet des techniques SEO les plus efficaces pour améliorer votre visibilité sur les moteurs de recherche.',
    content: '',
    author: {
      name: 'Sarah Martin',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
    },
    category: 'SEO',
    readTime: 8,
    publishedAt: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800',
    slug: 'meilleures-pratiques-seo-2024'
  },
  {
    id: '3',
    title: 'Comment créer une stratégie social media efficace',
    excerpt: 'Les étapes clés pour développer une présence impactante sur les réseaux sociaux et engager votre audience.',
    content: '',
    author: {
      name: 'Thomas Dubois',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    category: 'Réseaux Sociaux',
    readTime: 6,
    publishedAt: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1611162618758-2a29a995354b?w=800',
    slug: 'strategie-social-media-efficace'
  }
]

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-medium mb-6"
          >
            Notre Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Découvrez nos derniers articles et insights sur le marketing digital,
            le développement web et l'innovation technologique.
          </motion.p>
        </div>

        {/* Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search input */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative flex-grow"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black/5 focus:border-gray-300"
              />
            </motion.div>
          </div>

          {/* Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link 
                  to={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="h-full flex flex-col border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <motion.img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-4 left-4"
                      >
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <motion.h2 
                        className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {post.title}
                      </motion.h2>
                      <p className="text-gray-600 mb-6 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <motion.div 
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span>{post.author.name}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-4"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} min</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default BlogList
