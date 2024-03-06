import React, { createContext, useState, useContext } from 'react';
import { Product } from '../models';

export interface ProductCartContext {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  adjustQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => void;
  getTotalPrice: () => void;
  itemExist: (productId: number) => boolean;
}
const CartContext = createContext<ProductCartContext>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  adjustQuantity: () => {},
  clearCart: () => {},
  getTotalItems: () => 0,
  getTotalPrice: () => 0,
  itemExist: () => false,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: any) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const itemExist = (productId: number) => {
    return cartItems.filter((item) => item.id === productId).length > 0;
  };
  const adjustQuantity = (productId: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + (item.quantity ?? 0), 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity ?? 0),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        adjustQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        itemExist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext<ProductCartContext>(CartContext);
};
