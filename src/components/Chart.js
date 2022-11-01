// import { render } from '@testing-library/react';
import React, { Component } from "react";
// import ChartRow from './ChartRow';

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      // la siguiente linea debería funcionar con la API del localhost
      // fetch('http://localhost:3000/api/v1/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data.results,

          // la siguiente linea debería funcionar con la API del localhost
          // users: data.data
        });
      })
      .catch((error) => console.error(error));
  }

  // let tableRowsData = [
  //     {
  //         Title: 'Billy Elliot ',
  //         Length: '123',
  //         Rating: '5',
  //         Categories: ['Drama','Comedia'],
  //         Awards: 2
  //     },
  //     {
  //         Title: 'Alicia en el país de las maravillas',
  //         Length: '142',
  //         Rating: '4.8',
  //         Categories: ['Drama','Acción','Comedia'],
  //         Awards: 3
  //     },

  // ]

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
              {this.state.users.length === 0 && <p>Cargando</p>}
              {this.state.users.map((user) => {
                return (
                  <>
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <th>{user.name}</th>
                      <th>{user.status}</th>
                      <th>{user.url}</th>
                    </tbody>
                    {/* la siguiente linea debería funcionar con la API del
                    localhost
                    <th>{user.first_name}</th> */}
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
