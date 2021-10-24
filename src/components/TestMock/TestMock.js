import React, { Component } from "react";

export default class TestMock extends Component {
  state = {
    clientes: []
  };

  componentDidMount() {
    this.props.clienteWeb.cargarClientes().then(respuesta => {
      this.setState({
        clientes: respuesta.data.customers.slice(0, 4)
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Clientes</h2>
        <br />
        <center>
          <table>
            <thead>
              <tr>
                <th>CONTACTO</th>
                <th>CIUDAD</th>
                <th>PAIS</th>
              </tr>
            </thead>
            <tbody>
              {this.state.clientes.map((cust, i) => {
                return (
                  <tr key={i} data-testid="cliente">
                    <td>{cust.contactName}</td>
                    <td>{cust.city}</td>
                    <td>{cust.country}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
