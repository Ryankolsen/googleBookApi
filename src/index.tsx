import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Books } from "./features/books/Books";
import { SandersonBooks } from "./features/books/SandersonBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { Book } from "./features/books/book";

export const API_KEY = process.env.REACT_APP_GOOGLE_BOOK_API_KEY;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Sanderson" element={<SandersonBooks />} />
          <Route path="/Book" element={<Book />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
