import { createContext, useContext, useState } from "react";

//create cart context
const CartContext = createContext({
  cartItems: [],
  addItemHandler: () => {},
  removeItemHandler: () => {},
});

// function to consume the cart context object
export const useCartContext = () => {
  return useContext(CartContext);
};

// cart context provider
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
