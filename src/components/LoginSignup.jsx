// components/LoginSignup.js
import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { auth } from '../utils/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header1 from './Header1';
import Footer from './Footer';

const LoginSignup = () => {
    const [signupState, setSignupState] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleStateChange = () => {
        setSignupState((prevState) => (prevState === 'login' ? 'signup' : 'login'));
    };

    const handleLoginSignupSuccess = (user) => {
        localStorage.setItem('currentUser', JSON.stringify({ id: user.uid, email: user.email }));
        window.location.reload();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let user;
            if (signupState === 'signup') {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                user = userCredential.user;
                alert('User registered successfully!');
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                user = userCredential.user;
                alert('User logged in successfully!');
                navigate('/home');
            }
            handleLoginSignupSuccess(user);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <Header1 />
            <div className="py-24 sm:py-16 lg:py-16">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-44">
                    <div className="flex overflow-hidden rounded-lg bg-blue-200 bg-opacity-35">
                        <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
                            <div className="flex w-full flex-col items-center sm:items-center">
                                <form onSubmit={handleSubmit} className="w-full bg-transparent pb-4 px-8 lg:px-16 mb-2 rounded">
                                    <h1 className="mb-1 sm:mb-8 text-xl font-extrabold bg-gradient-to-r from-blue-400 to-red-700 text-transparent bg-clip-text sm:text-2xl lg:text-3xl">
                                        {signupState === 'login' ? 'Log in' : 'Sign up'}
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                        {signupState === 'signup' && (
                                            <div>
                                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Username</label>
                                                <div className="flex flex-row gap-2 w-full bg-white rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                    <CiUser className='relative top-2 font-extrabold' />
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        className='w-full outline-none'
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <div>
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <div className="flex flex-row gap-2 w-full bg-white rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                <AiOutlineMail className='relative top-2 font-extrabold' />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className='w-full outline-none'
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                            <div className="flex flex-row gap-2 w-full bg-white rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                <RiLockPasswordLine className='relative top-2 font-extrabold' />
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className='w-full outline-none'
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="text-white bg-gradient-to-r from-red-600 to-blue-600 border-0 py-2 px-6 mt-2 focus:outline-none opacity-90 hover:opacity-100 rounded-full text-lg"
                                        >
                                            {signupState === 'login' ? 'Log in' : 'Sign up'}
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-3">
                                        {signupState === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
                                        <span
                                            onClick={handleStateChange}
                                            className="cursor-pointer text-blue-500 transition duration-100 hover:text-blue-400 active:text-blue-700"
                                        >
                                            {signupState === 'login' ? 'Register' : 'Log in'}
                                        </span>
                                    </p>
                                    <p className="text-center mt-2 text-sm text-gray-400 sm:text-left">
                                        By signing up to our newsletter you agree to our <span className="underline transition duration-100 hover:text-blue-500 active:text-blue-600">Term of Service</span> and <span className="underline transition duration-100 hover:text-blue-500 active:text-blue-600">Privacy Policy</span>.
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="relative p-2 hidden bg-white sm:block sm:w-1/3 lg:w-1/2">
                            <img src='https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?t=st=1721154046~exp=1721157646~hmac=df1efc1329abff5260114126e6d3f5f7eb389764d52ae8a5e58d3bb3504fc25f&w=740' className='object-cover object-center lg:h-full p-8 lg:p-2' alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginSignup;
