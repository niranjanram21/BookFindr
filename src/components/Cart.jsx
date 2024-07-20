// components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cartSlice';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
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
            <div className="container mx-auto px-4 lg:px-20 py-4">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                <div className="flex flex-col gap-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border p-4 rounded shadow bg-gradient-to-r from-red-50 to-blue-50 bg-opacity-20">
                            <div className="flex items-center">
                                <img
                                    src={item.volumeInfo.imageLinks?.thumbnail}
                                    alt={item.volumeInfo.title}
                                    className="w-20 h-20 object-contain rounded shadow mr-4"
                                />
                                <div>
                                    <h2 className="text-lg font-bold">{item.volumeInfo.title}</h2>
                                    <p className="text-sm">Author: {item.volumeInfo.authors?.join(', ')}</p>
                                    <p className="text-sm">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                            <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                                <div className="flex flex-col items-start gap-2">
                                    <div className="flex h-12 w-20 overflow-hidden rounded border">
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
                                        className="bg-red-500 text-sm text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to='/checkout' className="flex justify-end">
                    <button className="bg-red-100 border border-red-600 text-sm text-gray-800 hover:text-gray-100 px-4 py-2 rounded hover:bg-red-600 my-4">
                        Check Out
                    </button>
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
