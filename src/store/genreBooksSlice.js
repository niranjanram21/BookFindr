// store/genreBooksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchGenreBooks = createAsyncThunk('genreBooks/fetchGenreBooks', async ({ searchQuery }) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${searchQuery}&maxResults=36`);
  return response.data.items;
});

const genreBooksSlice = createSlice({
  name: 'genreBooks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenreBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGenreBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchGenreBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default genreBooksSlice.reducer;

export const selectAllGenreBooks = (state) => state.genreBooks.books;
export const selectGenreBooksStatus = (state) => state.genreBooks.status;
export const selectGenreBooksError = (state) => state.genreBooks.error;
