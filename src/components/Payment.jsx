import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cartSlice';
import { FaCreditCard } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("creditCard");

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    if (cartItems.length === 0) {
        return <div className="container mx-auto px-4 py-2">Your cart is empty</div>;
    }

    return (
        <>
            <Header />
            <div className="bg-white py-6 sm:py-8 lg:py-6">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-20">
                    <div className="flex flex-col sm:flex-row overflow-hidden rounded-lg bg-gray-100">
                        {/* Cart Section */}
                        <div className="relative bg-gray-200 sm:w-1/2 lg:w-1/2 max-h-[650px] overflow-y-auto">
                            <div className="container mx-auto px-4 lg:px-8 py-4">
                                <h1 className="text-xl font-bold mb-4">Your Products</h1>
                                <div className="flex flex-col gap-2">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex justify-between items-center border rounded shadow bg-gradient-to-r from-red-50 to-blue-50 bg-opacity-20">
                                            <div className="flex items-center">
                                                <img
                                                    src={item.volumeInfo.imageLinks?.thumbnail}
                                                    alt={item.volumeInfo.title}
                                                    className="w-20 h-20 object-contain rounded shadow mr-4"
                                                />
                                                <div>
                                                    <h2 className="text-xs md:text-lg font-bold">{item.volumeInfo.title}</h2>
                                                    <p className="text-sm hidden md:block">Author: {item.volumeInfo.authors?.join(', ')}</p>
                                                    <p className="text-xs md:text-sm">Quantity: {item.quantity}</p>
                                                </div>
                                            </div>
                                            <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                                                <div className="flex flex-col ml-auto items-start gap-2">
                                                    <div className="flex h-10 w-20 overflow-hidden rounded border">
                                                        <input
                                                            type="number"
                                                            value={item.quantity}
                                                            readOnly
                                                            className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring"
                                                        />
                                                        <div className="flex flex-col divide-y border-l">
                                                            <button
                                                                onClick={() => handleAddToCart(item)}
                                                                className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                                                            >
                                                                +
                                                            </button>
                                                            <button
                                                                onClick={() => handleRemoveFromCart(item)}
                                                                className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                                                            >
                                                                -
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleRemoveFromCart(item)}
                                                        className="bg-red-500 text-xs md:text-sm text-white px-3 py-1 rounded hover:bg-red-600"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col items-end gap-4 mt-4">
                                    <div className="w-full rounded-lg bg-red-50 p-4 sm:max-w-xs">
                                        <div className="space-y-1">
                                            <div className="flex justify-between gap-4 text-gray-600">
                                                <span>Subtotal</span>
                                                <span>$0.00</span>
                                            </div>
                                            <div className="flex justify-between gap-4 text-gray-600">
                                                <span>Delivery Fee</span>
                                                <span>$1.99</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 border-t pt-4">
                                            <div className="flex items-start justify-between gap-4 text-gray-800">
                                                <span className="text-lg font-bold">Total</span>
                                                <span className="flex flex-col items-end">
                                                    <span className="text-lg font-bold">$1.99</span>
                                                    <span className="text-sm text-gray-500">including GST</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Section */}
                        <div className="flex w-full items-center p-4 sm:w-1/2 lg:w-1/2 lg:pl-10">
                            <div className="container mx-auto px-4 lg:px-8 py-4">
                                <h1 className="text-xl font-bold mb-4">Payment Info</h1>
                                <p className='my-2 text-gray-600'>Payment method:</p>
                                <ul className='w-full flex flex-col gap-2'>
                                    <li className='flex flex-row gap-1'>
                                        <input
                                            type="radio"
                                            className='mr-4'
                                            checked={paymentMethod === "creditCard"}
                                            onChange={() => setPaymentMethod("creditCard")}
                                        />
                                        <FaCreditCard className='relative top-1' />
                                        <p>Credit Card</p>
                                    </li>
                                    <li className='flex flex-row gap-1'>
                                        <input
                                            type="radio"
                                            className='mr-4'
                                            checked={paymentMethod === "UPI"}
                                            onChange={() => setPaymentMethod("UPI")}
                                        />
                                        <MdOutlinePayments className='relative top-1' />
                                        <p>UPI</p>
                                    </li>
                                    <li className='flex flex-row gap-1'>
                                        <input
                                            type="radio"
                                            className='mr-4'
                                            checked={paymentMethod === "Paypal"}
                                            onChange={() => setPaymentMethod("Paypal")}
                                        />
                                        <FaPaypal className='relative top-1' />
                                        <p>Paypal</p>
                                    </li>
                                    <li className='flex flex-row gap-1'>
                                        <input
                                            type="radio"
                                            className='mr-4'
                                            checked={paymentMethod === "COD"}
                                            onChange={() => setPaymentMethod("COD")}
                                        />
                                        <HiOutlineCash className='relative top-1' />
                                        <p>Cash on Delivery</p>
                                    </li>
                                </ul>

                                {paymentMethod === "creditCard" && (
                                    <div className='pr-8 md:pr-12 lg:pr-20'>
                                        <div className="mt-4 ">
                                            <label className="block text-sm font-medium text-gray-700">Name on Card</label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className='flex flex-row gap-2 mt-2'>

                                            <input type="number" className='w-12' max={4}/>
                                            <input type="number" />
                                            <input type="number" />
                                        </div>
                                    </div>

                                )}

                                {paymentMethod === "UPI" && (
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-gray-700">Enter UPI ID</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                )}

                                <p className="text-center text-xs text-gray-400 sm:text-left mt-4">By signing up to our newsletter you agree to our <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a> and <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Payment;
