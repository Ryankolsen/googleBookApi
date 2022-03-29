import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectAllBooks,
  useGetSandersonBooksQuery,
  useGetBooksByAuthorQuery,
} from "./booksSlice";
import { Card } from "react-bootstrap";

export const SandersonBooks = () => {
  const { data, error, isLoading } = useGetSandersonBooksQuery("");

  const books = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <div>
      {error ? (
        <>An error Occurred!</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Card.Header>
            <h3> Brandon Sanderson Books...because Brandon Sanderson!</h3>
          </Card.Header>
          {data.items.map((bookData) => {
            return (
              <h3 key={bookData.id}>{bookData.volumeInfo.title.toString()} </h3>
            );
          })}
        </>
      ) : null}
    </div>
  );
};
