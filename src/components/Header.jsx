import React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { IoExitOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebaseConfig';

const Header = () => {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <header className="text-gray-600 body-font sticky top-0 z-10 bg-gradient-to-r from-red-100 to-blue-100 bg-opacity-20">
            <div className="container mx-auto flex flex-wrap px-2 lg:px-20 py-2 md:py-4 flex-col md:flex-row items-center">
                <RouterLink to='/home' className="flex title-font font-extrabold items-center mb-2 md:mb-0 text-2xl bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                    <span>Book</span>
                    <span>Findr</span>
                </RouterLink>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <ScrollLink
                        to='heroSection'
                        smooth={true}
                        duration={500}
                        className="mr-5 hover:cursor-pointer hover:text-gray-900 "
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        to='popularBooksSection'
                        smooth={true}
                        duration={500}
                        className="mr-5 hover:cursor-pointer hover:text-gray-900 "
                    >
                        Popular Books
                    </ScrollLink>
                    <ScrollLink
                        to='authorsSection'
                        smooth={true}
                        duration={500}
                        className="mr-5 hover:cursor-pointer hover:text-gray-900 "
                    >
                        Authors
                    </ScrollLink>
                    <ScrollLink
                        to='aboutSection'
                        smooth={true}
                        duration={500}
                        className="mr-5 hover:cursor-pointer hover:text-gray-900 "
                    >
                        About
                    </ScrollLink>
                </nav>
                <div className="inline-flex gap-4 text-blue-800 opacity-80 items-center bg-transparent border py-1 px-6 font-bold focus:outline-none text-lg lg:text-xl mt-2 md:mt-0">
                    <Link to='/cart'><FaShoppingCart className='hover:text-blue-600' /></Link>
                    <button onClick={logout} className='flex flex-row gap-2 border hover:bg-opacity-90 bg-red-100 hover:bg-red-600 hover:text-gray-100  border-red-500 text-gray-800 py-1 px-3 rounded-full transition duration-100 ease-in-out'>
                        <span className='text-sm'>sign-out</span>
                        <IoExitOutline className='' />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
