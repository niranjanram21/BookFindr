import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Add useDispatch here
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import PopularBooks from './PopularBooks';
import img from '../assets/saleImg.jpg';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllBooks } from '../store/bookSlice';
import { selectAllPopularBooks } from '../store/popularBooksSlice';
import { selectAllGenreBooks } from '../store/genreBooksSlice';
import { addToCart, removeFromCart } from '../store/cartSlice'; // Import actions from cartSlice
import Header from './Header';
import Footer from './Footer';



// Create a combined selector using createSelector
const selectCombinedData = createSelector(
    [selectAllBooks, selectAllPopularBooks, selectAllGenreBooks],
    (books, popularBooks, genreBooks) => ({
        books: [...books, ...popularBooks, ...genreBooks],
    })
);

const BookDetails = () => {
    const { bookId } = useParams();
    const dispatch = useDispatch(); // Initialize dispatch
    const { books } = useSelector(selectCombinedData);
    const cartItems = useSelector((state) => state.cart.items); // Get cart items from the state
    const book = books.find((book) => book.id === bookId);

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    const toggleDescription = () => {
        setExpanded(!expanded);
    };

    const isInCart = cartItems.some(item => item.id === bookId);

    const handleCartClick = () => {
        if (isInCart) {
            dispatch(removeFromCart(book));
        } else {
            dispatch(addToCart(book));
        }
    };

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <>
            <Header />
            <div className="container px-4 py-2 lg:px-20 lg:py-4">
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex justify-center w-full md:w-1/3 lg:w-2/3 mx-auto p-2 lg:py-12">
                        <div className="w-1/2 md:w-full lg:w-2/3 h-64 md:h-96 lg:h-120 flex items-center justify-center">
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail}
                                alt={book.volumeInfo.title}
                                className="h-full object-contain rounded shadow"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8 lg:px-8 bg-white bg-opacity-60 mx-auto p-2 lg:py-12">
                        <h1 className="text-xl lg:text-3xl font-bold mb-4">{book.volumeInfo.title}</h1>
                        <div className='flex flex-row gap-1 mb-2 font-bold text-gray-800'>
                            <span>Rating:</span>
                            <span className="flex flex-row text-red-500 relative top-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                        </div>
                        <p className="text-dm lg:text-md mb-2 text-gray-800"><strong>Author:</strong> {book.volumeInfo.authors?.join(', ')}</p>
                        <p className="text-sm lg:text-md mb-2 text-gray-800"><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
                        <p className="text-sm lg:text-md mb-2 text-gray-800"><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
                        <p className="text-sm lg:text-md mb-2 text-gray-800"><strong>Page Count:</strong> {book.volumeInfo.pageCount}</p>
                        <p className="text-sm lg:text-md mb-2 text-gray-800"><strong>Language:</strong> {book.volumeInfo.language}</p>
                        {expanded ? (
                            <p className="text-sm lg:text-md text-gray-800"><strong>Description:</strong> {book.volumeInfo.description}</p>
                        ) : (
                            <div>
                                <p className="text-sm lg:text-md text-gray-800"><strong>Description:</strong> {book.volumeInfo.description.slice(0, 600)}</p>
                                <button onClick={toggleDescription} className="text-red-600 hover:underline focus:outline-none">read more</button>
                            </div>
                        )}
                        {
                            !expanded ? <></> : <button onClick={toggleDescription} className="text-red-600 hover:underline focus:outline-none">read less</button>
                        }
                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={handleCartClick}
                                className="inline-flex items-center bg-transparent border border-red-600 bg-red-400 py-2 px-6 font-bold focus:outline-none hover:bg-red-600 hover:text-white hover:scale-110 transition duration-200 ease-in-out rounded-none text-base mt-2 md:mt-0"                            >
                                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                            </button>
                            <button className="inline-flex items-center bg-transparent border border-red-600 bg-red-400 py-2 px-6 font-bold focus:outline-none hover:bg-red-600 hover:text-white hover:scale-110 transition duration-200 ease-in-out rounded-none text-base mt-2 md:mt-0">Buy Now</button>
                        </div>
                    </div>
                </div>

                <PopularBooks title="Recommended Books" />

                <div data-aos="fade-up" className="py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl ">
                        <div className="flex flex-col overflow-hidden rounded-lg bg-gray-300 bg-opacity-50 sm:flex-row md:h-80">
                            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                                <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">Sale<br />Up to 70% off.</h2>
                                <p className="mb-8 max-w-md text-gray-600">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                                <div className="mt-auto">
                                    <span className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:cursor-pointer hover:bg-blue-200 focus-visible:ring active:bg-blue-200 md:text-base">Explore now</span>
                                </div>
                            </div>
                            <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                                <img src={img} loading="lazy" alt="offerImage" className="h-full w-full object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BookDetails;
