import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className="p-2 lg:p-4 h-72 lg:h-96 relative overflow-hidden transition duration-150 ease-in-out transform hover:scale-105 hover:cursor-pointer bg-white hover:bg-blue-200 shadow-lg">
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
    );
};

export default BookCard;
