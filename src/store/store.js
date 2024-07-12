// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookSlice";
import genreBooksReducer from "./genreBooksSlice";
import genresReducer from "./genresSlice";
import popularBooksReducer from "./popularBooksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    genreBooks: genreBooksReducer,
    genres: genresReducer,
    popularBooks: popularBooksReducer,
  },
});
