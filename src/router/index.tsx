import React from 'react'
import {
  Route, Switch,
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Home from '../home/index'
import Error404 from '../error/404'

const RouterIndex: React.FC = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      background: theme.palette.background.default,
    },
  }))

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  )
}

export default RouterIndex
