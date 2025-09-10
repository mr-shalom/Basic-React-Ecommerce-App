import { Link } from "react-router-dom";
import styles from "./Order.module.css";

function Order() {
  return (
    <section className={styles.order}>
      <div className={styles.orderBox}>
        <h1 className={styles.orderTitle}>Orders</h1>
      </div>
      <ul className={styles.itemsContainer}>
        <li>
          <figure className={styles.figure}>
            <div className={styles.itemImg}>
              <img src="" alt="" className={styles.img} />
            </div>
            <figcaption className={styles.figcaption}>
              <h3 className={styles.prodTitle}>
                Portable 360 ° Rotating Alloy Phone Tablet Holder
              </h3>
              <p className={styles.orderID}>
                Order <span> 1719379212</span>
              </p>
              <p className={styles.deliveryStatus}>Delivered</p>

              <time className={styles.deliveredOn}>On 25-08</time>
            </figcaption>
          </figure>

          <Link to="" className={styles.orderDetails}>
            See details
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Order;
