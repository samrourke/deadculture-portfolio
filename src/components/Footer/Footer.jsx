import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grainOverlay} />
      <div className={styles.top}>
        <img
          className={styles.logo}
          src="./src/assets/logoBeige.png"
          alt="Dead Culture Logo"
        />
        <p>Design / Development / Experience</p>
      </div>

      <div className={styles.bottom}>
        <div className={styles.middle}>
          <h2>Available for freelance projects</h2>
          <h2>
            {" "}
            <a href="mailto:info@deadculture.co.uk">info@deadculture.co.uk</a>
          </h2>
        </div>
        {/* <div className={styles.links}>
          <h2>
            <a href="#">Instagram</a>
          </h2>
          <h2>
            <a href="#">Github</a>
          </h2>
        </div> */}

        <p>© 2026 Dead Culture</p>
      </div>
    </footer>
  );
}
