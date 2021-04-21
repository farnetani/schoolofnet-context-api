import React, { useState } from 'react'
import ThemeButton from './ThemeButton'
import { ThemeProvider } from './ThemeContext'

export default function AppTheme() {
  const [theme, setTheme] = useState('light')

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeButton label="Change Theme" onClick={handleChangeTheme} />
    </ThemeProvider>
  )
}
