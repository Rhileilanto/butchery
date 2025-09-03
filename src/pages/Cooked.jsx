import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";
import cookedDishes from "../data/cooked";
import "../App.css";

export default function Cooked() {
  const [selected, setSelected] = useState(null);
  return (
    <main>
      <h2>Cooked Meat Dishes</h2>
      <p style={{ textAlign: "center", marginBottom: "2rem", color: "#666" }}>
        Ready-to-eat meals prepared fresh daily. Perfect for when you want a delicious meal without cooking.
      </p>
      <div className="product-list">
        {cookedDishes.map((dish) => (
          <div key={dish.name} onClick={() => setSelected(dish)} style={{ cursor: "pointer" }}>
            <ProductCard product={dish} />
          </div>
        ))}
      </div>
      <ProductDetailsModal product={selected} open={!!selected} onClose={() => setSelected(null)} />
    </main>
  );
} 