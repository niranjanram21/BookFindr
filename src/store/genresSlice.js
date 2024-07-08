import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  genres: [],
  status: 'idle',
  error: null,
};

// List of common genres
const commonGenres = [
  "Fiction", "Non-fiction", "Mystery", "Fantasy", "Science Fiction", "Romance",
  "Thriller", "Horror", "Biography", "History", "Poetry", "Children's",
  "Young Adult", "Self-help", "Health", "Travel", "Science", "Religion",
  "True Crime", "Graphic Novels"
];

// Fetch genres by searching for each genre in the Google Books API
const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
  const genres = [];

  for (const genre of commonGenres) {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=1&key=AIzaSyAJ4gSr-RRpO-VXKbUA3SmenWJa-fYHIz8`
    );
    
    if (response.data.items && response.data.items.length > 0) {
      genres.push(genre);
    }
  }

  return genres;
});

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default genresSlice.reducer;

export const selectAllGenres = (state) => state.genres.genres;
export const selectGenresStatus = (state) => state.genres.status;
export const selectGenresError = (state) => state.genres.error;

export { fetchGenres };
