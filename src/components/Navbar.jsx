import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { useMenu } from "../hooks/useMenu";

import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";

import Button from "./UI/Button";
import styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const { openMenu } = useMenu();

  function logUserOut() {
    logout();
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>
          <Link to="/app/products">Logo</Link>
        </h1>

        <ul className={styles.navLinks}>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>

        <div className={styles.icons}>
          <Button
            onclick={isAuthenticated ? logUserOut : () => navigate("/login")}
            className={styles.loginBtn}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
          <div className={styles.cartbox}>
            <Link to="cart" className={styles.cartLink}>
              <GiShoppingCart className={styles.cartIcon} />
            </Link>
            {totalItems > 0 && (
              <span className={styles.totalItems}>{totalItems}</span>
            )}
          </div>
          <Link
            to={isAuthenticated ? "/app/account/wishlist" : "/login"}
            className={styles.wishlistContainer}
          >
            <CiHeart className={styles.wishlist} />
          </Link>
          <IoIosNotificationsOutline className={styles.notification} />
          <RxHamburgerMenu className={styles.mobileMenu} onClick={openMenu} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
