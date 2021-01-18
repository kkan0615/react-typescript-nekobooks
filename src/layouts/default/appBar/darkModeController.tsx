import React, { useContext, useState } from 'react'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import { LocalStorageKeys } from '../../../interfaces/localStorage'
import { ThemeContext } from '../../../themes/ThemeProvider'

const DarkModeController: React.FC = () => {
  /*
  * Current theme storaged in localstorage
  * It can be changed in handdleThemeController function
  */
  const [currentTheme, setCurrentThemeState] = useState(localStorage.getItem('savedCurrentTheme' as LocalStorageKeys))
  const setCurrentTheme = useContext(ThemeContext)

  const handleThemeController = () => {
    // @TODO: Merge to one function, similar functions are not required
    if (!currentTheme || currentTheme === 'darkTheme') {
      setCurrentThemeState('lightTheme')
      setCurrentTheme('lightTheme')
    } else {
      setCurrentThemeState('darkTheme')
      setCurrentTheme('darkTheme')
    }
  }

  return (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      onClick={handleThemeController}
    >
      <Icon>{currentTheme === 'lightTheme' ? 'dark_mode' : 'light_mode'}</Icon>
    </IconButton>
  )
}

export default DarkModeController
