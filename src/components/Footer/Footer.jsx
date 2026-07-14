"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

import styles from "./Footer.module.css";

export default function Footer() {
  const marquee = [
    "bold minimalism",
    "web design",
    "development",
    "SEO",
    "branding",
  ];

  useEffect(() => {
    const track = trackRef.current;

    gsap.to(track, {
      xPercent: -50,
      duration: 30,
      repeat: -1,
      ease: "none",
    });
  }, []);

  const trackRef = useRef(null);
  return (
    <>
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
          {/* <div className={styles.middle}>
          <h1>Get In Touch</h1>
          <p>Available for freelance projects</p>
          <p>
            {" "}
            <a href="mailto:info@deadculture.co.uk">info@deadculture.co.uk</a>
          </p>
        </div> */}
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
    </>
  );
}
