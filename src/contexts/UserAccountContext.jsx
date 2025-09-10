import { createContext, useReducer } from "react";
import { useAuth } from "../hooks/useAuth";

const initialState = {
  userBiodata: {
    userName: "",
    email: "",
    address: "",
  },
  orders: [],
  wishList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "userAccount/biodata": {
      const newUser = {
        ...state.userBiodata,
        userName: action.payload.userName,
        email: action.payload.email,
        address: action.payload.address,
      };
      return { ...state, userBiodata: newUser };
    }
    case "userAccount/orders": {
      return { ...state, orders: [...state.orders, action.payload] };
    }

    case "userAccount/addToWishList": {
      return { ...state, wishList: [...state.wishList, action.payload] };
    }
    case "userAccount/removeFromWishList": {
      return {
        ...state,
        wishList: state.wishList.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
}

const AccountContext = createContext();

function UserAccountContext({ children }) {
  const [{ userBiodata, orders, wishList }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const { user } = useAuth();

  function addToWishList(item) {
    dispatch({ type: "userAccount/addToWishList", payload: item });
  }
  function removeFromWishList(id) {
    dispatch({ type: "userAccount/removeFromWishList", payload: id });
  }

  return (
    <AccountContext.Provider
      value={{
        userBiodata,
        orders,
        wishList,
        addToWishList,
        removeFromWishList,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export { UserAccountContext, AccountContext };
