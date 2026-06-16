import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Observer from "gsap/Observer";
import styles from "./HeroScroll.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRefs = useRef([]); // Store references to all elements
  const subTitleRefs = useRef([]);
  const arrowRef = useRef(null);
  const observerRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    //set initial conditions

    gsap.set(backgroundRef.current, { y: 20, opacity: 0 });
    gsap.set(titleRefs.current[0], { opacity: 0, y: -20 });
    gsap.set(titleRefs.current[1], { opacity: 0, y: 20 });
    gsap.set(titleRefs.current[2], { opacity: 0, y: -20 });
    gsap.set(subTitleRefs.current[0], { opacity: 0 });
    gsap.set(subTitleRefs.current[1], { opacity: 0 });

    gsap.set(arrowRef.current, { opacity: 0 });

    const tl = gsap.timeline({ pause: true, delay: 0.2 });

    tl.to(backgroundRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.1,
    });
    tl.to(titleRefs.current, {
      opacity: 1,
      y: -5,
      delay: 0.2,
    })
      .to(subTitleRefs.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(arrowRef.current, {
        opacity: 1,
      });

    // Function to set initial positions
    const setPositions = (leftOffset, rightOffset) => {
      titleRefs.current.forEach((el, index) => {
        if (!el) return;
        if (index == 3) return;
        const offsetX =
          index % 2 === 0
            ? window.innerWidth * leftOffset
            : window.innerWidth * rightOffset;
        gsap.set(el, { x: offsetX });
      });
    };

    // Function to animate elements
    const animateElements = (leftMove, rightMove) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRefs.current[0],
          start: () => `top+=${window.innerHeight * 0.8} bottom`,
          end: "top -50%",
          scrub: 1,
        },
      });

      tl.to(titleRefs.current, {
        x: (index) =>
          index % 2 === 0
            ? window.innerWidth * leftMove
            : window.innerWidth * rightMove,
        duration: 4,
        ease: "power2.out",
      });
    };

    observerRef.current = Observer.create({
      type: "wheel,touch,pointer",
      once: true, // automatically kills the observer after first trigger
      onDown: () => {
        gsap.to(arrowRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    });

    // GSAP matchMedia for responsive animations
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Large screens (desktops)
      setPositions(0.05, -0.02);
      animateElements(-0.05, 0.05);
    });

    mm.add("(max-width: 1023px) and (min-width: 600px)", () => {
      // Tablets
      setPositions(0.07, -0.06);
      animateElements(-0.04, 0.04);
    });

    mm.add("(max-width: 599px)", () => {
      // Mobile screens
      setPositions(0.01, -0.01); // Further reduced offsets for mobile
      animateElements(-0.01, 0.01); // Adjusted final positions for mobile
    });

    return () => {
      mm.revert(); // Clean up media queries on unmount
    };
  }, []);
  const titleArray = [1, 2, 3];

  return (
    <section className={styles.hero}>
      <div className={styles.grainOverlay} />
      <div
        className={styles.heroText}
        ref={backgroundRef}
        style={{ opacity: 0 }}
      >
        <div className={styles.logoContainer}>
          <h1
            ref={(el) => {
              titleRefs.current[0] = el;
            }}
            className={`${styles.heroTitle}`}
          >
            Dead
          </h1>
        </div>
        <div className={styles.logoContainer}>
          <h1
            ref={(el) => {
              titleRefs.current[1] = el;
            }}
            className={`${styles.heroTitle} ${styles.outline}`}
          >
            Culture
          </h1>
        </div>
        {/* <div className={styles.logoContainer}>
          <h2
            ref={(el) => {
              titleRefs.current[2] = el;
            }}
            className={`${styles.heroTitle}`}
          >
            Designs
          </h2>
        </div> */}
        <h2
          ref={(el) => {
            subTitleRefs.current[0] = el;
          }}
          className={styles.subtitle}
        >
          BOLD MINIMALISM
        </h2>
        <h3
          ref={(el) => {
            subTitleRefs.current[1] = el;
          }}
          className={styles.subtitle}
        >
          Web Design & Development for Creative Brands
        </h3>
      </div>
      <div className={styles.scrollIndicator} ref={arrowRef}>
        <div className={styles.scrollDown}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.scrollDown}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

/* {titleArray.map((num, index) => (
          <div
            key={num}
            ref={(el) => {
              titleRefs.current[index] = el;
            }}
            className={styles.textContainer}
          >
            <h1 className={styles.heroTitle}>DEAD</h1>
            <h1 className={styles.heroSubtitle}>Culture</h1>
    
          </div>
        ))} */
