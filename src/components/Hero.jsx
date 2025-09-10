import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>
          Explore Our Modern Collection Of Designer Wares
        </h1>
        <p className={styles.heroDescription}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          eveniet architecto eius qui velit voluptatibus sunt at voluptates
          adipisci rem.
        </p>
        <div>
          <Link to="/app/products" className={styles.exploreLink}>
            Eplore Styles
            <IoIosArrowRoundForward className={styles.arrowRight} />
          </Link>
        </div>
      </div>

      <div className={styles.articles}>
        <article className={styles.article}>
          <h2>Modern</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            dolorem asperiores tempore quos consequatur, nesciunt amet aliquam
            fugit magnam saepe.
          </p>
        </article>
        <article className={styles.article}>
          <h2>Stylish</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            dolorem asperiores tempore quos consequatur, nesciunt amet aliquam
            fugit magnam saepe.
          </p>
        </article>
        <article className={styles.article}>
          <h2>Elegant</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            dolorem asperiores tempore quos consequatur, nesciunt amet aliquam
            fugit magnam saepe.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Hero;
