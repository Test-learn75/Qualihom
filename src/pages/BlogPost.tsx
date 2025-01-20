import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react'
import Contact from '../components/Contact'
import SEO from '../components/SEO'

// ... (previous imports and helper functions remain the same)

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = getBlogPost(slug || '')

  const seoSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      image: post.author.avatar
    },
    publisher: {
      '@type': 'Organization',
      name: 'Qualihom',
      logo: {
        '@type': 'ImageObject',
        url: 'https://qualihom.io/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://qualihom.io/blog/${slug}`
    }
  }

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        type="article"
        image={post.image}
        imageAlt={post.title}
        publishedTime={post.publishedAt}
        modifiedTime={post.modifiedAt}
        author={post.author.name}
        schema={seoSchema}
      />
      
      {/* Rest of the component remains the same */}
    </>
  )
}

export default BlogPost
