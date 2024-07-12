import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useSelector((state) => state.popularBooks.books);
    const book = books.find((book) => book.id === bookId);

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className="container mx-auto p-2 lg:py-16">
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex justify-center w-full md:w-1/3 lg:w-1/2">
                    <img
                        src={book.volumeInfo.imageLinks?.thumbnail}
                        alt={book.volumeInfo.title}
                        className="w-1/2 md:w-full lg:w-1/2 rounded shadow"
                    />
                </div>
                <div className="md:w-2/3 md:pl-8 lg:px-8">
                    <h1 className="text-xl lg:text-3xl font-bold mb-4">{book.volumeInfo.title}</h1>
                    <p className="text-lg lg:text-lg mb-2 text-gray-800"><strong>Author:</strong> {book.volumeInfo.authors?.join(', ')}</p>
                    <p className="text-sm lg:text-md mb-2 text-gray-800"><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
                    <p className="text-sm lg:text-md mb-2 text-gray-800"><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
                    <p className="text-sm lg:text-md mb-2 text-gray-800"><strong>Page Count:</strong> {book.volumeInfo.pageCount}</p>
                    <p className="text-sm lg:text-md mb-2 text-gray-800"><strong>Language:</strong> {book.volumeInfo.language}</p>
                    <p className="text-sm lg:text-md mb-4 text-gray-800"><strong>Description:</strong> {book.volumeInfo.description}</p>
                    <button className="inline-flex items-center bg-transparent border border-red-600 bg-red-100 py-2 px-6 font-bold focus:outline-none hover:bg-red-400 rounded-none text-base mt-2 md:mt-0">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
