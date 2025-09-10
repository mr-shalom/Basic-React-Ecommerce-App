import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import styles from "./ProductsSection.module.css";

function ProductsSection() {
  const { displayProducts } = useProducts();
  const section1 = displayProducts.slice(0, 10);
  const section2 = displayProducts.slice(10, 20);
  const section3 = displayProducts.slice(20);
  return (
    <>
      {section1.length > 0 && (
        <section className={styles.productsContainer}>
          {section1.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      )}
      {section2.length > 0 && (
        <section className={styles.productsContainer}>
          {section2.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      )}
      {section3.length > 0 && (
        <section className={styles.productsContainer}>
          {section3.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      )}
    </>
  );
}

export default ProductsSection;
