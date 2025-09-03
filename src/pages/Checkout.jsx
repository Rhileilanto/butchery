import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import GlowingButton from "../components/GlowingButton";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", address: "", phone: "", method: "delivery" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (item.qty * (item.price || 1)), 0);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  }

  if (cart.length === 0 && !submitted) {
    return (
      <main className="checkout-page">
        <h2>No items in cart</h2>
        <GlowingButton onClick={() => navigate("/meat")}>Shop Now</GlowingButton>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="checkout-page">
        <h2>Thank you for your order!</h2>
        <p>We have received your order and will contact you soon.</p>
        <GlowingButton onClick={() => navigate("/")}>Back to Home</GlowingButton>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          required={form.method === "delivery"}
          disabled={form.method === "pickup"}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <div style={{ margin: "1rem 0" }}>
          <label>
            <input
              type="radio"
              name="method"
              value="delivery"
              checked={form.method === "delivery"}
              onChange={handleChange}
            />
            Delivery
          </label>
          <label style={{ marginLeft: 16 }}>
            <input
              type="radio"
              name="method"
              value="pickup"
              checked={form.method === "pickup"}
              onChange={handleChange}
            />
            Pickup
          </label>
        </div>
        <h3>Order Summary</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item) => (
            <li key={item.name}>
              {item.qty} x {item.name}
            </li>
          ))}
        </ul>
        <h4>Total: ${total.toFixed(2)}</h4>
        <GlowingButton type="submit">Confirm Order</GlowingButton>
      </form>
    </main>
  );
} 