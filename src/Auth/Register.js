import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {


  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "" 
      
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const {username,email, password } = this.state;

    axios
      .post(
        "http://alongkab2.herokuapp.com/register",
        {
          user: {
            username: username,
            email: email,
            password: password
            
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }


    
    render() {
        return (
            <div>
 <div className="hold-transition register-page">
  <div className="register-box">
    <div className="register-logo">
      <a href="fake_url"><b>Along</b>Kab</a>
    </div>
    <div className="card">
      <div className="card-body register-card-body">
        <p className="login-box-msg">Register</p>
        <form action="fake_url" method="post">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Username" 
            value={this.state.username}
            onChange={this.handleChange}/>
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" 
            value={this.state.email}
            onChange={this.handleChange}/>
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          {/* <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Phone Number" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-phone" />
              </div>
            </div>
          </div> */}
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" 
            value={this.state.password}
            onChange={this.handleChange}/>
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          {/* <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Retype password" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div> */}
          <div className="row">
            {/* <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                <label htmlFor="agreeTerms">
                  I agree to the <a href="fake_url">terms</a>
                </label>
              </div>
            </div> */}
            {/* /.col */}
            <div className="col-4">
              {/* <input type="submit" className="btn btn-primary btn-block" value="Register"/> */}
              <button type="submit">Register</button>
            </div>
            {/* /.col */}
          </div>
        </form>
       
        {/* <a href="fake_url" className="text-center">Sign in</a> */}
      </div>
      {/* /.form-box */}
    </div>{/* /.card */}
  </div>
  {/* /.register-box */}</div>
  </div>

        )
    }
}
