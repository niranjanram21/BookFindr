import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    const [active, setActive] = useState('Home');

    return (
        <header className="text-gray-600 body-font sticky top-0 z-10 bg-gradient-to-r from-red-100 to-blue-100 bg-opacity-20">
            <div className="container mx-auto flex flex-wrap px-2 lg:px-20 py-2 md:py-4 flex-col md:flex-row items-center">
                <RouterLink to='/' className="flex title-font font-extrabold items-center mb-2 md:mb-0 text-2xl bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                    <span>Book</span>
                    <span>Findr</span>
                </RouterLink>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <ScrollLink
                        to='heroSection'
                        smooth={true}
                        duration={500}
                        className={`mr-5 hover:cursor-pointer hover:text-gray-900 ${active === 'Home' ? 'text-bold border-b-2 border-blue-600' : ''}`}
                        onClick={() => setActive('Home')}
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        to='popularBooksSection'
                        smooth={true}
                        duration={500}
                        className={`mr-5 hover:cursor-pointer hover:text-gray-900 ${active === 'Popular Books' ? 'text-bold border-b-2 border-blue-600' : ''}`}
                        onClick={() => setActive('Popular Books')}
                    >
                        Popular Books
                    </ScrollLink>
                    <ScrollLink
                        to='authorsSection'
                        smooth={true}
                        duration={500}
                        className={`mr-5 hover:cursor-pointer hover:text-gray-900 ${active === 'Authors' ? 'text-bold border-b-2 border-blue-600' : ''}`}
                        onClick={() => setActive('Authors')}
                    >
                        Authors
                    </ScrollLink>
                    <ScrollLink
                        to='aboutSection'
                        smooth={true}
                        duration={500}
                        className={`mr-5 hover:cursor-pointer hover:text-gray-900 ${active === 'About' ? 'text-bold border-b-2 border-blue-600' : ''}`}
                        onClick={() => setActive('About')}
                    >
                        About
                    </ScrollLink>
                </nav>
                <button className="inline-flex items-center bg-transparent border border-blue-600 py-1 px-6 font-bold focus:outline-none hover:bg-blue-200 rounded-none text-base mt-2 md:mt-0">
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
