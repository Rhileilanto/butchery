import React from "react";
import GlowingButton from "./GlowingButton";
import { useCart } from "./CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  
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
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      {/* Badges */}
      {product.badges && product.badges.length > 0 && (
        <div className="product-badges">
          {product.badges.map((badge, i) => (
            <span key={i} className="badge">{badge}</span>
          ))}
        </div>
      )}
      <p>{product.desc}</p>
      {/* Nutrition Info */}
      {product.nutrition && (
        <div className="nutrition-info">
          <span>Protein: {product.nutrition.protein}g</span>{' | '}
          <span>Fat: {product.nutrition.fat}g</span>{' | '}
          <span>Calories: {product.nutrition.calories} kcal</span>
        </div>
      )}
      <div className="product-price">
        <span className="price">{displayPrice()}</span>
        <span className="weight">{displayServingInfo()}</span>
      </div>
      <GlowingButton onClick={() => addToCart(product)}>Add to Cart</GlowingButton>
    </div>
  );
} 