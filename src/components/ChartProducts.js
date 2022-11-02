import { render } from '@testing-library/react';
import React, { Component } from "react";
import ChartProducts from './ChartProducts';

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
      fetch('http://localhost:3000/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data.data
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
                        <th>Producto</th>
                        <th>Marca</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
              {this.state.products.map((product) => {
              {this.state.products.length === 0 && <p>Cargando</p>}
                return (
                  <>

                    <tbody>
                    <th>{product.name}</th>
                    <th>{product.brand}</th>
                    <th>{product.price}</th>
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
