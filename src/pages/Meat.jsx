import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";
import meats from "../data/meats";
import "../App.css";

export default function Meat() {
  const [selected, setSelected] = useState(null);

  // Get unique types for grouping
  const types = Array.from(new Set(meats.map(m => m.type)));

  // Group by type
  const grouped = types.reduce((acc, type) => {
    acc[type] = meats.filter(m => m.type === type);
    return acc;
  }, {});

  return (
    <main>
      <h2>Fresh Raw Meat</h2>
      <p style={{ textAlign: "center", marginBottom: "2rem", color: "#666" }}>
        Premium quality raw meat, sold by the kilogram. All our meat is fresh and locally sourced.
      </p>
      {/* Grouped by type */}
      {types.map(type => (
        grouped[type].length > 0 && (
          <section key={type} style={{ marginBottom: '2rem' }}>
            <h3 style={{ borderBottom: '2px solid #eee', paddingBottom: '0.5rem', marginTop: '2rem' }}>{type}</h3>
            <div className="product-list">
              {grouped[type].map(meat => (
                <div key={meat.name} onClick={() => setSelected(meat)} style={{ cursor: "pointer" }}>
                  <ProductCard product={meat} />
                </div>
              ))}
            </div>
          </section>
        )
      ))}
      <ProductDetailsModal product={selected} open={!!selected} onClose={() => setSelected(null)} />
    </main>
  );
} 