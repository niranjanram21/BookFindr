import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllBooks, selectBooksStatus, selectBooksError } from '../store/bookSlice';

const FilteredSearchResults = () => {
    const [visibleCount, setVisibleCount] = useState(5); // Initially display 5 books
    const books = useSelector(selectAllBooks);
    const status = useSelector(selectBooksStatus);
    const error = useSelector(selectBooksError);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 5); // Load 5 more books
    };

    return (
        <div className="mt-8">
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Error: {error}</p>}
            {status === "succeeded" && (
                <>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {books.slice(0, visibleCount).map((book) => (
                            <div key={book.id} className="bg-white p-4 rounded shadow hover:cursor-pointer hover:scale-105 hover:bg-blue-50 hover:shadow-gray-600 hover:shadow-lg transition duration-200 ease-in-out">
                                <span className="relative h-48 lg:h-64 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={book.volumeInfo.imageLinks?.thumbnail}
                                        alt={book.volumeInfo.title}
                                        className="object-cover object-center w-11/12 h-full"
                                    />
                                </span>
                                <div className="mt-4">
                                    <h2 className="text-gray-500 title-font text-xs text-center font-medium">
                                        {book.volumeInfo.authors?.join(', ')}
                                    </h2>
                                    <h3 className="text-gray-900 text-sm lg:text-md text-center title-font mb-1">
                                        {book.volumeInfo.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleCount < books.length && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={handleLoadMore}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default FilteredSearchResults;
