import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import Footer from "./components/Footer";
import About from "./Pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Cart from "./components/Cart";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/best-seller" element={<Home />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
