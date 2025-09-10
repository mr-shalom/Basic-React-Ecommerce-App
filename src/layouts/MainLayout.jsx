import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./MainLayout.module.css";
import MobileNav from "../components/mobileNav";

function MainLayout() {
  return (
    <section className={styles.mainLayout}>
      <MobileNav />
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default MainLayout;
