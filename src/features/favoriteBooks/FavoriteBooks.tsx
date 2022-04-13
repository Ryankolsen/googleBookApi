import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FavoriteBooks = () => {
  const favoriteBooks = useAppSelector(
    (state) => state.favoriteBooks.favoriteBooks
  );

  return (
    <div>
      <Card>
        <div>FavoriteBooks</div>
        <Card.Body>
          {favoriteBooks.map((book) => {
            return book.favoriteBookId !== "" ? (
              <Link
                key={book.favoriteBookId}
                to={`/favoriteBook/${book.favoriteBookId}`}
                state={{ data: book }}
              >
                <div>{book.favoriteBooks}</div>
              </Link>
            ) : null;
          })}
        </Card.Body>
      </Card>
      <Link id="NavDropdown" to={"/"}>
        Home
      </Link>
    </div>
  );
};
