import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  status: "idle",
  error: null,
};

const fetchBooks = createAsyncThunk("books/fetchBooks", async (searchQuery) => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=10&key=AIzaSyAJ4gSr-RRpO-VXKbUA3SmenWJa-fYHIz8`
  );
  return response.data.items;
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;

export const selectAllBooks = (state) => state.books.books;
export const selectBooksStatus = (state) => state.books.status;
export const selectBooksError = (state) => state.books.error;

export { fetchBooks };
