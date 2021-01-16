import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'

/** MaxWidth of appBar and content -> it makes content position center */
const maxWidth = '960px'

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
  mainToolBar: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  loginButton: {
    color: theme.palette.text.secondary,
  },
  content: {
    maxWidth,
    margin: '0px auto',
    padding: theme.spacing(6, 0, 0),
  },
}))

const DefaultLayout: React.FC = props => {
  const { children } = props

  /** States */
  const classes = useStyles()
  /* @TODO: Change to config title */
  const title = useState('Nekobooks'.toUpperCase())

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
            className={classes.mainToolBar}
          >
            <Typography className={classes.title} variant="h6" noWrap>
              {title}
            </Typography>
            <Button color="inherit" variant="outlined" disableElevation>
              Login
            </Button>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
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
