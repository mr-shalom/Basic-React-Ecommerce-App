import styles from "./Home.module.css";
import Hero from "../components/Hero";

function Home() {
  return (
    <section className={styles.container}>
      <Hero />
    </section>
  );
}

export default Home;
