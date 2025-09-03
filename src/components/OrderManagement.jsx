import React, { useState } from "react";
import GlowingButton from "./GlowingButton";
import "../App.css";

// Sample orders data
const sampleOrders = [
  {
    id: 1,
    customer: { name: "John Doe", phone: "555-1234", address: "123 Main St" },
    items: [
      { name: "Beef Steak", qty: 2, price: 12.99 },
      { name: "Tomatoes", qty: 1, price: 2.99 }
    ],
    total: 28.97,
    status: "pending",
    method: "delivery",
    date: "2024-01-15"
  },
  {
    id: 2,
    customer: { name: "Jane Smith", phone: "555-5678", address: "456 Oak Ave" },
    items: [
      { name: "Grilled Beef Steak", qty: 1, price: 15.99 }
    ],
    total: 15.99,
    status: "preparing",
    method: "pickup",
    date: "2024-01-15"
  }
];

export default function OrderManagement() {
  const [orders, setOrders] = useState(sampleOrders);

  function updateOrderStatus(orderId, newStatus) {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  }

  function getStatusColor(status) {
    switch(status) {
      case 'pending': return '#ffa500';
      case 'preparing': return '#ffd700';
      case 'ready': return '#32cd32';
      case 'delivered': return '#4169e1';
      case 'cancelled': return '#dc143c';
      default: return '#666';
    }
  }

  return (
    <div className="order-management">
      <h3>Order Management</h3>
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h4>Order #{order.id}</h4>
              <span 
                className="status-badge"
                style={{ backgroundColor: getStatusColor(order.status) }}
              >
                {order.status.toUpperCase()}
              </span>
            </div>
            
            <div className="order-details">
              <div className="customer-info">
                <p><strong>Customer:</strong> {order.customer.name}</p>
                <p><strong>Phone:</strong> {order.customer.phone}</p>
                <p><strong>Address:</strong> {order.customer.address}</p>
                <p><strong>Method:</strong> {order.method}</p>
                <p><strong>Date:</strong> {order.date}</p>
              </div>
              
              <div className="order-items">
                <h5>Items:</h5>
                {order.items.map((item, index) => (
                  <p key={index}>{item.qty}x {item.name} - ${(item.qty * item.price).toFixed(2)}</p>
                ))}
                <p className="order-total"><strong>Total: ${order.total.toFixed(2)}</strong></p>
              </div>
            </div>
            
            <div className="order-actions">
              <select 
                value={order.status} 
                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                className="status-select"
              >
                <option value="pending">Pending</option>
                <option value="preparing">Preparing</option>
                <option value="ready">Ready</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <GlowingButton onClick={() => console.log(`View order ${order.id} details`)}>
                View Details
              </GlowingButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 