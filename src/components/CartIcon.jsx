import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

export default function CartIcon() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        marginLeft: "1rem",
      }}
      onClick={() => navigate("/cart")}
      title="View Cart"
    >
      <span style={{ fontSize: 28, color: "#ff4e50" }}>🛒</span>
      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: -6,
            right: -10,
            background: "#f9d423",
            color: "#fff",
            borderRadius: "50%",
            padding: "2px 7px",
            fontSize: 14,
            fontWeight: "bold",
            boxShadow: "0 0 8px #ff4e50",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
} 