import { render } from '@testing-library/react';
import React, { Component } from "react";
import ChartRow from './ChartRowUsers';

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
      fetch('http://localhost:3000/api/v1/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data.data
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      /* <!-- DataTales Example --> */
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >

<thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>email</th>
                      </tr>
                    </thead>
              {this.state.users.map((user) => {
              {this.state.users.length === 0 && <p>Cargando</p>}
                return (
                  <>

                    <tbody>
                    <th>{user.first_name}</th>
                    <th>{user.last_name}</th>
                    <th>{user.email}</th>

                            {/* {
                            users.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            } */}

                        </tbody>
            
                  </>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
