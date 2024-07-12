// store/filteredBooksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchFilteredBooks = createAsyncThunk('filteredBooks/fetchFilteredBooks', async ({ searchQuery, category }) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}+${category}`);
  return response.data.items;
});

const filteredBooksSlice = createSlice({
  name: 'filteredBooks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFilteredBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchFilteredBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default filteredBooksSlice.reducer;

export const selectAllFilteredBooks = (state) => state.filteredBooks.books;
export const selectFilteredBooksStatus = (state) => state.filteredBooks.status;
export const selectFilteredBooksError = (state) => state.filteredBooks.error;
