import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import styles from "./Filter.module.css";

function Filter() {
  const [query, setQuery] = useState("");
  const { filter } = useProducts();

  useEffect(() => {
    filter(query);
  }, [query]);

  return (
    <form className={styles.filterForm} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className={styles.filter}
        placeholder="Enter item to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default Filter;
