import { Link } from "react-router-dom";

import { data as exchangeRate } from "../utils/fetchExchangeRate.js";
import { formatCurrency } from "../utils/formatCurrency.js";
// import { trimProductName } from "../utils/helperFunctions.js";
import styles from "./ProductCard.module.css";
import Button from "./UI/Button.jsx";
import { useCart } from "../hooks/useCart.js";
import { useEffect, useState } from "react";

// const DOLLAR_TO_NAIRA = exchangeRate.conversion_rates.NGN;
const toNaira = exchangeRate;

function ProductCard({ product }) {
  const [item, setItem] = useState(null);
  const [activeCard, setActiveCard] = useState(false);
  const { addItemToCart } = useCart();

  // useEffect(() => {
  //   if (item !== null) addItemToCart(item);
  // }, [item]);

  const showButton = () => setActiveCard(true);
  const hideButton = () => setActiveCard(false);

  const {
    id,
    title,
    price,
    images: img,
    availabilityStatus,
    discountPercentage,
  } = product;

  const selectedItem = {
    id,
    title,
    price,
    images: img,
    availabilityStatus,
    discountPercentage,
  };

  // const productTitle = trimProductName(title, 8);
  const prodPrice = toNaira * price;
  const availability =
    availabilityStatus === "In Stock" ? "blackBg" : "darkredBg";
  return (
    <article
      className={styles.card}
      onMouseEnter={showButton}
      onMouseLeave={hideButton}
    >
      <span className={`${styles.availability} ${styles[availability]}`}>
        {availabilityStatus}
      </span>
      <span className={styles.discount}>{`-${discountPercentage}%`}</span>
      <Link to={`${id}`} className={styles.productLink}>
        <figure className={styles.imgCover}>
          <img src={img[0]} alt={title} className={styles.productImg} />
        </figure>
        <div className={styles.fullProdDesc}>
          <h1 className={styles.productTitle}>{title}</h1>
          <div className={styles.pricing}>
            <div>
              <p className={styles.currPrice}>
                {formatCurrency.format(
                  Math.floor(
                    prodPrice - (discountPercentage / 100) * prodPrice
                  ).toFixed(2)
                )}
              </p>
              <p className={styles.formerPrice}>
                {formatCurrency.format(Math.floor(prodPrice).toFixed(2))}
              </p>
            </div>
          </div>
        </div>
      </Link>
      {activeCard && (
        <Button
          className={styles.jumiaBtn}
          onclick={() => addItemToCart(selectedItem)}
        >
          Add to cart
        </Button>
      )}
    </article>
  );
}

export default ProductCard;
