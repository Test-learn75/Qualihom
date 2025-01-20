import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { SEOProvider } from './contexts/SEOContext'
import { AuthProvider } from './providers/AuthProvider'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <SEOProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </SEOProvider>
    </HelmetProvider>
  </StrictMode>,
)
