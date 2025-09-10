import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoTrashOutline } from "react-icons/io5";

import styles from "./Cart.module.css";
import Footer from "../components/Footer";
import Button from "../components/UI/Button";
import jumiaExpress from "../assets/jumiaExpress.png";

import { data } from "../utils/fetchExchangeRate";
import { formatCurrency } from "../utils/formatCurrency";

function Cart() {
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

  console.log(cartItems);

  return (
    <ul className={styles.cartList}>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function CartItem({ item }) {
  const { removeItemFromCart, increaseItem, decreaseItem } = useCart();
  return (
    <li className={styles.cartItem}>
      <div className={styles.left}>
        <figure>
          <img
            src={item.images[0]}
            alt={item.title}
            className={styles.prodImg}
          />
          <figcaption className={styles.figcaption}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className={styles.availability}>
              {item.availabilityStatus}
            </span>
            <div className={styles.signatureBox}>
              <img src={jumiaExpress} alt="" className={styles.signature} />
            </div>
          </figcaption>
        </figure>
        <Button
          className={styles.removeBtn}
          onclick={() => removeItemFromCart(item.id)}
        >
          <IoTrashOutline className={styles.trashIcon} />
          <span className={styles.removeBtnText}>Remove</span>
        </Button>
      </div>
      <div className={styles.right}>
        <h3 className={styles.currPrice}>
          {formatCurrency.format(item.price.toFixed(2) * data)}
        </h3>
        <p className={styles.promo}>
          <span className={styles.formerPrice}>
            {formatCurrency.format(
              (
                (item.discountPercentage / 100) * item.price +
                item.price
              ).toFixed(2) * data
            )}
          </span>
          <sup className={styles.discountPercentage}>
            -{item.discountPercentage}%
          </sup>
        </p>

        <p className={styles.btnsContainer}>
          <Button
            className={styles.increaseItem}
            onclick={() => decreaseItem(item.id)}
          >
            -
          </Button>
          <span>{item.quantity}</span>
          <Button
            className={styles.decreaseItem}
            onclick={() => increaseItem(item.id)}
          >
            +
          </Button>
        </p>
      </div>
    </li>
  );
}

function CartSummary() {
  const { totalPrice } = useCart();

  return (
    <aside className={styles.cartSummary}>
      <ul className={styles.cartSummaryList}>
        <h1>CART SUMMARY</h1>

        <li>
          <p className={styles.subTotal}>
            <span className={styles.subTotal}>Subtotal</span>

            <span className={styles.totalCost}>
              {formatCurrency.format(`${totalPrice * data}`)}
            </span>
          </p>
          <small className={styles.deliveryFee}>
            Delivery fees not included yet
          </small>
        </li>
        <Link className={styles.checkoutBtn} to="/app/checkout">
          Checkout ({formatCurrency.format(`${totalPrice * data}`)})
        </Link>
      </ul>
      <div className={styles.returnPolicy}>
        <h2 className={styles.returnTitle}>Returns are easy</h2>
        <small className={styles.policyDetails}>
          Free return within 7 Days for All eligible items
          <Link to="" className={styles.prodDetails}>
            Details
          </Link>
        </small>
      </div>
    </aside>
  );
}

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
export default Cart;
