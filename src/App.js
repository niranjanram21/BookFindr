import React, { useEffect } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import About from "./Pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Cart from "./components/Cart";
import LoginSignup from "./components/LoginSignup";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/best-seller" element={<Home />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
