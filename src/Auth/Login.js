import React, { Component } from 'react';
// import {PostData} from './PostData';
import {Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
import Selfroute from '../Selfroute';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import './login.css';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state ={
            username:'',         
            password:'',
            redirect:false,

        }

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }

    // login(){
    //     if(this.state.username && this.state.password){
    //         PostData('token',this.state).then ((result)=>{
    //             let responseJSON = result;
    //             console.log(responseJSON);
    //             if(responseJSON.status==0){ 
    //                 Cookies.set('user', 'Loggedin',{expires:7})
    //                 sessionStorage.setItem('user', responseJSON.data );
    //                 this.setState({Redirect: true});    
    //             }
    //             else{
    //                alert("Wrong Credentials, Enter correct Username and password"); 
    //             }
    //         });
    
    //     }
       
    
    // }

    login(){
      if(this.state.username && this.state.password){
      Fetch('http://alongkab.pythonanywhere.com/api/token/',{
        method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(this.state)
      }).then((response)=>{
        response.json().then((result)=>{
          console.warn("result",result);
          Cookies.set('user', 'Loggedin',{expires:7})
          sessionStorage.setItem('user', response.JSON );
         this.setState({Redirect: true});
         
        });
      })
    }
    else{
                     alert("Wrong Credentials, Enter correct Username and password"); 
                 }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});


    }


    render() {

        if(this.state.Redirect){
            return(
                <div>
                    <Selfroute/>
                </div>
                
            )
            }
            else{
        return (
            <div>
            <div className="hold-transition login-page">
            <div className="login-box">
              <div className="login-logo">
                <a href="fake_url"><b>Along</b>Kab</a>
              </div>
              {/* /.login-logo */}
              <div className="card">
                <div className="card-body login-card-body">
                  <p className="login-box-msg">Welcome Admin</p>
                  {/* <form action="" method=""> */}
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" name="username" placeholder="username" onChange={this.onChange}/>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-user" />
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <input type="password" className="form-control" name="password" onChange={this.onChange}/>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock" />
                        </div>
                      </div>
                    </div>
                 
                    <div className="row">
                      
                      {/* /.col */}
                      <div className="col-4">
                      <input type="submit" 
                      value="Login" 
                      className="btn btn-secondary" 
                      onClick={this.login}
                      />
                      </div>
                      {/* /.col */}
                    </div>
                
                </div>
                {/* /.login-card-body */}
              </div>
            </div>
          </div>
          </div>
        )
    }
    }
}

