import { createContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  user: { email: "", password: "" },
  isNewUser: false,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login": {
      const logIn = {
        email: action.payload.email,
        password: action.payload.password,
      };
      return { ...state, user: logIn, isAuthenticated: true };
    }

    case "signup": {
      const signup = {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
      return {
        ...state,
        user: signup,
        isNewUser: true,
        isAuthenticated: false,
      };
    }

    case "logout": {
      const logOut = { email: "", password: "", isNewUser: false };
      return { ...state, user: logOut, isAuthenticated: false };
    }

    default:
      return state;
  }
}

function AuthContextProvider({ children }) {
  const [{ user, isNewUser, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(user) {
    dispatch({ type: "login", payload: user });
  }

  function signup(newUser) {
    dispatch({ type: "signup", payload: newUser });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ user, isNewUser, isAuthenticated, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
