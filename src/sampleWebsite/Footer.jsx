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
];

function Footer() {
  return (
    <footer className="footer">
      <FooterSection />
      <CopyRight />
    </footer>
  );
}

function FooterSection() {
  return (
    <section className="footer-section">
      {footerDetails.map((data) => (
        <FooterLinks key={data.id} data={data} />
      ))}
    </section>
  );
}

function FooterLinks({ data }) {
  return (
    <ul className="footer-links">
      <h1 className="footer-title">{data.title}</h1>
      {/* prettier-ignore */}
      <li><a href="#">{data.about}</a></li>
      {/* prettier-ignore */}
      <li><a href="#">{data.review}</a></li>
      {/* prettier-ignore */}
      <li><a href="#">{data.privacy}</a></li>
      {/* prettier-ignore */}
      <li><a href="#">{data.cookie}</a></li>
      {/* prettier-ignore */}
      <li><a href="#">{data.terms}</a></li>
      {/* prettier-ignore */}
      <li><a href="#">{data.use}</a></li>
      {/* prettier-ignore */}
      <li><a href="#">{data.site}</a></li>
    </ul>
  );
}

function CopyRight() {
  return (
    <div className="footer-description">
      <p className="copy-right">
        Developed by Vincent &copy;2025 All rights reserved
      </p>
    </div>
  );
}

export default Footer;
