import React from "react";
import "../App.css";

export default function GlowingButton({ children, onClick, type = "button" }) {
  return (
    <button className="glowing-btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
} 