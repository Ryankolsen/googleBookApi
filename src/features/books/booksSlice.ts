import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildQueries } from "@testing-library/react";
import { API_KEY } from "../../index";

//key=API_KEY

export interface bookSlice {
  status: "idle" | "loading" | "failed";
  error: string;
  books: {
    id: number;
    title: string;
  };
}

export interface bookApi {
  status: "idle" | "loading" | "failed" | "fulfilled";
  endpointName: string;
  requestID: string;
  originalArgs: string;
  startedTimeStamp: number;

  kind: string;
  totalItems: number;
  items: [
    {
      kind: string;
      id: string;
      etag: string;
      selfLink: string;
      volumeInfo: {
        title: string;
        subtitle: string;
        authors: string[];
        publisher: string;
        publishedDate: string;
        description: string;
        imageLinks: {
          smallThumbnail: string;
          thumbnail: string;
          language: string;
          previewLing: string;
          infoLink: string;
          canonicalVolumeLink: string;
        };
      };
      industryIdentifiers: [
        {
          type: string;
          identifier: string;
        }
      ];
      readingModes: {
        text: boolean;
        image: boolean;
      };
      pageCount: number;
      printType: string;
      categories: string[];
      averageRating: number;
      maturityRating: string;
      allowAnnonLogging: boolean;
      contentVersion: string;
      penalizationSummary: {
        containsEpubBubbles: boolean;
        containsImageBubbles: boolean;
      };
      sales: {};
      assessInfo: {};
      searchInfo: {
        textSnippet: string;
      };
    }
  ];

  fulfilledTimeStamp: number;
}

export interface items {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
      language: string;
      previewLing: string;
      infoLink: string;
      canonicalVolumeLink: string;
      sales: {};
      assessInfo: {};
      searchInfo: {
        textSnippet: string;
      };
    };
  };
  industryIdentifiers: [
    {
      type: string;
      identifier: string;
    }
  ];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  maturityRating: string;
  allowAnnonLogging: boolean;
  contentVersion: string;
  penalizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
}

export interface favoriteBooksState {
  favoriteBooks: [
    {
      favoriteBooks: string;
      favoriteBookId: string;
    }
  ];
}
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
    getSandersonBooks: builder.query<bookApi, string>({
      query: () => `volumes?q=brandon%20sanderson+intitle&key=${API_KEY}`,
    }),
    getBooksByAuthor: builder.query<bookApi, string>({
      query: (author: string) => `volumes?q=${author}+intitle&key=${API_KEY}`,
    }),
  }),
});

const bookSlice = createSlice({
  name: "favoriteBooks",
  initialState: initialFavBookState,
  reducers: {
    addFavBook(favoriteBooks, action) {
      favoriteBooks.favoriteBooks.push(action.payload);

      const filteredFavBooks = favoriteBooks.favoriteBooks.filter(
        (book: any) => {
          return book.favoriteBooks !== "";
        }
      );
      console.log(filteredFavBooks);
      // favoriteBooks = filteredFavBooks;
      // console.log(filteredFavBooks);

      // const clearedFavBooks = favoriteBooks.filter((book: any) => {
      //   return book.favoriteBooks !== "";
      // });
      // console.log(clearedFavBooks);

      // favoriteBooks = clearedFavBooks;

      // favoriteBooks === [{}, {}]
      //   ? (favoriteBooks = [action.payload])
      //   : favoriteBooks.push(action.payload);

      // });
    },
  },
});

// export default bookSlice.reducer;
export const { useGetSandersonBooksQuery, useGetBooksByAuthorQuery } = bookApi;
export const { addFavBook } = bookSlice.actions;
export const selectAllBooks = (state: bookSlice) => console.log(state.books);
export default bookSlice.reducer;
