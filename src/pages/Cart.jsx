import React from "react";
import { useCart } from "../components/CartContext";
import GlowingButton from "../components/GlowingButton";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (item.qty * (item.price || 1)), 0);

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <h2>Your Cart is Empty</h2>
        <GlowingButton onClick={() => navigate("/meat")}>Shop Now</GlowingButton>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h2>Your Cart</h2>
      <div className="product-list">
        {cart.map((item) => (
          <div className="product-card" key={item.name}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button onClick={() => updateQty(item.name, item.qty - 1)} disabled={item.qty <= 1}>-</button>
              <span style={{ margin: "0 8px" }}>{item.qty}</span>
              <button onClick={() => updateQty(item.name, item.qty + 1)}>+</button>
            </div>
            <GlowingButton onClick={() => removeFromCart(item.name)}>
              Remove
            </GlowingButton>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 24 }}>
        <h3>Total: ${total.toFixed(2)}</h3>
        <GlowingButton onClick={() => navigate("/checkout")}>Proceed to Checkout</GlowingButton>
        <button style={{ marginLeft: 16 }} onClick={clearCart}>Clear Cart</button>
      </div>
    </main>
  );
} 