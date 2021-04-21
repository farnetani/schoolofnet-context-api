import React from 'react'
import { ThemeContext } from './ThemeContext'
import { ButtonProps } from './Types'

const ThemeButton: React.FC<ButtonProps> = ({ ...props }) => {
  // console.log('props', props)
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div>
          <p>{JSON.stringify(theme.theme)}</p>
          <button
            {...props}
            style={{
              background: theme.theme === 'light' ? '#fff' : '#f1f'
            }}
          >
            {props.label}
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeButton
