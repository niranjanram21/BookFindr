import React, { useState, useEffect } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres, selectAllGenres, selectGenresStatus, selectGenresError } from '../store/genresSlice';
import { fetchBooks } from '../store/bookSlice';
import FilteredSearchResults from './FilteredSearchResults';

const Filters = () => {
    const [isGenresVisible, setIsGenresVisible] = useState(false);
    const dispatch = useDispatch();

    const genres = useSelector(selectAllGenres);
    const genresStatus = useSelector(selectGenresStatus);
    const genresError = useSelector(selectGenresError);

    // Fetch genres on component mount if not already fetched
    useEffect(() => {
        if (genresStatus === 'idle') {
            dispatch(fetchGenres());
        }
    }, [genresStatus, dispatch]);

    // Toggle genres visibility
    const toggleGenresVisibility = () => {
        setIsGenresVisible(!isGenresVisible);
    };

    // Handle genre click
    const handleGenreClick = (genre) => {
        dispatch(fetchBooks({ searchQuery: genre, category: 'subject' }));
        setIsGenresVisible(false); // Optionally hide genres after selection
    };

    return (
        <>
            <header className="text-gray-700 body-font">
                <div className="container flex flex-wrap py-2 lg:py-4 flex-col md:flex-row items-center">
                    <span
                        className="text-lg lg:text-xl font-bold my-2 italic flex flex-row gap-1 cursor-pointer"
                        onClick={toggleGenresVisibility}
                    >
                        <span>Search by genres</span>
                        <IoIosArrowDropdownCircle className={`relative top-1 transform transition-transform ${isGenresVisible ? 'rotate-180' : ''}`} />
                    </span>
                    {/* Conditional rendering for genres */}
                    <div className={`w-full md:flex md:w-auto ${isGenresVisible ? 'block' : 'hidden'} md:block`}>
                        {genresStatus === 'loading' && <p>Loading genres...</p>}
                        {genresStatus === 'failed' && <p>Error: {genresError}</p>}
                        {genresStatus === 'succeeded' && (
                            <nav className="md:ml-auto px-0 lg:px-16 md:mr-auto flex flex-wrap items-center text-base justify-center">
                                {genres.map((genre) => (
                                    <span
                                        key={genre}
                                        className="mr-2 lg:mr-4 my-1 lg:my-2 bg-blue-400 px-2 lg:px-4 py-1 lg:py-2 hover:bg-blue-100 bg-opacity-50 hover:cursor-pointer hover:text-gray-900 hover:scale-105 hover:shadow-gray-600 hover:shadow-md transition duration-200 ease-in-out"
                                        onClick={() => handleGenreClick(genre)}
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </nav>
                        )}
                    </div>
                </div>
            </header>
            <FilteredSearchResults />
        </>
    );
}

export default Filters;
