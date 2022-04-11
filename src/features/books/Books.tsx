import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetBooksByAuthorQuery } from "./booksSlice";
import allFavoriteBooks, {
  addFavBook,
} from "../favoriteBooks/favoriteBookSlice";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import "../../index.css";

export const Books = () => {
  const [authorName, setAuthorName] = useState("Stephen King");
  const authorSearchName = useRef<any>(null);
  const { data, error, isLoading } = useGetBooksByAuthorQuery(authorName); //RTK Query
  const dispatch = useAppDispatch();

  const favoriteBooks = useAppSelector(
    (state) => state.favoriteBooks.favoriteBooks
  );

  //Handle when author name is submitted
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    //account for null values
    const authSearchName = authorSearchName?.current?.value.toString();
    if (authSearchName) {
      setAuthorName(authorSearchName?.current?.value.toString());
    }
  };

  //Handle adding a book to Favorite list
  const handleSetSingleFavBook = (favBook: string, favBookId: string) => {
    const singleFavoriteBook = {
      favoriteBooks: favBook,
      favoriteBookId: favBookId,
    };

    //Check for duplicates before dispatch
    favoriteBooks.some(
      (favoriteBooks) => favoriteBooks.favoriteBookId === favBookId
    )
      ? console.log("duplicate Item")
      : dispatch(addFavBook(singleFavoriteBook));
  };

  return (
    <div className="book__Card-container">
      <Card className="">
        <Card.Header>
          <h3 className="book__Card-Header-h1">Search for Books by Author</h3>
        </Card.Header>
        <Card.Body className="book__Card-Body__Button ">
          <Link to={"/favoriteBooks"}>
            <Button
              variant="outline-success"
              className="book__Card__Button-Favorite "
            >
              View Favorites
            </Button>
          </Link>
        </Card.Body>
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
              <h2>Error! Please search for a valid author</h2>
            </div>
          ) : data ? (
            <>
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
                        {bookData.searchInfo?.textSnippet ? (
                          <p>{bookData.searchInfo.textSnippet}</p>
                        ) : (
                          <p>Sorry, text snippet is not provided</p>
                        )}
                      </div>
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
