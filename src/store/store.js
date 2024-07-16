// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookSlice";
import genreBooksReducer from "./genreBooksSlice";
import genresReducer from "./genresSlice";
import popularBooksReducer from "./popularBooksSlice";
import cartReducer from "./cartSlice";
import { loadState, saveState } from "./localStorageUtils";

// Load the initial state from local storage
const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    books: booksReducer,
    genreBooks: genreBooksReducer,
    genres: genresReducer,
    popularBooks: popularBooksReducer,
    cart: cartReducer,
  },
  preloadedState,
});

// Subscribe to store changes and save the state to local storage
store.subscribe(() => {
  saveState(store.getState());
});
