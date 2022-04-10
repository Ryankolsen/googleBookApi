import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Button, Card, Alert, Dropdown, Form } from "react-bootstrap";

export const FavoriteBooks = () => {
  const favoriteBooks = useAppSelector(
    (state) => state.favoriteBooks.favoriteBooks
  );
  console.log(favoriteBooks);

  return (
    <div>
      <Card>
        <div>FavoriteBooks</div>
        <ul>
          {favoriteBooks.map((book) => {
            return book.favoriteBookId !== "" ? (
              <li key={book.favoriteBookId}>{book.favoriteBooks}</li>
            ) : null;
          })}
        </ul>
      </Card>
    </div>
  );
};
