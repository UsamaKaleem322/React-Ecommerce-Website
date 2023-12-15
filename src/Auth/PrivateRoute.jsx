import React from 'react'
import { Route,redirect } from 'react-router-dom'
import { auth } from '../Firebase/Firebase-config'
const PrivateRoute = ({component:RouteComponent,...rest}) => {
  return (
    <Route>
     {...rest}
     render={
      routeProps=>
      !!auth.currentUser?(
        <RouteComponent {...routeProps}/>
      ):(
        <redirect to={'/signin'}/>
      )
     }
    </Route>
  )
}

export default PrivateRoute