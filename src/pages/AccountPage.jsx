import { Link, NavLink, Outlet } from "react-router-dom";
import { CiUser, CiHeart } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import { BsBox } from "react-icons/bs";
import styles from "./AccountPage.module.css";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/UI/Button";

function AccountPage() {
  return (
    <>
      <section className={styles.acctPage}>
        <div className={styles.acctPageMenu}>
          <AcctTab />
          <Contents />
        </div>
        <RecommendedProducts />
      </section>
    </>
  );
}

function AcctTab() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <aside className={styles.acctTab}>
      <ul className={styles.links}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            to="profile"
          >
            <CiUser className={styles.tabIcon} />
            <span className={styles.tabText}>My Account</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            to="order"
          >
            <BsBox className={styles.tabIcon} />
            <span className={styles.tabText}>Order</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            to="wishlist"
          >
            <CiHeart className={styles.tabIcon} />
            <span className={styles.tabText}>WishList</span>
          </NavLink>
        </li>
        <li className={styles.exit}>
          <Button className={styles.logoutBtn}>
            <RxExit className={styles.tabIcon} />
            <span className={styles.tabText}>Logout</span>
          </Button>
        </li>
      </ul>
    </aside>
  );
}

function Contents() {
  return (
    <main className={styles.displayTabContents}>
      <Outlet />
    </main>
  );
}

function RecommendedProducts() {
  return (
    <section className={styles.otherProducts}>
      <div className={styles.prodContainer}>
        <h2 className={styles.recommend}>Recommended for you</h2>

        <div className={styles.products}>
          <article></article>
        </div>
      </div>
    </section>
  );
}
export default AccountPage;
