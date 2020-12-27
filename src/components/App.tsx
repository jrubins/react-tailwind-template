import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { useSegmentTracking } from '../hooks/analytics'
import HomePage from './HomePage'

const App = () => {
  useSegmentTracking()

  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
}

export default hot(App)
