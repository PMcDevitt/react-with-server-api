import React from 'react'
import {Route, Switch} from 'react-router-dom'
import PasswordPage from './passwords/PasswordPage'
// import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import Passwords from './passwords/Passwords'
const Routes = (props)=> {

return (<div>
    {props.loggedIn ? loggedinRoutes(props) : logRoute(props) }
  </div>)
}

const loggedinRoutes = (props) => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Passwords}/>
        <Route path='/about' render={() => (
          <AboutPage {...props} />
        )} />
        <Route path='/passwords' component={PasswordPage} />
        <Route component={AboutPage} />
      </Switch>
    </main>
  )
}
const logRoute = (props) => {
  return (<main>
    <Switch>
      <Route path='/' render={() => (
        <AboutPage {...props} />
        )} />
      <Route component={AboutPage} />
    </Switch>
  </main>)
}

export default Routes
