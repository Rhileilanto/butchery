import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";
import groceries from "../data/groceries";
import "../App.css";

export default function Grocery() {
  const [selected, setSelected] = useState(null);
  return (
    <main>
      <h2>Groceries</h2>
      <div className="product-list">
        {groceries.map((item) => (
          <div key={item.name} onClick={() => setSelected(item)} style={{ cursor: "pointer" }}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
      <ProductDetailsModal product={selected} open={!!selected} onClose={() => setSelected(null)} />
    </main>
  );
} 