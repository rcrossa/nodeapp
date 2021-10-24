import React from "react";
import { render } from "@testing-library/react";
import TestBasico from "./TestBasico";

test("input value is rendered when the form is submitted", () => {
  //Arrange
  const { getByTestId } = render(<TestBasico />);

  const input = getByTestId("cajainput");
  const button = getByTestId("button");
  const result = getByTestId("result");

  const inputValue = "España";

  //Act
  input.value = inputValue;
  button.click();

  //Assert
  expect(result.textContent).toBe(inputValue);
});
