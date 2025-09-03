import React, { useState, useEffect, useRef } from "react";
import "../App.css";

export default function MeatCarousel({ meats }) {
  const [index, setIndex] = useState(0);
  const total = meats.length;
  const intervalRef = useRef();
  const [paused, setPaused] = useState(false);

  function prev() {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }
  function next() {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [total, paused]);

  function handleMouseEnter() {
    setPaused(true);
  }
  function handleMouseLeave() {
    setPaused(false);
  }

  return (
    <div
      className="meat-carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="carousel-arrow left" onClick={prev}>&lt;</button>
      <div className="carousel-slide meat-list-slide">
        <div className="meat-list-info">
          <h3>{meats[index].name}</h3>
          <div className="carousel-price">
            <span className="price">${meats[index].price.toFixed(2)}</span>
            <span className="perkg">/kg</span>
          </div>
        </div>
      </div>
      <button className="carousel-arrow right" onClick={next}>&gt;</button>
      <div className="carousel-dots">
        {meats.map((_, i) => (
          <span
            key={i}
            className={"carousel-dot" + (i === index ? " active" : "")}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
} 