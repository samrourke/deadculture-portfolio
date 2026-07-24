"use client";

import { useEffect, useState } from "react";

import styles from "./Nav.module.css";

export default function Nav() {
  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Reviews", href: "#reviews", id: "reviews" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            console.log("Active section:", entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.5 },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={`${styles.navItem} ${active === link.id ? styles.active : ""}`}
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
