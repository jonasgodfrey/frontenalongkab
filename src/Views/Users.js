import React, { Component } from 'react'

export default class Users extends Component {
  // componentDidMount (){
  //   const script = document.createElement("script");
  //   script.src = 'js/content.js';
  //   script.async = true;
 
  //   document.body.appendChild(script);
  // }
  componentDidMount (){
    const script = document.createElement("script");
    script.src = 'js/content.js';
    script.async = true;
 
    document.body.appendChild(script);
  }

  state = {
    loading:true,
    passengers: null,
  };

  async componentDidMount(){
    const url = "http://alongkab.pythonanywhere.com/api/passengers/"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({passengers: data, loading:false })
    
  }

  render() {
    if(this.state.loading){
     return <div>loading....</div>
    }
    if(!this.state.passengers.length){
      return  <div>didnt get a passengers</div>
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
            <h3 className="card-title">Passengers Details</h3>
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
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>                
             </thead>
             <tbody>
              {this.state.passengers.map(passengers => (
             <tr>
               <td>{passengers.id}</td>
              <td>{passengers.first_name}</td>
              <td>{passengers.last_name}</td>
              <td>{passengers.email}</td>
              <td> {passengers.phone}</td>
              <td><span className="badge bg-success">Edit</span></td>
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