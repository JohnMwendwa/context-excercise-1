import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemHandler = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeItemHandler = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const cartItemsCtx = {
    cartItems,
    addItemHandler,
    removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartItemsCtx}>{children}</CartContext.Provider>
  );
};
