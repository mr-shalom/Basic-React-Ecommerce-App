import { Link } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "../hooks/useCart";
import emptyWishlistIcon from "../assets/emptyWishlistIcon.svg";
import styles from "./WhishList.module.css";

function WhishList() {
  const { wishList } = useCart();
  return <>{wishList?.length > 0 ? <FullWishlist /> : <EmptyWishList />}</>;
}

function FullWishlist() {
  const { wishList } = useCart();
  return (
    <section className={styles.order}>
      <div className={styles.wishlistBox}>
        <h2 className={styles.wishlistTitle}>Wishlist</h2>
      </div>
      <ul className={styles.itemsContainer}>
        {wishList?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

function Item({ item }) {
  const { addItemToCart, removeFromWishList } = useCart();

  function handleCartAndWishList() {
    addItemToCart(item);
    removeFromWishList(item.id);
    console.log(item);
    console.log(item.id);
  }

  return (
    <li>
      <figure className={styles.figure}>
        <div className={styles.itemImg}>
          <img src={item.thumbnail} alt="" className={styles.img} />
        </div>
        <figcaption className={styles.figcaption}>
          <h3 className={styles.prodTitle}>{item.title}</h3>
          <p className={styles.orderID}>
            itemID: <span>{item.prodID}</span>
          </p>
          <p className={styles.itemDesc}>{item.description}</p>
          <p
            className={`${styles.availabilityStatus} ${
              item.availabilityStatus === "Low Stock"
                ? styles.lowStatus
                : styles.highStatus
            }`}
          >
            {item.availabilityStatus}
          </p>

          <time className={styles.deliveredOn}>
            On {new Date().toLocaleTimeString()}
          </time>
        </figcaption>
      </figure>

      <div className={styles.trashItem}>
        <Link to="" className={styles.orderDetails}>
          See details
        </Link>

        <TiShoppingCart
          className={styles.cart}
          onClick={handleCartAndWishList}
        />

        <CiTrash
          className={styles.trashIcon}
          onClick={() => removeFromWishList(item.id)}
        />
      </div>
    </li>
  );
}

function EmptyWishList() {
  return (
    <section className={styles.emptySection}>
      <div className="emptyImage">
        <img
          src={emptyWishlistIcon}
          alt="empty wishlist icon"
          className={styles.emptyImg}
        />
      </div>

      <h2 className={styles.emptyTitle}>You haven’t saved an item yet!</h2>
      <p className={styles.emptyText}>
        Found something you like? Tap on the heart shaped icon next to the item
        to add it to your wishlist! All your saved items will appear here.
      </p>

      <Link to="/app/products" className={styles.continueShoppingBtn}>
        Continue Shopping
      </Link>
    </section>
  );
}

export default WhishList;
