import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildQueries } from "@testing-library/react";
import { API_KEY } from "../../index";
import {
  bookSlice,
  bookApiInterface,
  items,
  favoriteBooksState,
  favoriteBookApi,
} from "../books/interfaces";

const initialFavBookState: favoriteBooksState = {
  favoriteBooks: [
    {
      favoriteBooks: "",
      favoriteBookId: "",
    },
  ],
};

//fetch using createAPI/RTK Query
export const bookApi = createApi({
  reducerPath: "googleAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    getSandersonBooks: builder.query<bookApiInterface, string>({
      query: () => `volumes?q=brandon%20sanderson+intitle&key=${API_KEY}`,
    }),
    getBooksByAuthor: builder.query<bookApiInterface, string>({
      query: (author: string) => `volumes?q=${author}+intitle&key=${API_KEY}`,
    }),
    getBookByID: builder.query<favoriteBookApi, string>({
      query: (id: string) => `volumes/${id}?key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetSandersonBooksQuery,
  useGetBooksByAuthorQuery,
  useGetBookByIDQuery,
} = bookApi;
export const selectAllBooks = (state: bookSlice) => console.log(state.books);
