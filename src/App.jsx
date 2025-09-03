import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Meat from "./pages/Meat";
import Cooked from "./pages/Cooked";
import Grocery from "./pages/Grocery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import { CartProvider } from "./components/CartContext";
import CartIcon from "./components/CartIcon";
import "./App.css";
import meatImg from "./assets/react.svg"; // Placeholder, replace with real meat image later

const GlowingButton = ({ children, onClick }) => (
  <button className="glowing-btn" onClick={onClick}>
    {children}
  </button>
);

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="butchery-container">
          <header className="butchery-header">
            <h1>Prime Cuts Butchery</h1>
            <p>Your one-stop shop for fresh meat, cooked delights, and groceries!</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Navbar />
              <CartIcon />
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/meat" element={<Meat />} />
            <Route path="/cooked" element={<Cooked />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
