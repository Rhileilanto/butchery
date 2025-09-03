import React, { useState } from "react";
import GlowingButton from "./GlowingButton";
import "../App.css";

const emailTemplates = {
  orderConfirmed: {
    subject: "Order Confirmed - Prime Cuts Butchery",
    body: "Dear {customerName},\n\nThank you for your order! Your order #{orderId} has been confirmed and is being prepared.\n\nOrder Details:\n{orderDetails}\n\nWe'll notify you when your order is ready for pickup/delivery.\n\nBest regards,\nPrime Cuts Butchery Team"
  },
  orderReady: {
    subject: "Order Ready - Prime Cuts Butchery",
    body: "Dear {customerName},\n\nGreat news! Your order #{orderId} is ready for pickup/delivery.\n\nOrder Details:\n{orderDetails}\n\nPlease collect your order or expect delivery soon.\n\nThank you for choosing Prime Cuts Butchery!\n\nBest regards,\nPrime Cuts Butchery Team"
  },
  orderDelivered: {
    subject: "Order Delivered - Prime Cuts Butchery",
    body: "Dear {customerName},\n\nYour order #{orderId} has been successfully delivered!\n\nWe hope you enjoy your fresh meat and groceries. Please let us know if you have any feedback.\n\nThank you for choosing Prime Cuts Butchery!\n\nBest regards,\nPrime Cuts Butchery Team"
  }
};

export default function EmailNotifications() {
  const [selectedTemplate, setSelectedTemplate] = useState("orderConfirmed");
  const [customSubject, setCustomSubject] = useState("");
  const [customBody, setCustomBody] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [orderId, setOrderId] = useState("");
  const [orderDetails, setOrderDetails] = useState("");
  const [sent, setSent] = useState(false);

  function handleTemplateChange(template) {
    setSelectedTemplate(template);
    setCustomSubject(emailTemplates[template].subject);
    setCustomBody(emailTemplates[template].body);
  }

  function handleSendEmail(e) {
    e.preventDefault();
    // Simulate sending email
    console.log("Sending email:", {
      to: recipientEmail,
      subject: customSubject,
      body: customBody
        .replace("{customerName}", customerName)
        .replace("{orderId}", orderId)
        .replace("{orderDetails}", orderDetails)
    });
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div className="email-notifications">
      <h3>📧 Email Notifications</h3>
      
      {sent && (
        <div className="success-message">
          ✅ Email sent successfully!
        </div>
      )}

      <div className="email-form">
        <div className="form-group">
          <label>Email Template:</label>
          <select 
            value={selectedTemplate} 
            onChange={(e) => handleTemplateChange(e.target.value)}
            className="template-select"
          >
            <option value="orderConfirmed">Order Confirmed</option>
            <option value="orderReady">Order Ready</option>
            <option value="orderDelivered">Order Delivered</option>
            <option value="custom">Custom Email</option>
          </select>
        </div>

        <div className="form-group">
          <label>Recipient Email:</label>
          <input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            placeholder="customer@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Customer Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label>Order ID:</label>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="12345"
            required
          />
        </div>

        <div className="form-group">
          <label>Order Details:</label>
          <textarea
            value={orderDetails}
            onChange={(e) => setOrderDetails(e.target.value)}
            placeholder="2x Beef Steak - $25.98&#10;1x Tomatoes - $2.99&#10;Total: $28.97"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            value={customSubject}
            onChange={(e) => setCustomSubject(e.target.value)}
            placeholder="Email subject"
            required
          />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            value={customBody}
            onChange={(e) => setCustomBody(e.target.value)}
            placeholder="Email body"
            rows="8"
            required
          />
        </div>

        <GlowingButton onClick={handleSendEmail}>
          📤 Send Email
        </GlowingButton>
      </div>

      <div className="email-templates">
        <h4>📋 Quick Templates</h4>
        <div className="template-buttons">
          <button 
            onClick={() => handleTemplateChange("orderConfirmed")}
            className="template-btn"
          >
            Order Confirmed
          </button>
          <button 
            onClick={() => handleTemplateChange("orderReady")}
            className="template-btn"
          >
            Order Ready
          </button>
          <button 
            onClick={() => handleTemplateChange("orderDelivered")}
            className="template-btn"
          >
            Order Delivered
          </button>
        </div>
      </div>
    </div>
  );
} 