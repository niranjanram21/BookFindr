import React, { useState } from 'react';

const Header = () => {
    const [active, setActive] = useState('Home');

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap px-2 lg:px-16 py-4 flex-col md:flex-row items-center">
                <span className="flex title-font font-bold items-center mb-4 md:mb-0 text-2xl bg-gradient-to-r from-blue-800 to-red-400 bg-clip-text text-transparent">
                    <span>Book</span>
                    <span>Findr</span>
                </span>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <span
                        className={`mr-5 hover:cursor-pointer hover:text-gray-900 ${active === 'Home' ? 'text-bold border-b-2 border-blue-600' : ''}`}
                        onClick={() => setActive('Home')}
                    >
                        Home
                    </span>
                    <span
                        className={`mr-5 hover:cursor-pointer hover:text-gray-900 ${active === 'About' ? 'text-bold border-b-2 border-blue-600' : ''}`}
                        onClick={() => setActive('About')}
                    >
                        About
                    </span>
                    <span
                        className={`mr-5 hover:cursor-pointer hover:text-gray-900 ${active === 'Popular' ? 'text-bold border-b-2 border-blue-600' : ''}`}
                        onClick={() => setActive('Popular')}
                    >
                        Popular
                    </span>
                    <span
                        className={`mr-5 hover:cursor-pointer hover:text-gray-900 ${active === 'Best Seller' ? 'text-bold border-b-2 border-blue-600' : ''}`}
                        onClick={() => setActive('Best Seller')}
                    >
                        Best Seller
                    </span>
                </nav>
                <button className="inline-flex items-center bg-blue-100 border-0 py-2 px-6 font-bold focus:outline-none hover:bg-blue-200 rounded-none text-base mt-4 md:mt-0">
                    Login
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
