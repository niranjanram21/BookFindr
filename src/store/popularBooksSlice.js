// store/popularBooksSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  status: "idle",
  error: null,
};

const fetchPopularBooks = createAsyncThunk(
  "popularBooks/fetchPopularBooks",
  async () => {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=relevance&maxResults=36&key=AIzaSyAJ4gSr-RRpO-VXKbUA3SmenWJa-fYHIz8"
    );
    return response.data.items;
  }
);

const popularBooksSlice = createSlice({
  name: "popularBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchPopularBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default popularBooksSlice.reducer;
export { fetchPopularBooks };
export const selectAllPopularBooks = (state) => state.popularBooks.books;
export const selectPopularBooksStatus = (state) => state.popularBooks.status;
export const selectPopularBooksError = (state) => state.popularBooks.error;
