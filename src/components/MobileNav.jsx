import { Link, NavLink, useNavigate } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";

import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./UI/Button";

import styles from "./MobileNav.module.css";

function MobileNav() {
  const { isOpen, openMenu, closeMenu } = useMenu();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { totalItems } = useCart();

  function logUserOut() {
    logout();
  }

  return (
    <>
      {isOpen && (
        <section className={styles.mobileNav}>
          <div className={styles.innerBox}>
            <div className={styles.topNav}>
              <h1 className={styles.logo}>Logo</h1>
              <IoCloseOutline className={styles.closeBtn} onClick={closeMenu} />
            </div>
            <div className={styles.bottomNav}>
              <ul>
                <li>
                  <NavLink to="products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="contact">Contact</NavLink>
                </li>

                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, sed.
                </li>
              </ul>
              <div className={styles.icons}>
                <Button
                  onclick={
                    isAuthenticated ? logUserOut : () => navigate("/login")
                  }
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
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default MobileNav;
