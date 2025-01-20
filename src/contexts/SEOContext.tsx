import { createContext, useContext, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProviderProps {
  children: ReactNode
}

interface SEOContextType {
  setSEO: (props: SEOProps) => void
}

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  keywords?: string[]
}

const SEOContext = createContext<SEOContextType | undefined>(undefined)

export function SEOProvider({ children }: SEOProviderProps) {
  const setSEO = ({
    title,
    description,
    canonical = 'https://qualihom.io',
    image = 'https://qualihom.io/og-image.jpg',
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    keywords = []
  }: SEOProps) => {
    const fullTitle = title ? `${title} | Qualihom` : 'Qualihom - Solutions Digitales pour Entreprises'
    const defaultDescription = 'Transformez vos ambitions business en réalité avec nos solutions digitales: site web, réseaux sociaux, CRM et IA générative.'
    const keywordsString = keywords.join(', ')

    return (
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="author" content={author || 'Qualihom'} />
        {keywords.length > 0 && <meta name="keywords" content={keywordsString} />}
        <link rel="canonical" href={canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="Qualihom" />
        {publishedTime && <meta property="article:published_time" content={publishedTime} />}
        {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        {author && <meta property="article:author" content={author} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description || defaultDescription} />
        <meta name="twitter:image" content={image} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": type === 'article' ? 'Article' : 'Organization',
            "name": "Qualihom",
            "url": canonical,
            "logo": "https://qualihom.io/logo.png",
            "description": description || defaultDescription,
            ...(type === 'article' && {
              "author": {
                "@type": "Person",
                "name": author || "Qualihom"
              },
              "datePublished": publishedTime,
              "dateModified": modifiedTime
            })
          })}
        </script>
      </Helmet>
    )
  }

  return (
    <SEOContext.Provider value={{ setSEO }}>
      {children}
    </SEOContext.Provider>
  )
}

export function useSEO() {
  const context = useContext(SEOContext)
  if (context === undefined) {
    throw new Error('useSEO must be used within a SEOProvider')
  }
  return context
}
