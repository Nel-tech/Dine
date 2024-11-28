import {  useState, ReactNode } from "react";
import { CartContext } from "../Context/CartContext";


type CartProviderProps = {
  children: ReactNode; 
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<unknown[]>([]); // Replace `any` with a specific type for your cart items.

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
