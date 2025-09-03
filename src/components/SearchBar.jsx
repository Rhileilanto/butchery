import React, { useState } from "react";
import "../App.css";

export default function SearchBar({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  function handleSearch(e) {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  }

  function handleFilter(e) {
    const value = e.target.value;
    setCategory(value);
    onFilter(value);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <select value={category} onChange={handleFilter} className="filter-select">
        <option value="all">All Categories</option>
        <option value="meat">Meat</option>
        <option value="cooked">Cooked</option>
        <option value="grocery">Grocery</option>
      </select>
    </div>
  );
} 