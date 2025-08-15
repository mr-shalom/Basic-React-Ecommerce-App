import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import Sort from "./Sort";

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState("");
  const [query, searchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");

  const filterQuery = (filterQuery) => searchQuery(filterQuery);

  const sortByCategory = (sortCategory) => setCategory(sortCategory);

  useEffect(() => {
    const req = async function () {
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Error fetching products");
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    req();
  }, []);

  useEffect(() => {
    let productsToDisplay = allProducts;

    if (query) {
      // prettier-ignore
      productsToDisplay = productsToDisplay.filter((product) => {
        return `${product.title.toLowerCase()} ${product.description.toLowerCase()}`.includes(query)});
    }

    if (category) {
      productsToDisplay = productsToDisplay.filter(
        (product) => product.category === category
      );
    }

    setFilteredProducts(productsToDisplay);
  }, [query, category, allProducts]);

  const productsCategory = new Set(
    allProducts.map((product) => product.category)
  );

  return (
    <section className={error ? "no-products" : "products"}>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div>
          <div className="filter-and-sort">
            <Filter filterQuery={filterQuery} query={query} />
            <Sort
              sortByCategory={sortByCategory}
              category={category}
              productsCategory={productsCategory}
            />
          </div>
          <div className="products-container">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
