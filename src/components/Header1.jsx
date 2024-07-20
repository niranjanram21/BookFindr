import React from 'react';
import { FaUser } from "react-icons/fa";

const Header1 = () => {
    return (
        <header className="text-gray-600 body-font sticky top-0 z-10 bg-gradient-to-r from-red-100 to-blue-100 bg-opacity-20">
            <div className="container mx-auto flex flex-row px-4 lg:px-20 py-4 md:py-4 items-center">
                <div className="flex title-font font-extrabold items-center text-2xl bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                    <span>Book</span>
                    <span>Findr</span>
                </div>
              
                <button className="ml-auto inline-flex gap-4 text-blue-800 opacity-80 items-center bg-transparent border font-bold focus:outline-none text-lg lg:text-xl mt-2 md:mt-0">
                    <span><FaUser className='hover:text-blue-600' /></span>
                </button>
            </div>
        </header>
    );
};

export default Header1;
