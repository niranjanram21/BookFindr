// store/genresSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchGenreBooks } from './genreBooksSlice';

const initialState = {
    genres: [], // Keep genres initially empty
    status: 'idle',
    error: null,
};

const commonGenres = [
    "Fiction", "Non-fiction", "Mystery", "Fantasy", "Science Fiction", "Romance",
    "Thriller", "Horror", "Biography", "History", "Poetry", "Children's",
    "Young Adult", "Self-help", "Health", "Travel", "Science", "Religion",
    "True Crime", "Graphic Novels"
];

// Create a thunk to fetch genres if needed
const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
    const genres = [];

    for (const genre of commonGenres) {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=1&key=AIzaSyAJ4gSr-RRpO-VXKbUA3SmenWJa-fYHIz8`
            );
            
            if (response.data.items && response.data.items.length > 0) {
                genres.push(genre);
            }
        } catch (error) {
            console.error('Error fetching genre:', error);
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
            })
            .addCase(fetchGenreBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGenreBooks.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(fetchGenreBooks.rejected, (state, action) => {
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
