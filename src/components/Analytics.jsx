import React from "react";
import "../App.css";

// Sample analytics data
const analyticsData = {
  totalOrders: 47,
  totalRevenue: 1247.89,
  averageOrderValue: 26.55,
  popularProducts: [
    { name: "Beef Steak", sales: 23 },
    { name: "Grilled Beef Steak", sales: 18 },
    { name: "Chicken Breast", sales: 15 },
    { name: "Tomatoes", sales: 12 },
    { name: "Pork Chops", sales: 8 }
  ],
  dailySales: [
    { day: "Mon", sales: 145.50 },
    { day: "Tue", sales: 189.75 },
    { day: "Wed", sales: 167.25 },
    { day: "Thu", sales: 203.40 },
    { day: "Fri", sales: 278.90 },
    { day: "Sat", sales: 312.60 },
    { day: "Sun", sales: 185.49 }
  ]
};

export default function Analytics() {
  const maxSales = Math.max(...analyticsData.dailySales.map(d => d.sales));

  return (
    <div className="analytics">
      <h3>Business Analytics</h3>
      
      <div className="analytics-grid">
        <div className="analytics-card">
          <h4>📊 Total Orders</h4>
          <div className="analytics-value">{analyticsData.totalOrders}</div>
        </div>
        
        <div className="analytics-card">
          <h4>💰 Total Revenue</h4>
          <div className="analytics-value">${analyticsData.totalRevenue.toFixed(2)}</div>
        </div>
        
        <div className="analytics-card">
          <h4>📈 Avg Order Value</h4>
          <div className="analytics-value">${analyticsData.averageOrderValue.toFixed(2)}</div>
        </div>
        
        <div className="analytics-card">
          <h4>🎯 Conversion Rate</h4>
          <div className="analytics-value">12.5%</div>
        </div>
      </div>

      <div className="analytics-sections">
        <div className="analytics-section">
          <h4>📈 Weekly Sales</h4>
          <div className="sales-chart">
            {analyticsData.dailySales.map((day, index) => (
              <div key={index} className="chart-bar">
                <div 
                  className="bar-fill"
                  style={{ 
                    height: `${(day.sales / maxSales) * 100}%`,
                    backgroundColor: day.sales > 200 ? '#32cd32' : '#ff4e50'
                  }}
                ></div>
                <div className="bar-label">{day.day}</div>
                <div className="bar-value">${day.sales.toFixed(0)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-section">
          <h4>🔥 Popular Products</h4>
          <div className="popular-products">
            {analyticsData.popularProducts.map((product, index) => (
              <div key={index} className="product-stat">
                <div className="product-name">{product.name}</div>
                <div className="product-bar">
                  <div 
                    className="product-fill"
                    style={{ 
                      width: `${(product.sales / 23) * 100}%`,
                      backgroundColor: index < 2 ? '#ff4e50' : '#f9d423'
                    }}
                  ></div>
                </div>
                <div className="product-sales">{product.sales} sold</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="analytics-insights">
        <h4>💡 Key Insights</h4>
        <ul>
          <li>Weekend sales are 40% higher than weekdays</li>
          <li>Beef products account for 65% of total revenue</li>
          <li>Average order value increased by 15% this month</li>
          <li>Most orders are placed between 4-7 PM</li>
        </ul>
      </div>
    </div>
  );
} 