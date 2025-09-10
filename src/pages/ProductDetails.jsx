import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import customFetch from "../services/customFetch.js";
import styles from "./ProductDetails.module.css";
import Spinner from "../components/UI/Spinner.jsx";

import { useCart } from "../hooks/useCart.js";
import Button from "../components/UI/Button.jsx";
import { data } from "../utils/fetchExchangeRate";
import { formatCurrency } from "../utils/formatCurrency";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [wishItem, setWishItem] = useState(null);
  const { addToWishList, addItemToCart } = useCart();
  const { itemId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    let req = async () => {
      setIsLoading(true);
      let data = await customFetch(`https://dummyjson.com/products/${itemId}`);
      setProduct(data);
      setIsLoading(false);
    };
    req();
  }, [itemId]);

  useEffect(() => {
    if (wishItem === null) return;
    addToWishList(wishItem);
  }, [wishItem]);

  // const {id,title,description,category,price,discountPercentage,rating,stock,tags,sku,weight,dimension,warrantyInformation,shippingInformation,availabilityStatus,reviews,returnPolicy,minimumOrderQuantity,images,thumbnail}

  /* 
  tags:['meat'],
  dimensions:{depth:16.01,height:22.11,width:11.03},
reviews:[{comment: "Great product!", date: "2025-04-30T09:41…}
{comment: "Highly recommended!", date: "2025-04-30T…},{comment: "Not worth the price!", date: "2025-04-30…}
images:['src links']
  */

  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    sku,
    weight,
    dimension,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    reviews,
    returnPolicy,
    minimumOrderQuantity,
    images,
    thumbnail,
  } = product;

  let img = images;
  const item = {
    id,
    title,
    description,
    price,
    discountPercentage,
    images,
    thumbnail,
    availabilityStatus,
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className={styles.productDetailContainer}>
          <section className={styles.detailContainer}>
            <IoIosArrowBack
              className={styles.backBtn}
              onClick={() => navigate(-1)}
            />
            <aside className={styles.fullProductImg}>
              <img src={thumbnail} alt={title} className={styles.productImg} />
            </aside>
            <aside className={styles.fullProductDesc}>
              <h1 className={styles.productTitle}>
                {title}
                <CiHeart
                  className={styles.wishlistIcon}
                  onClick={() => setWishItem(item)}
                />
              </h1>
              <small className={styles.brand}>Brand:</small>
              <p className={styles.desc}>{description}</p>

              <div className={styles.priceBox}>
                <h2 className={styles.currPrice}>
                  {formatCurrency.format(price * data)}

                  {formatCurrency.format(
                    Math.floor(
                      price - (discountPercentage / 100) * price
                    ).toFixed(2)
                  )}
                </h2>
                <p className={styles.oldPrice}>
                  {formatCurrency.format(Math.floor(price).toFixed(2))}
                </p>
                <span className={styles.discount}>{discountPercentage}%</span>
              </div>

              <small className={styles.stockStatus}>In stock</small>
              <div className={styles.rating}>
                <span>⭐⭐⭐⭐⭐</span>{" "}
                <span className={styles.totalRating}>
                  (37 verified ratings)
                </span>
              </div>

              <div className={styles.addToCartBtnContainer}>
                <Button
                  className={styles.cartBtn}
                  onclick={() => addItemToCart(product)}
                >
                  Add to cart
                </Button>
              </div>
            </aside>
          </section>
        </main>
      )}
    </>
  );
}

export default ProductDetails;
