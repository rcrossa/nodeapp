import React from "react";
import { render, wait, waitFor } from "@testing-library/react";
import TestMock from "./TestMock";
import ClienteWeb from "./ClienteWeb";
// eslint-disable-next-line jest/no-mocks-import
// import MockClienteWeb from "./__mocks__/MockClienteWeb";

test("mock a function", async () => {
  const clienteWeb = new ClienteWeb();

  // clienteWeb.cargarClientes = jest.fn(
  //   () => new Promise(resolve => resolve(MockClienteWeb.listaClientes))
  // );

  const { getAllByTestId } = render(<TestMock clienteWeb={clienteWeb} />);

  expect(clienteWeb.cargarClientes).toHaveBeenCalled();

  await wait(() => {
    expect(getAllByTestId("cliente")).toHaveLength(3);
  });
});

// test("spy a function", async () => {
//   //Arrange
//   const mock = new MockClienteWeb();
//   const clienteWebSpy = jest.spyOn(mock, "cargarClientes");

//   const { getAllByTestId } = render(<TestMock clienteWeb={mock} />);

//   //Act
//   //Assert
//   expect(clienteWebSpy).toHaveBeenCalled();
//   await waitFor(() => {
//     expect(getAllByTestId("cliente")).toHaveLength(3);
//   });
// });
