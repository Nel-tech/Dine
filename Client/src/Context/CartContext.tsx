import React, { createContext } from "react";
export const CartContext = createContext<{
  cart: unknown[]; 
  setCart: React.Dispatch<React.SetStateAction<unknown[]>>;
} | null>(null);