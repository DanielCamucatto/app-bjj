'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'lofi',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('lofi')

  const toggleTheme = () => {
    const newTheme = theme === 'lofi' ? 'black' : 'lofi'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
