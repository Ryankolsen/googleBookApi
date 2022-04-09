import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useGetBooksByAuthorQuery } from "./booksSlice";
import { addFavBook } from "../favoriteBooks/favoriteBookSlice";
import { Button, Card, Alert, Dropdown, Form } from "react-bootstrap";
import { SandersonBooks } from "./SandersonBooks";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import "../../index.css";

export const Books = () => {
  const [authorName, setAuthorName] = useState("Stephen King");

  const authorSearchName = useRef<any>(null);

  const { data, error, isLoading } = useGetBooksByAuthorQuery(authorName); //RTK Query

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setAuthorName(authorSearchName?.current?.value.toString());
  };

  const handleSetSingleFavBook = (favBook: string, favBookId: string) => {
    const singleFavoriteBook = {
      favoriteBooks: favBook,
      favoriteBookId: favBookId,
    };
    dispatch(addFavBook(singleFavoriteBook));
  };

  return (
    <div className="book__Card-container">
      <Card className="">
        <Card.Header>
          <h3 className="book__Card-Header-h1">Search for Books by Author</h3>
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
          </Form>

          {error ? (
            <>An error Occurred!</>
          ) : isLoading ? (
            <Spinner />
          ) : !data?.items ? (
            <div>
              <h2>Error! Please try again with a valid author</h2>
            </div>
          ) : data ? (
            <>
              {console.log(data)}
              {data?.items.map((bookData) => {
                return (
                  <div className="book__container" key={bookData.id}>
                    <img
                      src={bookData.volumeInfo.imageLinks?.smallThumbnail}
                      alt={bookData.volumeInfo.title}
                      width="150px"
                    />
                    <div className="book__container__Link_container">
                      <Link
                        className="book__container__Link"
                        to={`/Book/${bookData.id}`}
                        state={{ data: data }}
                      >
                        <h2 className="book__container__Link__h2">
                          {bookData.volumeInfo.title}
                        </h2>
                      </Link>
                      <div className="book__container-author">
                        <p className="book__container-author">
                          Written By: <>{bookData.volumeInfo.authors}</>
                        </p>
                      </div>
                      <p>{bookData.searchInfo.textSnippet}</p>
                    </div>
                    <div>
                      <Button
                        onClick={(e) =>
                          handleSetSingleFavBook(
                            bookData.volumeInfo.title,
                            bookData.id
                          )
                        }
                      >
                        Add to Favorites
                      </Button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </Card.Body>
        <Link to={"/Sanderson"}>Brandon Sanderson </Link>
      </Card>
    </div>
  );
};
