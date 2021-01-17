import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Error404 from '../error/404'
import DefaultLayout from '../layouts/default'
import { defaultLayoutRouters } from './modules/index'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.default,
  },
}))

const RouterIndex: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Switch>
        <DefaultLayout>
          {
            defaultLayoutRouters.map(router => <Route path={router.path} exact={router.exact || false} component={router.component} />)
          }
        </DefaultLayout>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  )
}

export default RouterIndex
