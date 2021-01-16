import { createMuiTheme } from '@material-ui/core'

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#F2A057',
    },
    secondary: {
      main: '#fff',
    },
    text: {
      secondary: 'white',
    },
    background: {
      default: '#f3f3f3',
    },
  },
})
