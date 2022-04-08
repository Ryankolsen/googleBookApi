import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./features/books/books.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Books } from "./features/books/Books";
import { SandersonBooks } from "./features/books/SandersonBooks";
import { Book } from "./features/books/Book";
import { NavBar } from "./app/NavBar";
import { Layout } from "./app/Layout";
import { FavoriteBooks } from "./features/favoriteBooks/FavoriteBooks";
import "bootstrap/dist/css/bootstrap.min.css";

export const API_KEY = process.env.REACT_APP_GOOGLE_BOOK_API_KEY;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <Layout>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/Sanderson" element={<SandersonBooks />} />
            <Route path="/book/:bookId" element={<Book />} />
            <Route path="/favoriteBooks" element={<FavoriteBooks />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
