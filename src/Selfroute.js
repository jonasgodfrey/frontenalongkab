import React from 'react'
import Header from './Layout/Header'
import Menu from './Layout/Menu'
import Footer from './Layout/Footer'
import Dashboard from './Views/Dashboard'
import Drivers from './Views/Drivers'
import Users from './Views/Users'
import KabRoutes from './Views/KabRoutes'
import Login from './Auth/Login'
import Cookies from 'js-cookie'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Selfroute() {
  const [login, isloggedin] = useState(false)

  const readCookie = () => {
    const user = Cookies.get('user')
    if (user) {
      isloggedin(true);
    }
  }

  useEffect(() => {
    readCookie()
  })

  if (login) {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/drivers" component={Drivers} />
            <Route path="/users" component={Users} />
            <Route path="/kabroutes" component={KabRoutes} />
          </Switch>
          <Menu />
          <Footer />
        </div>
      </Router>
    )
  }
  
  else {
    return (
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
        <Redirect to="/" />
      </Router>
    )
  }
}

export default Selfroute
