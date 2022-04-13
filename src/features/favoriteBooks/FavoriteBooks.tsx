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
      <Card className="book__Card-container">
        <Card.Header>
          <h2>FavoriteBooks</h2>
        </Card.Header>
        <Card.Body>
          {favoriteBooks.map((book) => {
            return book.favoriteBookId !== "" ? (
              <Link
                key={book.favoriteBookId}
                to={`/favoriteBook/${book.favoriteBookId}`}
                state={{ data: book }}
              >
                <h4>{book.favoriteBooks}</h4>
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
