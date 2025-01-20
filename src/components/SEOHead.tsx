import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  type?: 'website' | 'article' | 'product'
  image?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
  jsonLd?: Record<string, any>
}

const SEOHead = ({ 
  title, 
  description, 
  canonical = 'https://qualihom.io', 
  type = 'website',
  image = 'https://qualihom.io/og-image.jpg',
  publishedTime,
  modifiedTime,
  author,
  jsonLd 
}: SEOHeadProps) => {
  const fullTitle = `${title} | Qualihom`
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Qualihom",
    "url": "https://qualihom.io",
    "logo": "https://qualihom.io/logo.png",
    "sameAs": [
      "https://twitter.com/qualihom",
      "https://www.linkedin.com/company/qualihom",
      "https://www.facebook.com/qualihom"
    ]
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author || 'Qualihom'} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Qualihom" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@qualihom" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta name="csrf-token" content="{{ csrf_token() }}" />
    </Helmet>
  )
}

export default SEOHead
