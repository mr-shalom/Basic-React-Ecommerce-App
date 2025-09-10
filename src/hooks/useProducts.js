import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContextProvider";

function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("Cart context consumer was used outside of provider scope");
  return context;
}

export { useProducts };
