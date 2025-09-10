import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Cart context consumer was used outside of provider scope");
  return context;
}

export { useAuth };
