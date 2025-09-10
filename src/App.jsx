import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductsContextProvider } from "./contexts/ProductsContextProvider";
import { CartContextProvider } from "./contexts/CartContextProvider";
import { AuthContextProvider } from "./contexts/AuthContextProvider";
import { UserAccountContext } from "./contexts/UserAccountContext";
import { MobileMenuContext } from "./contexts/MobileMenuContext";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserProfile from "./pages/UserProfile";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import WishList from "./pages/WhishList";
import Order from "./pages/Order";
import AccountPage from "./pages/AccountPage";
import Spinner from "./components/UI/Spinner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import styles from "./App.module.css";

//implemented lazy loading here in order to optimize the javascipt bundle size
// const Home = lazy(() => import("./pages/Home"));
// const MainLayout = lazy(() => import("./layouts/MainLayout"));
// const Products = lazy(() => import("./pages/Products"));
// const ProductDetails = lazy(() => import("./pages/ProductDetails"));
// const Register = lazy(() => import("./pages/Register"));
// const Login = lazy(() => import("./pages/Login"));
// const UserProfile = lazy(() => import("./pages/UserProfile"));
// const Cart = lazy(() => import("./pages/Cart"));
// const Checkout = lazy(() => import("./pages/Checkout"));
// const WishList = lazy(() => import("./pages/WishList"));

function App() {
  return (
    <MobileMenuContext>
      <AuthContextProvider>
        <UserAccountContext>
          <ProductsContextProvider>
            <CartContextProvider>
              <BrowserRouter>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="app" element={<MainLayout />}>
                    {/* <Route index element={<Products />} /> */}
                    <Route path="products" element={<Products />} />

                    <Route
                      path="products/:itemId"
                      element={<ProductDetails />}
                    />
                    <Route path="contact" element={<Contact />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />

                    <Route path="account" element={<AccountPage />}>
                      <Route index element={<UserProfile />} />
                      <Route path="profile" element={<UserProfile />} />
                      <Route path="wishlist" element={<WishList />} />
                      <Route path="order" element={<Order />} />
                    </Route>
                  </Route>

                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<SignUp />} />
                </Routes>
              </BrowserRouter>
            </CartContextProvider>
          </ProductsContextProvider>
        </UserAccountContext>
      </AuthContextProvider>
    </MobileMenuContext>
  );
}

export default App;
