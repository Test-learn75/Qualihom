import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title?: string
  description?: string
  type?: 'website' | 'article' | 'product'
  image?: string
  imageAlt?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
  schema?: Record<string, any>
}

const SEO = ({
  title,
  description = 'Solutions digitales pour entreprises: site web, réseaux sociaux, CRM et IA générative. Transformez vos ambitions business en réalité.',
  type = 'website',
  image = 'https://qualihom.io/og-image.jpg',
  imageAlt = 'Qualihom - Solutions Digitales',
  publishedTime,
  modifiedTime,
  author = 'Qualihom',
  schema
}: SEOProps) => {
  const location = useLocation()
  const fullTitle = title ? `${title} | Qualihom` : 'Qualihom - Solutions Digitales pour Entreprises'
  const canonicalUrl = `https://qualihom.io${location.pathname}`

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Qualihom',
    url: 'https://qualihom.io',
    logo: 'https://qualihom.io/logo.png',
    description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR'
    },
    sameAs: [
      'https://twitter.com/qualihom',
      'https://www.linkedin.com/company/qualihom',
      'https://www.facebook.com/qualihom'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-1-23-45-67-89',
      contactType: 'customer service',
      availableLanguage: ['French', 'English']
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: location.pathname.split('/').filter(Boolean).map((path, index, array) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
      item: `https://qualihom.io/${array.slice(0, index + 1).join('/')}`
    }))
  }

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="Qualihom" />
      <meta property="og:locale" content="fr_FR" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@qualihom" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Additional Meta Tags for SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  )
}

export default SEO
