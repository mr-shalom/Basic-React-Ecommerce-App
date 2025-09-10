import styles from "./UserProfile.module.css";

function UserProfile() {
  return (
    <section>
      <div className={styles.acctOverviewBox}>
        <h1 className={styles.acctOverview}>Account Overview</h1>
      </div>

      <div className={styles.overviewDetails}>
        <article className={styles.details}>
          <div className={styles.title}>
            <h2>ACCOUNT DETAILS</h2>
          </div>

          <div className={styles.text}>
            <p className={styles.name}>Shalom Friday</p>
            <p className={styles.email}>vincentshalom7@gmail.com</p>
          </div>
        </article>
        <article className={styles.address}>
          <div className={styles.title}>
            <h2>ADDRESS BOOK</h2>
          </div>
          <div className={styles.text}>
            <p>Your default shipping address:</p>
            <p className={styles.location}>
              High Court, Ota. Ota. SANGO OTTA (OJU ORE), Ogun
            </p>
            <p className={styles.phone}>08164613530</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default UserProfile;
