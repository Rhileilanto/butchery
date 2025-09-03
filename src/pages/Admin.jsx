import React, { useState } from "react";
import GlowingButton from "../components/GlowingButton";
import AdminLogin from "../components/AdminLogin";
import AdminTabs from "../components/AdminTabs";
import OrderManagement from "../components/OrderManagement";
import Analytics from "../components/Analytics";
import EmailNotifications from "../components/EmailNotifications";
import "../App.css";

const initialProducts = [
  { id: 1, name: "Beef Steak", desc: "Premium grass-fed beef steak.", price: 12.99, category: "meat", img: "placeholder" },
  { id: 2, name: "Grilled Beef Steak", desc: "Juicy grilled beef steak with herbs.", price: 15.99, category: "cooked", img: "placeholder" },
  { id: 3, name: "Tomatoes", desc: "Fresh, ripe tomatoes.", price: 2.99, category: "grocery", img: "placeholder" },
];

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", desc: "", price: "", category: "meat" });

  function handleLogin(success) {
    setIsAuthenticated(success);
  }

  function handleLogout() {
    setIsAuthenticated(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editing) {
      setProducts(products.map(p => p.id === editing ? { ...form, id: editing, img: "placeholder" } : p));
      setEditing(null);
    } else {
      setProducts([...products, { ...form, id: Date.now(), img: "placeholder" }]);
    }
    setForm({ name: "", desc: "", price: "", category: "meat" });
  }

  function handleEdit(product) {
    setEditing(product.id);
    setForm({ name: product.name, desc: product.desc, price: product.price, category: product.category });
  }

  function handleDelete(id) {
    setProducts(products.filter(p => p.id !== id));
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  if (!isAuthenticated) {
    return (
      <main className="admin-page">
        <AdminLogin onLogin={handleLogin} />
      </main>
    );
  }

  const ProductManagement = (
    <div>
      <div className="admin-section">
        <h3>{editing ? "Edit Product" : "Add New Product"}</h3>
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="desc"
            placeholder="Description"
            value={form.desc}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            step="0.01"
            required
          />
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="meat">Meat</option>
            <option value="cooked">Cooked</option>
            <option value="grocery">Grocery</option>
          </select>
          <div className="form-buttons">
            <GlowingButton type="submit">
              {editing ? "Update Product" : "Add Product"}
            </GlowingButton>
            {editing && (
              <button type="button" onClick={() => { setEditing(null); setForm({ name: "", desc: "", price: "", category: "meat" }); }}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="admin-section">
        <h3>Manage Products</h3>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="admin-product-card">
              <h4>{product.name}</h4>
              <p>{product.desc}</p>
              <p><strong>${product.price}</strong> - {product.category}</p>
              <div className="admin-actions">
                <GlowingButton onClick={() => handleEdit(product)}>Edit</GlowingButton>
                <button onClick={() => handleDelete(product.id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="admin-page">
      <div className="admin-header">
        <h2>Admin Panel</h2>
        <GlowingButton onClick={handleLogout}>Logout</GlowingButton>
      </div>
      
      <AdminTabs tabs={["Product Management", "Order Management", "Analytics", "Email Notifications"]}>
        {ProductManagement}
        <OrderManagement />
        <Analytics />
        <EmailNotifications />
      </AdminTabs>
    </main>
  );
} 