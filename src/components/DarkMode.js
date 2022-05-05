import React from 'react';
import { useTheme, useThemeUpdate } from '../context/ThemeContext';

export function DarkMode() {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const themeStyles = {
    backgroundColor: darkTheme ? '#292828' : '#dadada',
    color: darkTheme ? '#E1E1E1' : '#2A2929'
  }

  return (
    <>
      <img
        className='mode-login'
        alt='Moon icon that activates dark mode'
        src={require('../icons/dark-mode.png')}
        onClick={toggleTheme}
      />
    </>
  )
}