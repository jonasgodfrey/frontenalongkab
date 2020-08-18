import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Dashboard from './Views/Dashboard'
import Drivers from './Views/Drivers'
import Users from './Views/Users'
import KabRoutes from './Views/KabRoutes'
import Login from './Login'
import Register from './Register'
// import Login from './Login/Login'
import Home from './Login/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


export default class App2 extends Component {

  
  render() {
    return (
      <Router>
      <div>
      <Switch>
      

      <Route path="/login" component={Login} /> 

    
      </Switch>
    
      </div>

      </Router>
    )
  }
}
