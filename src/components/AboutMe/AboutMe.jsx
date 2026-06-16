import styles from "./AboutMe.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Observer from "gsap/Observer";
import hero from "../../assets/sam-one.webp";
gsap.registerPlugin(Observer);

export default function AboutMe() {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <>
      <section className={styles.About} id="about" data-nav-section="about">
        <div className={styles.grainOverlay} />
        <div className={styles.logoContainer}>
          {" "}
          <h1 className={styles.title}>Dead</h1>
          <h1 className={`${styles.title} ${styles.outline}`}>Culture</h1>
        </div>
        <div className={styles.container} ref={aboutRef}>
          {" "}
          <div className={styles.aboutContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.titleText}>About Me</h1>
              <div className={styles.aboutText}>
                <p>
                  I’m Sam — the designer and developer behind{" "}
                  <span className={styles.accent}>Dead Culture</span>. I began
                  my career as a musician before teaching myself to code on
                  tour.
                </p>
                <p>
                  Based in London, I make high contrast websites for creative
                  people and businesses. I love to use texture and bold colours
                  to create designs that feel unique, warm and expresive. I love
                  minimalist layouts that maximise impact.
                </p>

                <p>
                  Every project is custom made. That means no templates and no
                  unneccessary fluff. Just fast, mobile-responsive sites with
                  clean code, custom animations and precise details.
                </p>

                <a className={styles.link} href="#portfolio">
                  {" "}
                  <p>
                    &darr; Below is a selection of my most recent work &darr;
                  </p>
                </a>
                {/* <h3 className={styles.titleText}>Get In Touch</h3> */}
                <div className={styles.contactText}>
                  <h1 className={styles.titleText} style={{ fontWeight: 600 }}>
                    Let's work together.
                  </h1>
                  <p>
                    I'm always looking for new interesting project to work on.
                    If you have an idea or just want to say hi then get in
                    touch.
                  </p>
                  <a
                    className={styles.emailLink}
                    href="mailto:info@deadculture.co.uk"
                  >
                    {" "}
                    <h2 style={{ fontWeight: 700 }} className={styles.accent}>
                      info@deadculture.co.uk
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutContainer}>
            <div className={styles.imageContainer}>
              <img
                src={hero}
                alt="Sam - web designer in Hackney"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
