import { createContext, useContext, useState, ReactNode } from 'react'

interface PreviewModeContextType {
  isPreviewMode: boolean
  togglePreviewMode: () => void
}

const PreviewModeContext = createContext<PreviewModeContextType | undefined>(undefined)

export function PreviewModeProvider({ children }: { children: ReactNode }) {
  const [isPreviewMode, setIsPreviewMode] = useState(true)

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode)
  }

  return (
    <PreviewModeContext.Provider value={{ isPreviewMode, togglePreviewMode }}>
      {children}
    </PreviewModeContext.Provider>
  )
}

export function usePreviewMode() {
  const context = useContext(PreviewModeContext)
  if (context === undefined) {
    throw new Error('usePreviewMode must be used within a PreviewModeProvider')
  }
  return context
}
