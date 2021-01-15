import { createMuiTheme } from '@material-ui/core'

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#696ffb',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#f3f3f3',
    },
  },
})
