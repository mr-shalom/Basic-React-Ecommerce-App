import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

const footerDetails = [
  {
    id: 1,
    title: "Company",
    about: "About us",
    review: "Reviews",
    privacy: "Privacy policy",
    cookie: "Cookie policy",
    terms: "Terms & conditions",
    use: "Acceptable use policy",
    site: "Sitemap",
  },

  {
    id: 2,
    title: "Shipping services",
    about: "Ship a package",
    review: "Track a product",
    privacy: "Domestic shipping",
    cookie: "International shipping",
    terms: "Bulk shipping",
    use: "Couriers",
    site: "Delivery services",
  },
  {
    id: 3,
    title: "Customers",
    about: "Log in",
    review: "Register",
    privacy: "Contact us",
    cookie: "Support hub",
    terms: "Preferences ",
  },
  {
    id: 4,
    title: "Company",
    about: "About us",
    review: "Reviews",
    privacy: "Privacy policy",
    cookie: "Cookie policy",
    terms: "Terms & conditions",
    use: "Acceptable use policy",
    site: "Sitemap",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterSection />
      <CopyRight />
    </footer>
  );
}

function FooterSection() {
  return (
    <section className={styles.footerSection}>
      {footerDetails.map((data) => (
        <FooterLinks key={data.id} data={data} />
      ))}
    </section>
  );
}

function FooterLinks({ data }) {
  return (
    <ul className={styles.footerLinks}>
      <h1 className={styles.footerTitle}>{data.title}</h1>
      {/* prettier-ignore */}
      <li><Link to="" className={styles.footerLink}>{data.about}</Link></li>
      {/* prettier-ignore */}
      <li><Link className={styles.footerLink} to="">{data.review}</Link></li>
      {/* prettier-ignore */}
      <li><Link className={styles.footerLink} to="">{data.privacy}</Link></li>
      {/* prettier-ignore */}
      <li><Link className={styles.footerLink} to="">{data.cookie}</Link></li>
      {/* prettier-ignore */}
      <li><Link className={styles.footerLink} to="">{data.terms}</Link></li>
      {/* prettier-ignore */}
      <li><Link className={styles.footerLink} to="">{data.use}</Link></li>
      {/* prettier-ignore */}
      <li><Link className={styles.footerLink} to="">{data.site}</Link></li>
    </ul>
  );
}

function CopyRight() {
  return (
    <div className={styles.grayfooterbg}>
      <div className={styles.footerDescription}>
        <p className={styles.copyRight}>
          Developed by Vincent &copy;{new Date().getFullYear()} All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
