import React, { useState } from 'react';
import bgImage from '../assets/bgImage1.jpg';
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../store/bookSlice';

const Hero = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const searchHandler = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchBooks(search));
    };

    return (
        <section className="max-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-none bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            <img src={bgImage} loading="lazy" alt="background" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-blue-200 mix-blend-multiply"></div>
            <div className="relative flex flex-col items-center p-2 sm:max-w-xl">
                <p className="mb-4 text-center text-lg font-bold text-indigo-200 sm:text-xl md:mb-8">Welcome to BookFindr</p>
                <h1 className="mb-8 lg:mb-4  text-center text-3xl font-bold text-white sm:text-5xl md:mb-12  md:text-4xl lg:text-4xl italic">Explore books and authors</h1>
                <form onSubmit={handleSearchSubmit} className="flex w-full flex-row gap-2.5 sm:justify-center bg-blue-100 bg-opacity-50 sm:px-6 sm:py-1 lg:py-2 text-center text-sm font-boldtext-slate-800">
                    <input onChange={searchHandler} type="text" placeholder="Books/Author/Subject" className='bg-transparent w-full py-2 px-2 rounded text-gray-900 placeholder-gray-900 outline-none  focus:none' />
                    <button type="submit">
                        <FaSearch className='mx-auto my-auto mr-1' />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;
