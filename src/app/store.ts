import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { bookApi } from "../features/books/booksSlice";
import favoriteBookSlice from "../features/favoriteBooks/favoriteBookSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    favoriteBooks: favoriteBookSlice,
  },
  middleware: (getDefauldmiddleware) =>
    getDefauldmiddleware().concat(bookApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch);
