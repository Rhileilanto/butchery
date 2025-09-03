import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/all-products", label: "All Products" },
  { to: "/meat", label: "Meat" },
  { to: "/cooked", label: "Cooked" },
  { to: "/grocery", label: "Grocery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="butchery-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive ? "glowing-btn active" : "glowing-btn"
          }
          end={item.to === "/"}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
} 