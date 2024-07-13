import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularBooks, selectAllPopularBooks, selectPopularBooksStatus, selectPopularBooksError } from '../store/popularBooksSlice';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const PopularBooks = (props) => {
    const [visibleCount, setVisibleCount] = useState(6);

    const dispatch = useDispatch();
    const books = useSelector(selectAllPopularBooks);
    const status = useSelector(selectPopularBooksStatus);
    const error = useSelector(selectPopularBooksError);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPopularBooks());
        }
    }, [status, dispatch]);

    return (
        <div data-aos="fade-up">
            <span
                className="text-gray-700  text-lg lg:text-xl font-bold my-2  flex flex-row gap-1 cursor-pointer"
            >
                <span>{props.title}</span>
                <IoIosArrowDropdownCircle className="relative top-1 transform transition-transform" />
            </span>
            <div className="my-8">
                {status === 'loading' && (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                        {Array.from({ length: visibleCount }).map((_, index) => (
                            <Shimmer key={index} />
                        ))}
                    </div>
                )}
                {status === 'failed' && <p>Error: {error}</p>}
                {status === 'succeeded' && (
                    <>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                            {books.slice(0, visibleCount).map((book) => (
                                <Link to={`/book/${book.id}`} key={book.id}>
                                    <div className="bg-white p-2 lg:p-4 md:p-2 rounded shadow hover:cursor-pointer hover:scale-105 hover:bg-gradient-to-r from-red-100 to-blue-100 bg-opacity-20 hover:shadow-gray-600 hover:shadow-lg transition duration-200 ease-in-out h-80">
                                        <div className="relative h-48 lg:h-60 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={book.volumeInfo.imageLinks?.thumbnail}
                                                alt={book.volumeInfo.title}
                                                className="object-cover object-center w-11/12 h-full"
                                            />
                                        </div>
                                        <div className="my-4 text-center">
                                            <h2 className="text-gray-500 title-font text-xs font-medium truncate">
                                                {book.volumeInfo.authors?.join(', ')}
                                            </h2>
                                            <h3 className="text-gray-900 text-sm lg:text-md title-font mb-1 truncate">
                                                {book.volumeInfo.title}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {visibleCount < books.length && (
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={handleLoadMore}
                                    className="px-4 py-2 bg-blue-100 border border-blue-500 hover:bg-opacity-90 hover:text-white rounded-full hover:bg-blue-600 transition duration-100 ease-in-out"
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default PopularBooks;
