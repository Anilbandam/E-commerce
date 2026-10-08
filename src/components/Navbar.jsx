import React from 'react';

export default function Navbar({ totalItems, onOpenCart }) {
  return (
    <header className="navbar">
      <div className="logo">ShopVibe</div>
      <button className="cart-btn" onClick={onOpenCart}>
        🛒 Cart <span className="cart-count">{totalItems}</span>
      </button>
    </header>
  );
}