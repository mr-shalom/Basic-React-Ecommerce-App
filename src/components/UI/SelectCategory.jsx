import { useProducts } from "../../hooks/useProducts";
import styles from "./SelectCategory.module.css";
import { capitalizeWord } from "../../utils/helperFunctions";
import { useEffect, useState } from "react";

function SelectCategory() {
  const [option, setOption] = useState("");
  const { category, products } = useProducts();

  useEffect(() => {
    category(option);
  }, [option]);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <form className={styles.sortForm}>
      <select
        className={styles.select}
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="" key={categories.length + 1}>
          All Products
        </option>
        ;
        {categories.map((category) => {
          capitalizeWord(category);

          return (
            <Option
              key={category}
              value={category}
              text={capitalizeWord(category)}
            />
          );
        })}
        <Option />
      </select>
    </form>
  );
}

function Option({ value, text }) {
  return <option value={value}>{text}</option>;
}

export default SelectCategory;
