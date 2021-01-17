import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
/** Components */
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { defaultLayoutRouters } from '../../router/modules/index'
import logo from '../../assets/images/logo/logo.png'

/** MaxWidth of appBar and content -> it makes content position center */
const maxWidth = 1000

/** Style of page with material ui */
const useStyles = makeStyles(theme => ({
  header: {
    width: '100%',
    background: theme.palette.primary.main,
  },
  appBar: {
    maxWidth,
    margin: theme.spacing(0, 'auto'),
  },
  toolBar: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(0),
  },
  menuAppBar: {
    maxWidth: maxWidth + 25,
    margin: theme.spacing(0, 'auto'),
  },
  logo: {
    width: 36,
  },
  title: {
    flexGrow: 1,
    width: '100%',
    display: 'block',
    fontWeight: 600,
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
    },
  },
  loginButton: {
    color: theme.palette.text.secondary,
  },
  menuIcon: {
    fontWeight: 600,
  },
  linkButton: {
    fontSize: 16,
    fontWeight: 600,
  },
  content: {
    maxWidth,
    margin: '0px auto',
    padding: theme.spacing(6, 0, 0),
  },
}))

const DefaultLayout: React.FC = props => {
  /** Props */
  const { children } = props

  /** Router (history) */
  const history = useHistory()

  /** States */
  const classes = useStyles()
  /* @TODO: Change to config title */
  const title = useState('Nekobooks'.toUpperCase())

  const handleMenuMove = (name: string) => {
    const found = defaultLayoutRouters.find(router => router.name.toLowerCase() === name.toLowerCase())
    if (!found || !found.path) {
      return
    }

    history.push(found.path.toString())
  }

  return (
    <div>
      <div
        className={classes.header}
      >
        <AppBar
          className={classes.appBar}
          elevation={0}
          position="relative"
          variant="elevation"
        >
          <Toolbar
            className={classes.toolBar}
          >
            <Typography className={classes.title} variant="h5" noWrap onClick={() => history.push('/')}>
              <img className={classes.logo} src={logo} alt="logo" />
              {title}
            </Typography>
            <Button color="inherit" variant="outlined" disableElevation onClick={event => console.log(event)}>
              Login
            </Button>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => { console.log('Account has been clicked') }}
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <AppBar
          className={classes.menuAppBar}
          elevation={0}
          position="relative"
          variant="elevation"
        >
          <Toolbar
            className={classes.toolBar}
            variant="dense"
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              className={classes.menuIcon}
            >
              <MenuIcon />
            </IconButton>
            <Button className={classes.linkButton} color="inherit" onClick={() => handleMenuMove('Books')}>
              New
            </Button>
            <Button className={classes.linkButton} color="inherit">
              Best
            </Button>
            <Button className={classes.linkButton} color="inherit">
              Created
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <main
        className={classes.content}
      >
        {children}
      </main>
    </div>
  )
}

export default DefaultLayout
