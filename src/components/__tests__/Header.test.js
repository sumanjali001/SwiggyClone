import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";

test("testing header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
});
