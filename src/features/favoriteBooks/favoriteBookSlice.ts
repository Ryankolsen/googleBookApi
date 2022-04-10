import { createSlice, current } from "@reduxjs/toolkit";
import { API_KEY } from "../../index";

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

const favoriteBookSlice = createSlice({
  name: "favoriteBooks",
  initialState: initialFavBookState,
  reducers: {
    addFavBook(state, action) {
      // const currState = current(state.favoriteBooks); access current state if needed

      state.favoriteBooks.push(action.payload);
    },
  },
});

export const { addFavBook } = favoriteBookSlice.actions;

export const allFavoriteBooks = favoriteBookSlice.reducer;

export default favoriteBookSlice.reducer;
