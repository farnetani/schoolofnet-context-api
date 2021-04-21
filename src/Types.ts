import { ReactNode } from 'react'

export interface ThemePropsData {
  theme: string
  children: ReactNode
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}
