import React, { useState } from "react";
import "../App.css";

export default function AdminTabs({ children, tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="admin-tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {children[activeTab]}
      </div>
    </div>
  );
} 