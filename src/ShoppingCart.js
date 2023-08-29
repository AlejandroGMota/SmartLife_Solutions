import React, { useState } from 'react';

function ShoppingCart() {

  const sendMessage = () => {

    const a = localStorage.getItem("Cart");

    var waurlproduct = a.name.replace(/\s+/g, '%20');       
    window.open('https://wa.me/527712384167?text=Me%20interesa%20este%20producto%20'+ waurlproduct);
  }

  

  return (
    <div className="ShoppingCart">
      <h2>Your Shopping Cart</h2>

      {/*
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>

      
      <p>Total: ${cartTotal}</p>

      */}
    </div>
  );
}

export default ShoppingCart;
