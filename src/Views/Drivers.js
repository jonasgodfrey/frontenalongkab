import React, { Component } from 'react'

export default class Drivers extends Component {

  componentDidMount (){
    const script = document.createElement("script");
    script.src = 'js/content.js';
    script.async = true;
 
    document.body.appendChild(script);
  }

  state = {
    loading:true,
    rider: null,
  };

  async componentDidMount(){
    const url = "http://alongkab.pythonanywhere.com/api/drivers/"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({rider: data, loading:false })
    
  }

 
    


    render() {
      if(this.state.loading){
       return <div>loading....</div>
      }
      if(!this.state.rider.length){
        return  <div>didnt get a rider</div>
      }
        return (
           <div className="content-wrapper">
              <div className="content-header">
                <div className="container-fluid">
     <section className="content">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">  
        <div className="card card-blue">
          <div className="card-header">
            <h3 className="card-title">Drivers Details</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" /></button>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <table id="example1" className="table table-bordered table-striped">
            
              <thead>              
              <th>Sn</th>
              <th>First Name</th>
              <th>Last Name</th>
              {/* <th>Email</th> */}
              <th>Phone Number</th>
              <th>Loction</th>
              <th>Gender</th>
              <th>Vechicle No</th>
              <th>Vechicle Yr</th>
              <th>Vechicle No</th>
              <th>Vehicle Color</th>
              <th>License</th>
              <th>Date Registered</th>
              <th>Action</th>                
             </thead>
             <tbody>
             {this.state.rider.map(rider => (
               <tr>
                 <td>{rider.id}</td>
                <td>{rider.first_name}</td>
                <td>{rider.last_name}</td>
                {/* <td>{rider.email}</td> */}
                <td>{rider.phone}</td>
                <td>{rider.state_of_residence}</td>
                <td>{rider.gender}</td>
                <td>{rider.vehicle_model}</td>
                <td>{rider.vehicle_year}</td>
                <td>{rider.plate_number}</td>
                <td>{rider.vehicle_color}</td>
                <td>{rider.driver_license}</td>
                <td>{rider.created_at}</td>
                <td><span className="badge bg-success">Approve</span></td>
                </tr>
             ))}      
                
              </tbody>
              </table>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
      {/* /.col */}
    </div>
    {/* /.row */}
  </div>
  {/* /.container-fluid */}
</section>
          </div>
          </div>
          </div>
         


        )
        
    }
}
