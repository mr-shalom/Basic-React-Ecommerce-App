import { Link, Links, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoTrashOutline } from "react-icons/io5";

import styles from "./Checkout.module.css";
import Footer from "../components/Footer";
import Button from "../components/UI/Button";
import jumiaExpress from "../assets/jumiaExpress.png";

import { data } from "../utils/fetchExchangeRate";
import { formatCurrency } from "../utils/formatCurrency";

function Checkout() {
  const { totalItems } = useCart();
  const hasItem = +totalItems === 0;

  return (
    <>
      <section className={styles.cartContainer}>
        <div
          className={
            hasItem
              ? styles.noItemInInnerContainer
              : styles.itemsInInnerContainer
          }
        >
          {hasItem ? <NoItemsInCart /> : <ItemsInCart />}
        </div>
        <RecentlyViewedProducts />
      </section>
      <Footer />
    </>
  );
}

function ItemsInCart() {
  return (
    <main className={styles.cartSection}>
      <CartSection />
      <CartSummary />
    </main>
  );
}

function CartSection() {
  const { cartItems } = useCart();
  return (
    <ul className={styles.cartList}>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function CartItem({ item }) {
  return (
    <li className={styles.cartItem}>
      <div className={styles.left}>
        <figure>
          <img src={item.images[0]} alt={item.title} />
          <figcaption className={styles.figcaption}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div className={styles.signatureBox}>
              <img src={jumiaExpress} alt="" className={styles.signature} />
            </div>

            <h3 className={styles.currPrice}>
              {formatCurrency.format(item.price.toFixed(2) * data)}
            </h3>

            <span className={styles.quantity}>
              Item Quantity: {item.quantity}
            </span>
          </figcaption>
        </figure>
      </div>
    </li>
  );
}

function CartSummary() {
  const navigate = useNavigate();
  const { totalItems, totalPrice, deliveryFee, clearCart } = useCart();

  function clearShoppingCart() {
    clearCart();
    navigate("/app/products");
  }

  const total = formatCurrency.format(totalPrice * data);
  total;
  return (
    <aside className={styles.cartSummary}>
      <ul className={styles.cartSummaryList}>
        <h1>CHECKOUT SUMMARY</h1>
        <li className={styles.totalItems}>
          <p className={styles.allItems}>Total items ({totalItems})</p>
          <p className={styles.totalCost}>
            {formatCurrency.format(totalPrice * data)}
          </p>
        </li>
        <li className={styles.deliveryFees}>
          <p className={styles.delvText}>Delivery Fees:</p>
          <p className={styles.delvFee}>{formatCurrency.format(deliveryFee)}</p>
        </li>
        <li>
          <p className={styles.subTotal}>Total</p>
          <p className={styles.addUp}>{total}</p>
        </li>
        <Button className={styles.checkoutBtn} onclick={clearShoppingCart}>
          Confirm Order
        </Button>
      </ul>

      <p className={styles.terms}>
        By proceeding, you are automatically accepting the{" "}
        <Link to="" className={styles.conditions}>
          Terms & Conditions
        </Link>
      </p>
    </aside>
  );
}

function RecentlyViewedProducts() {
  const { cartItems } = useCart();
  return (
    <section className={styles.recentlyViewedProducts}>
      <div className={styles.seeMoreTitle}>
        <h2>Recently Viewed</h2>
        <Link to="/products" className={styles.seeMoreLink}>
          See All <RiArrowRightSLine />
        </Link>
      </div>
      <ul>
        {cartItems?.slice(0, 7).map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}

function Item({ product }) {
  return (
    <li className="item">
      <Link>
        <span className="promoBage">-31%</span>
        <div className="viewedProdImg">
          <img src="" alt="" />
        </div>
        <div className={styles.viewedProdDetails}>
          <h3>product className</h3>
          <p>40000</p>
        </div>
      </Link>
    </li>
  );
}

// function NoItemsInCart() {
//   return (
//     <section className={styles.noItemsInCart}>
//       <div>
//         <figure className={styles.figure}>
//           <img src="" alt="" />
//           <figcaption className={styles.figcaption}>
//             <h1>No items in Cart</h1>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
//               facere consequuntur quae repudiandae deserunt. Nobis quo dolorem
//               inventore nisi eum!
//             </p>
//             <Link to="/app/products">Shop Now</Link>
//           </figcaption>
//         </figure>
//       </div>
//     </section>
//   );
// }

function NoItemsInCart() {
  return (
    <section className={styles.noItemsInCart}>
      <div className={styles.cartIcon}>
        <img
          src="/public/emptyCartIcon.svg"
          alt=""
          className={styles.emptyCartIcon}
        />
      </div>
      <div className={styles.cartdetail}>
        <h3 className={styles.emptyCart}>Your cart is empty</h3>
        <p>Browse our categories and discover our best best deals</p>

        <Link to="/app/products" className={styles.startShoppingLink}>
          Start Shopping
        </Link>
      </div>
    </section>
  );
}

export default Checkout;
