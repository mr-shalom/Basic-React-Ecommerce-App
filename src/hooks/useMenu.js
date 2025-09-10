import { useContext } from "react";
import { MenuContext } from "../contexts/MobileMenuContext";

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("Cart context consumer was used outside of provider scope");
  return context;
}

export { useMenu };
