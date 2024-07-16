import React, { useState } from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

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
                <button className="inline-flex gap-4 text-blue-800 opacity-80 items-center bg-transparent border py-1 px-6 font-bold focus:outline-none text-lg lg:text-xl mt-2 md:mt-0">
                    <FaUser className='hover:text-blue-600 relative z-10 hover:text-2xl'/>
                    <Link to='/cart' ><FaShoppingCart /></Link>
                </button>
            </div>
        </header>
    );
};

export default Header;
