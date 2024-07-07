import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, selectAllBooks, selectBooksStatus, selectBooksError } from '../store/bookSlice';
import BookCard from './BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const LatestBooks = () => {
    const dispatch = useDispatch();
    const books = useSelector(selectAllBooks);
    const status = useSelector(selectBooksStatus);
    const error = useSelector(selectBooksError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBooks());
        }
    }, [dispatch, status]);

    return (
        <section className="text-gray-600 body-font">
            <div className="container py-12 mx-auto">
                <h1 className='text-xl font-bold my-2'>Newly Published</h1>
                {status === 'loading' ? (
                    <div>Loading...</div>
                ) : status === 'failed' ? (
                    <div>Error: {error}</div>
                ) : (
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={7}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 30 },
                            1024: { slidesPerView: 5, spaceBetween: 40 },
                        }}
                        navigation
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {books.map((book) => (
                            <SwiperSlide key={book.id}>
                                <BookCard book={book} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default LatestBooks;
