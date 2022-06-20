import React from "react";

const CartContext = React.createContext({
  // might have to change items to name as listed from the backend. might also have to create the amt either on the main page or backend
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
