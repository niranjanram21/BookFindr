import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice';
import genresReducer from './genresSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    genres: genresReducer,
  },
});
