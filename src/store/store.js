import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../store/bookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
