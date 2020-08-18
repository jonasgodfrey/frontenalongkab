import React, { Component } from 'react'

export default class Dashboard extends Component {
  componentDidMount (){
    const script = document.createElement("script");
    script.src = 'js/content.js';
    script.async = true;
 
    document.body.appendChild(script);
  }
    render() {
        return (
          
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Dashboard</h1>
          </div>{/* /.col */}
         
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>01</h3>
                <p>Booked Rides</p>
              </div>
              <div className="icon">
                <ion-icon ios="ios-car" md="md-car" />
                <i className="ion-model-s" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>₦0<sup style={{fontSize: 20}}></sup></h3>
                <p>Total Passengers</p>
              </div>
              <div className="icon">
                <i className="ion-cash" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>00</h3>
                <p>Total Drivers</p>
              </div>
              <div className="icon">
                <i className="ion-ios-people" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
         
          {/* ./col */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div className="small-box bg-secondary">
              <div className="inner">
                <h3>01</h3>
                <p>Uers Online</p>
              </div>
              <div className="icon">
                <ion-icon ios="ion-ios-people" md="md-car" />
                <i className="ion-model-s" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>₦0<sup style={{fontSize: 20}}></sup></h3>
                <p>Drivers Online</p>
              </div>
              <div className="icon">
                <i className="ion-cash" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>00</h3>
                <p>Canceled Rides</p>
              </div>
              <div className="icon">
                <i className="ion-android-cancel" />
              </div>
              <p className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
            </div>
          </div>
       
          {/* ./col */}
          
          {/* ./col */}
        </div>
        
        
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
    
    
  
  </div>



        )
    }
}
