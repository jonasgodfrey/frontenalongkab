import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Selfroute from './Selfroute'
import Apitest from './Apitest'
import Apitest2 from './Apitest2'



export default class App extends Component {


  render() {

  
    return (
      
       
     

      <div>
     <Router>
     <Selfroute/>
     {/* <Apitest/> */}
      {/* <Apitest2/> */}


      </Router>
   
      </div>


    )
    }
  
  }

