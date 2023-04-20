import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const total = cart.reduce((acc, prod) => acc + prod.precio, 0);

  const addCart = product => {
    setCart([...cart, product]);
  };

  const removeCart = id => {
    const newCart = cart.filter(prod => prod.id !== id);
    setCart(newCart);
  };

  return <CartContext.Provider value={{ cart, addCart, total, removeCart }}>{children}</CartContext.Provider>;
};
