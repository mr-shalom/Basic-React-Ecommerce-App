import { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider";

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("Cart context consumer was used outside of provider scope");
  return context;
}

export { useCart };
