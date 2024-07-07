import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllBooks, selectBooksStatus, selectBooksError } from '../store/bookSlice';

const SearchResults = () => {
    const books = useSelector(selectAllBooks);
    const status = useSelector(selectBooksStatus);
    const error = useSelector(selectBooksError);

    return (
        <div className="mt-8">
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Error: {error}</p>}
            {status === "succeeded" && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {books.map((book) => (
                        <div key={book.id} className="bg-white p-4 rounded shadow">
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
            )}
        </div>
    );
};

export default SearchResults;
