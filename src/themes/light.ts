import { createMuiTheme } from '@material-ui/core'

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#F2A057',
    },
    secondary: {
      main: '#828282',
    },
    text: {
      secondary: 'white',
    },
    background: {
      default: '#f3f3f3',
    },
  },
})
