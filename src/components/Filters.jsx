// components/Filters.js
import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { fetchGenreBooks } from '../store/genreBooksSlice';

// Define static genres
const staticGenres = [
    "Fiction", "Non-fiction", "Mystery", "Fantasy", "Science Fiction", "Romance",
    "Thriller", "Horror", "Biography", "History", "Poetry", "Children's",
    "Young Adult", "Self-help", "Health", "Travel", "Science", "Religion",
    "True Crime", "Graphic Novels"
];

const Filters = () => {
    const [isGenresVisible, setIsGenresVisible] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState(null); // State to track selected genre
    const dispatch = useDispatch();

    const toggleGenresVisibility = () => {
        setIsGenresVisible(!isGenresVisible);
    };

    const handleGenreClick = (genre) => {
        dispatch(fetchGenreBooks({ searchQuery: genre }));
        setSelectedGenre(genre); // Set selected genre
        setIsGenresVisible(false); // Optionally hide genres after selection
    };

    return (
        <header className="text-gray-700 body-font">
            <div className="container flex flex-wrap py-2 lg:py-4 flex-col md:flex-row items-center">
                <span
                    className="text-lg lg:text-xl font-bold my-2  flex flex-row gap-1 cursor-pointer"
                    onClick={toggleGenresVisibility}
                >
                    <span>Search by genres</span>
                    <IoIosArrowDropdownCircle className={`relative top-1 transform transition-transform ${isGenresVisible ? 'rotate-180' : ''}`} />
                </span>
                <div className={`w-full md:flex md:w-auto ${isGenresVisible ? 'block' : 'hidden'} md:block`}>
                    <nav className="md:ml-auto px-0 lg:px-16 md:mr-auto flex flex-wrap items-center text-base justify-center">
                        {staticGenres.map((genre) => (
                            <span
                                key={genre}
                                className={`mr-2 lg:mr-4 my-1 lg:my-2 bg-blue-400 px-2 lg:px-4 py-1 lg:py-2 cursor-pointer hover:bg-blue-100 bg-opacity-50 transition duration-200 ease-in-out ${selectedGenre === genre ? 'text-gray-900 scale-105 shadow-gray-600 shadow-md' : 'text-gray-700'}`}
                                onClick={() => handleGenreClick(genre)}
                            >
                                {genre}
                            </span>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Filters;
