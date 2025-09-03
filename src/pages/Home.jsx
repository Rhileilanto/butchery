import React from "react";
import meatImg from "../assets/meat1.webp"; 
import meatImg1 from "../assets/dolores-preciado-7a--Ad6mkNE-unsplash.jpg";
import meatImg2 from "../assets/nrd-D6Tu_L3chLE-unsplash.jpg" ;
import GlowingButton from "../components/GlowingButton";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="highlight-section">
        <div className="highlight-img">
          <img src={meatImg} alt="Fresh Raw Meat" />
        </div>
        <div className="highlight-info">
          <h2>Fresh Raw Meat</h2>
          <p>Choose from our premium selection of raw beef, pork, chicken, and lamb cuts. All meat is sold by the kilogram - perfect for cooking at home!</p>
          <GlowingButton onClick={() => navigate("/meat")}>Shop Raw Meat</GlowingButton>
        </div>
      </section>
      <section className="highlight-section reverse">
         <div className="highlight-img">
          <img src={meatImg1} alt="Cooked Meals" />
        </div>
        <div className="highlight-info">
          <h2>Ready-to-Eat Meals</h2>
          <p>Don't feel like cooking? Order delicious prepared meals like grilled steaks, BBQ ribs, and roast chicken - ready to enjoy immediately!</p>
          <GlowingButton onClick={() => navigate("/cooked")}>Order Cooked Meals</GlowingButton>
        </div>
       
      </section>
      <section className="highlight-section">
        <div className="highlight-img">
          <img src={meatImg2} alt="Groceries" />
        </div>
        <div className="highlight-info">
          <h2>Fresh Groceries</h2>
          <p>Complete your meal with fresh vegetables, herbs, and kitchen essentials. All groceries are locally sourced and delivered with your meat order.</p>
          <GlowingButton onClick={() => navigate("/grocery")}>Shop Groceries</GlowingButton>
        </div>
      </section>
    </main>
  );
} 