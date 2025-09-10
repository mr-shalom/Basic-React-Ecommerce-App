import { createContext, useEffect, useReducer } from "react";

const ProductsContext = createContext();

const initialState = {
  isLoading: false,
  error: "",
  products: [],
  filterByName: "",
  selectCategory: "",
  displayProducts: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "data/failed":
      return { ...state, error: action.payload, isLoading: false };
    case "data/loaded":
      /* prettier-ignore */
      return {...state, products: action.payload, isLoading: false,
      };
    case "search":
      return { ...state, filterByName: action.payload };
    case "select":
      return { ...state, selectCategory: action.payload };

    case "sorted":
      return { ...state, displayProducts: action.payload };

    default:
      throw new Error("Unknown action");
  }
}

function ProductsContextProvider({ children }) {
  const [
    {
      isLoading,
      error,
      products,
      filterByName,
      selectCategory,
      displayProducts,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function filter(query) {
    dispatch({ type: "search", payload: query.toLowerCase() });
  }

  function category(cat) {
    dispatch({ type: "select", payload: cat.toLowerCase() });
  }

  useEffect(() => {
    dispatch({ type: "loading" });
    const controller = new AbortController();
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Unable to fetch products...");
        const data = await res.json();
        dispatch({ type: "data/loaded", payload: data.products });
      } catch (error) {
        if (error.name !== "AbortError")
          dispatch({ type: "data/failed", payload: error.message });
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    let productsToDisplay = products;

    if (filterByName !== "") {
      productsToDisplay = productsToDisplay.filter((product) => {
        return `${product.title.toLowerCase()} ${product.description.toLowerCase()}`.includes(
          filterByName
        );
      });
    }

    if (selectCategory !== "") {
      productsToDisplay = productsToDisplay.filter(
        (product) => product.category.toLowerCase() === selectCategory
      );
    }
    dispatch({ type: "sorted", payload: productsToDisplay });
  }, [filterByName, selectCategory, products, dispatch]);

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        error,
        products,
        filter,
        category,
        filterByName,
        selectCategory,
        displayProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContextProvider, ProductsContext };
