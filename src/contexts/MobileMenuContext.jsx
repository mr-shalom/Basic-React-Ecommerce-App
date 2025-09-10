import { createContext, useReducer } from "react";

const MenuContext = createContext();
const initialState = {
  isOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "open": {
      return { ...state, isOpen: !state.isOpen };
    }
    case "close": {
      return { ...state, isOpen: !state.isOpen };
    }
  }
}

function MobileMenuContext({ children }) {
  const [{ isOpen }, dispatch] = useReducer(reducer, initialState);

  function openMenu() {
    dispatch({ type: "open" });
  }
  function closeMenu() {
    dispatch({ type: "open" });
  }

  return (
    <MenuContext.Provider value={{ isOpen, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MobileMenuContext, MenuContext };
