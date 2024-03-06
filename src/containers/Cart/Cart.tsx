import React, { useEffect } from 'react';
import { useCart } from '../../shared/context/cartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    adjustQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, [cartItems]);
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <div className="cart-quantity">
              <label> Quantity:</label>
              <div>
                <button
                  onClick={() => adjustQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => adjustQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <p>Total Items: {getTotalItems()}</p>
      <p>Total Price: ${Number.parseFloat(getTotalPrice()).toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
