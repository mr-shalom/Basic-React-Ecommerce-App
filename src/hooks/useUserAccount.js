import { useContext } from "react";
import { AccountContext } from "../contexts/UserAccountContext";

function useUserAccount() {
  const consumeContext = useContext(AccountContext);
  if (consumeContext === undefined)
    throw new Error(
      "Account context consumer was used outside of provider scope"
    );
  return consumeContext;
}

export { useUserAccount };
