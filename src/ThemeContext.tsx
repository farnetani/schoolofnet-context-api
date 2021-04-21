import { createContext } from 'react'
import { ThemePropsData } from './Types'

import './ThemeButton.css'

const ThemeContext = createContext<ThemePropsData>({} as ThemePropsData)

const ThemeProvider = ({ theme, children }: ThemePropsData): JSX.Element => {
  return (
    <ThemeContext.Provider value={{ theme: theme, children }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
