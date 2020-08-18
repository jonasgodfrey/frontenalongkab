import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
           <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <Link to='/'>
    <li className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    
      <span className="brand-text font-weight-light">AlongKab</span>
      
     
    </li>
    </Link>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User " />
        </div>
        <div className="info">
          <Link to='/'>
          <li className="d-block">Admin</li>
          </Link>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item">
            <Link to='/' className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
              </p>
            </Link>            
          </li> 
          <li className="nav-item">
            <Link to='/drivers' className="nav-link">
              <i className="nav-icon fa fa-car" />
              <p>Drivers</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/users' className="nav-link">
              <i className="nav-icon fa fa-users" />
              <p>Passengers</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/kabroutes' className="nav-link">
              <i className="nav-icon fa fa-road" />
              <p>Routes</p>
            </Link>
          </li>
          {/* <li className="nav-item">
            <a href="landmarks.html" className="nav-link">
              <i className="nav-icon fa fa-stop" />
              <p>Landmarks</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="rides.html" className="nav-link">
              <i className="nav-icon fa fa-car" />
              <p>Rides</p>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="payment.html" className="nav-link">
              <i className="nav-icon fa fa-money-bill-alt" />
              <p>Payments</p>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="reports.html" className="nav-link">
              <i className="nav-icon fa fa-book" />
              <p>Reports</p>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="settings.html" className="nav-link">
              <i className="nav-icon fa fa-cogs" />
              <p>Settings</p>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <Link to='/login' className="nav-link">
              <i className="nav-icon fa fa-sign-out-alt" />
              <p>Sign in</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/register' className="nav-link">
              <i className="nav-icon fa fa-sign-out-alt" />
              <p>Register</p>
            </Link>
          </li> */}
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>


        )
    }
}
