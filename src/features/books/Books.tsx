import React, { useRef, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectAllBooks,
  useGetSandersonBooksQuery,
  useGetBooksByAuthorQuery,
} from "./booksSlice";
import { Button, Card, Alert, Dropdown, Form } from "react-bootstrap";
import { SandersonBooks } from "./SandersonBooks";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";
import { Spinner } from "../../components/Spinner";

export const Books = () => {
  const [authorName, setAuthorName] = useState("");

  const authorSearchName = useRef<any>(null);

  const { data, error, isLoading } = useGetBooksByAuthorQuery(authorName);

  const dispatch = useAppDispatch();

  function testButton(e: any | null) {
    e.preventDefault();
    console.log(authorName);
  }

  const handleSubmit = (e: any | null) => {
    e.preventDefault();
    setAuthorName(authorSearchName?.current?.value);
  };
  //   const useSetAuthName = (author: string) => {
  //     const newAuthor = authorName;
  //     setAuthorName(author);
  //   };

  console.log(data);

  return (
    <div>
      <Card>
        <CardHeader>
          <h2>Google API</h2>
        </CardHeader>

        <Link to={"/Sanderson"}>Bandon Sanderson </Link>

        <Card.Header>
          <h3> Search for your favorite Author!</h3>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search By Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author name"
                ref={authorSearchName}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>

            {/* <button onClick={(e) => testButton(e)}>Test Button</button> */}
          </Form>

          {error ? (
            <>An error Occurred!</>
          ) : isLoading ? (
            <Spinner text="Loading..." />
          ) : data ? (
            <>
              {data.items.map((bookData) => {
                return <h3 key={bookData.id}>{bookData.volumeInfo.title}</h3>;
              })}
            </>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
};
