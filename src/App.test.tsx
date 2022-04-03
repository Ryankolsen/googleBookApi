import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Books } from "./features/books/Books";
test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Books />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
