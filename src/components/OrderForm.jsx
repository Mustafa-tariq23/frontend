// OrderForm.jsx
import React, { useState } from 'react';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleOrderSubmit = () => {
    // Implement order submission logic (e.g., sending an email, storing in a database)
    // You can use a service like Firebase or your server to handle this.

    // Reset the form after submission
    setName('');
    setContactNumber('');
    setAddress('');
    setQuantity('');

    // Display a success message or navigate to a confirmation page
  };

  return (
    <div>
      <h2>Order Details</h2>
      <form onSubmit={handleOrderSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Contact Number:</label>
        <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />

        <label>Address:</label>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />

        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
