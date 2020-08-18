import React, { Component } from 'react'
import Header from './Layout/Header'
import Menu from './Layout/Menu'
import Footer from './Layout/Footer'
import Dashboard from './Views/Dashboard'
import Drivers from './Views/Drivers'
import KabRoutes from './Views/KabRoutes'
import Login from './Auth/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Users from './Views/Users'


class Selfroute extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedin: false
        }
    }
    
    render() {
       if(this.state.isloggedin == true){
        return (
          <Router>
          <div>
          <Header/>
          <Switch>
          
          <Route path="/dashboard" component={Dashboard} />    
          
          <Route path="/drivers" component={Drivers} /> 
             
          <Route path="/users" component={Users} /> 
          <Route path="/kabroutes" component={KabRoutes} />
    
        
          </Switch>
          <Menu/>
          <Footer/>
          </div>
    
          </Router>
        )
       }
       else{
        return (
          <Router>
          
          <Route path="/" component={Login} /> 
            
          
        </Router>
      )
      }
    }
}

export default Selfroute
