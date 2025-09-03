import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";
import SearchBar from "../components/SearchBar";
import meats from "../data/meats";
import groceries from "../data/groceries";
import cookedDishes from "../data/cooked";
import "../App.css";

const allProducts = [
  // Meat products
  ...meats.map(item => ({ ...item, category: "meat" })),
  // Cooked products
  ...cookedDishes.map(item => ({ ...item, category: "cooked" })),
  // Grocery products
  ...groceries.map(item => ({ ...item, category: "grocery" })),
];

export default function AllProducts() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selected, setSelected] = useState(null);

  function handleSearch(searchTerm) {
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  function handleFilter(category) {
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  }

  return (
    <main>
      <h2>All Products</h2>
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.name} onClick={() => setSelected(product)} style={{ cursor: "pointer" }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>No products found.</p>
      )}
      <ProductDetailsModal product={selected} open={!!selected} onClose={() => setSelected(null)} />
    </main>
  );
} 