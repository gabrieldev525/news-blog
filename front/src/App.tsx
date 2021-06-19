// react imports
import React, { useEffect } from 'react'
import { Redirect } from "react-router"
import { Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// third party imports
import { map } from 'lodash'

// redux
import { fetchCurrentUser } from './store/modules/current_user/actions'

// components
import TMenu from './components/app/default-layout'
import RouteWithSubRoutes from './components/common/route-with-sub-routes'

// statics
import './static/css/app.css'

import Route from './routes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [])

  return (
    <>
      <TMenu>
        <Switch>
          { map(Route, (route, index) => <RouteWithSubRoutes key={index} {...route} /> )}
          <Redirect from='*' to='/' />
        </Switch>
      </TMenu>
    </>
  )
}

export default App