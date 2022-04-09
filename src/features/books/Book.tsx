import React from "react";
import { useSelector } from "react-redux";
import { selectAllBooks } from "./booksSlice";
import { useParams, useLocation } from "react-router-dom";
import { Card, Alert, Dropdown, Form } from "react-bootstrap";
import { items } from "./booksSlice";

export const Book = () => {
  const location: any = useLocation();
  const { data } = location.state;
  //   console.log(data.items);

  const bookId = useParams().bookId;
  //   console.log(bookId);
  const book: items = data.items.find(
    (book: items) => book.id.toString() === bookId?.toString()
  );

  console.log(book);

  return (
    <>
      <div className="book__Card-container">
        <Card>
          <Card.Header className="book__Card-Header">
            <h1>{book.volumeInfo.title} </h1>
          </Card.Header>
          <Card.Body>
            <h4>Author: {book.volumeInfo.authors.map((author) => author)}</h4>
            <p>{book.volumeInfo.description}</p>
            {book.pageCount ? (
              <p>Page Count: {book.pageCount}</p>
            ) : (
              <p>Page Count: Not Available</p>
            )}
            {book.volumeInfo.publisher}
          </Card.Body>
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
            width="350px"
          ></img>
        </Card>
      </div>
    </>
  );
};
