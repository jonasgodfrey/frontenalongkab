import React, { Component } from 'react'

export default class KabRoute extends Component {
  componentDidMount (){
    const script = document.createElement("script");
    script.src = 'js/content.js';
    script.async = true;
 
    document.body.appendChild(script);
  }
    render() {
        return (
            <div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Routes</h1>
          </div>{/* /.col */}
          
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">  
            <div className="card card-blue">
              <div className="card-header">
                <h3 className="card-title">Available Routes</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" /></button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Route ID</th>
                      <th>Route Name</th>
                      <th>Landmark</th>
                      <th>Status</th>
                      <th>Action</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Trident</td>
                      <td>Internet
                        Explorer 4.0
                      </td>
                     
                      <td> 4</td>
                      <td><span className="badge bg-success">online</span></td>
                      <td><span className="badge bg-success">Edit</span><span className="badge bg-red">Delete</span></td>
                    </tr>
                    <tr>
                      <td>Trident</td>
                      <td>Internet
                        Explorer 5.0
                      </td>
                     
                      <td>5</td>
                      <td><span className="badge bg-danger">offline</span></td>
                      <td><span className="badge bg-success">Edit</span><span className="badge bg-red">Delete</span></td>
                    </tr>
                    <tr>
                      <td>Trident</td>
                      <td>Internet
                        Explorer 4.0
                      </td>
                     
                      <td> 4</td>
                      <td><span className="badge bg-success">online</span></td>
                      <td><span className="badge bg-success">Edit</span><span className="badge bg-red">Delete</span></td>
                    </tr>
                    <tr>
                      <td>Trident</td>
                      <td>Internet
                        Explorer 5.0
                      </td>
                     
                      <td>5</td>
                      <td><span className="badge bg-danger">offline</span></td>
                      <td><span className="badge bg-success">Edit</span><span className="badge bg-red">Delete</span></td>
                    </tr>
                  </tbody></table>
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
    <section className="content">
      <div className="container-fluid">
        {/* SELECT2 EXAMPLE */}
        <div className="card card-danger">
          <div className="card-header">
            <h3 className="card-title">Add Routes</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" /></button>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            
            <form>                
              <div className="row">
                <div className="col-sm-4">
                  {/* text input */}
                  <div className="form-group">
                    <label>Route Name</label>
                    <input type="text" className="form-control" placeholder="Enter ..." />
                  </div>
                </div>
                <div className="col-sm-4">
                  {/* text input */}
                  <div className="form-group">
                    <label>Landmark</label>
                    <input type="text" className="form-control" placeholder="Enter ..." />
                  </div>
                </div>
                <div className="col-sm-4">
                  {/* text input */}
                  <div className="form-group">
                    <label>Location</label>
                    <input type="email" className="form-control" placeholder="Enter ..." />
                  </div>
                </div>
              </div>
              
              <div className="row">              
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>                
            </form>
          </div>
          {/* /.card-body */}
          <div className="card-footer card-footer-dan">
            <button type="button" className="btn btn-tool btn-primary" data-card-widget="collapse"><i className="fas fa-minus" /></button>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
    
  </div>
</div>

        )
    }
}
