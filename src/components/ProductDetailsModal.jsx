import React from "react";
import GlowingButton from "./GlowingButton";
import { useCart } from "./CartContext";
import "../App.css";

export default function ProductDetailsModal({ product, open, onClose }) {
  const { addToCart } = useCart();
  
  if (!open || !product) return null;

  const displayPrice = () => {
    if (product.pricePerKg) {
      return `$${product.price.toFixed(2)}/kg`;
    }
    return `$${product.price.toFixed(2)}`;
  };

  const displayServingInfo = () => {
    if (product.weight) {
      return `(${product.weight})`;
    }
    if (product.serving) {
      return `(${product.serving})`;
    }
    return "";
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={product.img} alt={product.name} style={{ width: 180, borderRadius: 12, marginBottom: 16 }} />
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <div className="modal-price">
          <span className="price">{displayPrice()}</span>
          <span className="weight">{displayServingInfo()}</span>
        </div>
        <GlowingButton onClick={() => { addToCart(product); onClose(); }}>Add to Cart</GlowingButton>
      </div>
    </div>
  );
} 