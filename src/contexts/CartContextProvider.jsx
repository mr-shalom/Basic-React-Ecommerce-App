import { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  wishList: [],
  deliveryFee: 0.02,
};

function reducer(state, action) {
  switch (action.type) {
    case "cartItems/add": {
      // check if item exists in cart already, then update
      let isItemInCart = state.cartItems.find(
        (item) => item.id == action.payload.id
      );

      let updatedCart;
      if (isItemInCart) {
        updatedCart = state.cartItems.map((item) =>
          item.id === isItemInCart.id
            ? { ...isItemInCart, quantity: isItemInCart.quantity + 1 }
            : item
        );
      } else
        updatedCart = [...state.cartItems, { ...action.payload, quantity: 1 }];

      // calculate total items in cart
      let totalItemsInCart = updatedCart.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );

      let total = updatedCart.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
      );

      total = total.toFixed(2);
      const shippingFee = state.deliveryFee * total;

      return {
        ...state,
        cartItems: updatedCart,
        totalItems: totalItemsInCart,
        totalPrice: total,
        deliveryFee: shippingFee,
      };
    }

    case "cartItems/Inc": {
      let updatedCart = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      let totalItemsInCart = updatedCart.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );

      let total = updatedCart.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
      );

      total = Number(total.toFixed(2));
      const shippingFee = state.deliveryFee * total;

      return {
        ...state,
        cartItems: updatedCart,
        totalItems: totalItemsInCart,
        totalPrice: total,
        deliveryFee: shippingFee,
      };
    }
    case "cartItems/Dec": {
      let updatedCart = state.cartItems.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else return item;
      });

      let totalItemsInCart = updatedCart.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );

      let total = updatedCart.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
      );

      total = Number(total.toFixed(2));
      const shippingFee = state.deliveryFee * total;

      return {
        ...state,
        cartItems: updatedCart,
        totalItems: totalItemsInCart,
        totalPrice: total,
        deliveryFee: shippingFee,
      };
    }

    case "cartItems/remove": {
      let cartUpdateOnRemove = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      let totalOnRemove = cartUpdateOnRemove.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );

      let total = cartUpdateOnRemove.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
      );

      return {
        ...state,
        cartItems: cartUpdateOnRemove,
        totalItems: totalOnRemove,
        totalPrice: total,
      };
    }

    case "addToWishList": {
      let itemMatch = state.wishList.find(
        (item) => item.id === action.payload.id
      );

      return itemMatch
        ? state
        : { ...state, wishList: [...state.wishList, action.payload] };
    }

    case "removeFromWishList": {
      return {
        ...state,
        wishList: state.wishList.filter((item) => item.id !== action.payload),
      };
    }

    case "cartItems/empty": {
      return { ...initialState };
    }

    default:
      throw new Error("Unknown action");
  }
}

function CartContextProvider({ children }) {
  const [
    { cartItems, totalItems, totalPrice, wishList, deliveryFee },
    dispatch,
  ] = useReducer(reducer, initialState);

  function addItemToCart(product) {
    dispatch({ type: "cartItems/add", payload: product });
  }

  function removeItemFromCart(id) {
    dispatch({ type: "cartItems/remove", payload: id });
  }

  function clearCart() {
    dispatch({ type: "cartItems/empty" });
  }

  function addToWishList(item) {
    dispatch({ type: "addToWishList", payload: item });
  }

  function removeFromWishList(id) {
    dispatch({ type: "removeFromWishList", payload: id });
  }

  function increaseItem(id) {
    dispatch({ type: "cartItems/Inc", payload: id });
  }
  function decreaseItem(id) {
    dispatch({ type: "cartItems/Dec", payload: id });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        totalPrice,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        wishList,
        addToWishList,
        removeFromWishList,
        deliveryFee,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
