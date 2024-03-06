import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../shared/context/cartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const { getTotalItems } = useCart();
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">My Shopping App</Link>
      </h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <div className="cart-wrapper">
          {getTotalItems() > 0 ? (
            <Link to="/cart" className="cart-link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          ) : (
            <FontAwesomeIcon icon={faShoppingCart} />
          )}

          {getTotalItems() > 0 && (
            <span className="cart-count">{getTotalItems()}</span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
