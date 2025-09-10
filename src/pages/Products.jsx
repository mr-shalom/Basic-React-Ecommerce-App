import { Link } from "react-router-dom";
import { MdCall, MdComputer } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { TbBus, TbDeviceTv, TbRibbonHealth } from "react-icons/tb";
import { GiCookingPot } from "react-icons/gi";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import {
  PiHouseLight,
  PiTShirtLight,
  PiAppleLogoLight,
  PiBaby,
} from "react-icons/pi";
// import Footer from "../components/Footer";
import styles from "./Products.module.css";
import Spinner from "../components/UI/Spinner";
import { useProducts } from "../hooks/useProducts";
import ProductsSection from "../components/ProductsSection";
// import Spinner from "../components/UI/Spinner";

import Filter from "../components/UI/Filter";
import SelectCategory from "../components/UI/SelectCategory";

function Products() {
  const { isLoading, displayProducts } = useProducts();
  // console.log(displayProducts);

  return (
    <main className={styles.main}>
      <ProductsHeroSection />

      <section>
        <div className={styles.sort}>
          <div className={styles.sortQueries}>
            <Filter />
            <SelectCategory />
          </div>
        </div>

        {isLoading ? <Spinner /> : <ProductsSection />}
      </section>
    </main>
  );
}

function ProductsHeroSection() {
  return (
    <section className={styles.heroContainer}>
      <aside className={styles.navigateAside}>
        <ul className={styles.productNav}>
          <li>
            <Link to="">
              <div className={styles.NavIcons}>
                <GiCookingPot />
              </div>
              <p className={styles.navDescription}>Appliances</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className={styles.NavIcons}>
                <IoIosPhonePortrait />
              </div>
              <p className={styles.navDescription}>Phones & Tablets</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className={styles.NavIcons}>
                <TbRibbonHealth />
              </div>
              <p className={styles.navDescription}>Health & Beauty</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className={styles.NavIcons}>
                <PiHouseLight />
              </div>
              <p className={styles.navDescription}>Home & Office</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className={styles.NavIcons}>
                <TbDeviceTv />
              </div>
              <p className={styles.navDescription}>Electronics</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className={styles.NavIcons}>
                <PiTShirtLight />
              </div>
              <p className={styles.navDescription}>Fashion</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className={styles.NavIcons}>
                <PiAppleLogoLight />
              </div>
              <p className={styles.navDescription}>Supermarket</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className={styles.NavIcons}>
                <MdComputer />
              </div>
              <p className={styles.navDescription}>Computing</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className={styles.NavIcons}>
                <PiBaby />
              </div>
              <p className={styles.navDescription}>Baby Products</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className={styles.NavIcons}>
                <IoGameControllerOutline />
              </div>
              <p className={styles.navDescription}>Gaming</p>
            </Link>
          </li>
        </ul>
      </aside>
      <div className={styles.swapMainPhoto}></div>
      <ul className={styles.callAside}>
        <li>
          <Link>
            <div className={styles.phoneIcon}>
              <MdCall className={styles.phone} />
            </div>
            <div className={styles.callText}>
              <h2>Call to order</h2>
              <small className={styles.numberToCall}>0700-600-0000</small>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <div className={styles.houseIcon}>
              <FaHouseUser className={styles.house} />
            </div>
            <p className={styles.sell}>Sell on Jumia</p>
          </Link>
        </li>
        <li>
          <Link>
            <div className={styles.busIcon}>
              <TbBus className={styles.bus} />
            </div>
            <p className={styles.package}>Send Your Package</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

// function Spinner() {
//   return <p>Loading...</p>;
// }

export default Products;
