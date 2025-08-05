import React, { useState } from "react";

function OrderOnline() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    item: "",
    quantity: 1,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order placed for ${formData.quantity} x ${formData.item}. Thank you, ${formData.name}!`
    );
    // In production, send formData to backend here
    setFormData({
      name: "",
      phone: "",
      item: "",
      quantity: 1,
      notes: "",
    });
  };

  return (
    <section className="order-section">
      <h1 className="order-title">Order Online</h1>
      <form className="order-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Menu Item:
          <select
            name="item"
            value={formData.item}
            onChange={handleChange}
            required
          >
            <option value="">-- Select an item --</option>
            <option value="Tomato Bread">Tomato Bread</option>
            <option value="Pasta">Pasta</option>
            <option value="Salad">Salad</option>
            <option value="Baguette">Baguette</option>
          </select>
        </label>

        <label>
          Quantity:
          <input
            name="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Special Instructions:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            placeholder="Allergies, preferences, etc."
          />
        </label>

        <input type="submit" value="Place Order" />
      </form>
    </section>
  );
}

export default OrderOnline;
