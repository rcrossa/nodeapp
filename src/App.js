import React from 'react';
import TestBasico from "./components/TestBasico/TestBasico";
// import TestMock from "./components/TestMock/TestMock";
// import ClienteWeb from "./components/TestMock/ClienteWeb";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <hr />
        <TestBasico />
        <hr /> 
        {/* <TestMock clienteWeb={ ClienteWeb } /> */}
      </header>
    </div>
  );
}

export default App;
