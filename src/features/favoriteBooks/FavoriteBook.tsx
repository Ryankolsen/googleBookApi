import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookByIDQuery } from "../books/booksSlice";
import { Card } from "react-bootstrap";
import { Spinner } from "../../components/Spinner";

export const FavoriteBook = () => {
  const bookId: any = useParams().bookId?.toString();
  const { data, error, isLoading } = useGetBookByIDQuery(bookId);

  return (
    <>
      {error ? (
        <>An Error Occurred!</>
      ) : isLoading ? (
        <Spinner />
      ) : data ? (
        <Card>
          <Card.Header className="book__Card-Header">
            <h1>{data?.volumeInfo.title}</h1>
          </Card.Header>
          <Card.Body>
            <h4>Author:{data?.volumeInfo.authors.map((author) => author)}</h4>
            <p>{data?.volumeInfo.description}</p>
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
};
