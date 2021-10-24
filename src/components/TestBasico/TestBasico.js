import React, { Component } from "react";

export default class TestBasico extends Component {
  cajainput = React.createRef();
  state = {
    resultado: ""
  };
  cargarResultado = e => {
    e.preventDefault();
    var res = this.cajainput.current.value;
    this.setState({
      resultado: res //"Gracias por enviarnos la información"
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.cargarResultado}>
          <label>País: </label>
          <input
            type="text"
            name="cajainput"
            id="cajainput"
            data-testid="cajainput"
            ref={this.cajainput}
          />
          <button data-testid="button">Enviar</button>
        </form>
        <h2 style={{ color: "white" }} data-testid="result">
          {this.state.resultado}
        </h2>
      </div>
    );
  }
}
