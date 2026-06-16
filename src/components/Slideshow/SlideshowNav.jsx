import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./SlideShow.module.css";
import portfolio from "../../../portfolio";

export default function SlideShow({ onhandleSelect, modalState }) {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const countRef = useRef(null);
  const currentIndexRef = useRef(0);
  const animatingRef = useRef(false);
  const gotoSectionRef = useRef(null);

  const projects = [...portfolio];

  function handleSelectProject(projectId) {
    if (!animatingRef.current) {
      onhandleSelect(projectId);
    }
  }

  const [random, setRandom] = useState(2300);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRandom(Math.random() * 5000);
    }, random);

    return () => clearTimeout(timeout);
  }, [random]);

  useEffect(() => {
    const sections = gsap.utils.toArray(`.${styles.slide}`);

    gsap.to(sections[currentIndexRef.current], {
      y: 12,
      opacity: 0.2,
      duration: 0.1,
    });

    gsap.to(sections[currentIndexRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.2,
    });
  }, [random]);

  function handlePreviousSlide(event) {
    event.stopPropagation();
    const prevIndex =
      (currentIndexRef.current - 1 + portfolio.length) % portfolio.length;
    gotoSectionRef.current?.(prevIndex, -1);

    gsap.to(containerRef.current, {
      "--glow-colour": portfolio[prevIndex].glow,
      duration: 2,
      ease: "power2.out",
    });
  }

  function handleNextSlide(event) {
    event.stopPropagation();

    const nextIndex = (currentIndexRef.current + 1) % portfolio.length;

    gotoSectionRef.current?.(nextIndex, 1);

    gsap.to(containerRef.current, {
      "--glow-colour": portfolio[nextIndex].glow,
      duration: 2,
      ease: "power2.out",
    });
  }

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(`.${styles.slide}`);
      const images = gsap.utils.toArray(`.${styles.landscape}`);
      const imagesAlt = gsap.utils.toArray(`.${styles.landscapeAlt}`);
      const titles = gsap.utils.toArray(`.${styles.title}`);
      const wrap = gsap.utils.wrap(0, sections.length);

      const current = currentIndexRef.current;

      if (sections.length === 0) return undefined;

      gsap.set(sections, { xPercent: 100 });
      gsap.set(sections[0], { xPercent: 0 });
      gsap.set(images, { xPercent: -100 });
      gsap.set(images[0], { xPercent: 0 });
      gsap.set(imagesAlt, { xPercent: -100 });
      gsap.set(imagesAlt[0], { xPercent: 0 });

      gsap.set(containerRef.current, {
        "--glow-colour": portfolio[0].glow,
      });

      gotoSectionRef.current = (nextIndex, direction) => {
        if (animatingRef.current || sections.length === 0) return;

        const index = wrap(nextIndex);
        const currentIndex = currentIndexRef.current;

        if (index === currentIndex) return;

        animatingRef.current = true;

        const tl = gsap.timeline({
          defaults: { duration: 1, ease: "expo.inOut" },
          onComplete: () => {
            animatingRef.current = false;
          },
        });

        // gsap.to(containerRef.current, {
        //   "--glow-colour": project.glow,
        //   duration: 1,
        //   ease: "power2.inOut",
        // });

        tl.fromTo(
          titles[index],
          { yPercent: 100 * direction, opacity: 0 },
          { yPercent: 0, opacity: 1 },
          0,
        )
          .fromTo(
            sections[index],
            { xPercent: 100 * direction },
            { xPercent: 0 },
            0,
          )
          .fromTo(
            sections[currentIndex],
            { xPercent: 0 },
            { xPercent: -100 * direction },
            0,
          )
          .fromTo(
            images[index],
            { xPercent: 125 * direction, scaleX: 1.5, scaleY: 1.3 },
            { xPercent: 0, scaleX: 1, scaleY: 1 },
            0,
          )
          .fromTo(
            imagesAlt[index],
            { xPercent: 125 * direction, scaleX: 1.5, scaleY: 1.3 },
            { xPercent: 0, scaleX: 1, scaleY: 1 },
            0,
          )
          .call(
            () => {
              if (countRef.current) countRef.current.textContent = index + 1;
            },
            null,
            0.4,
          );

        currentIndexRef.current = index;
      };

      function handleKeyDown(event) {
        if (event.code === "ArrowUp" || event.code === "ArrowLeft") {
          gotoSectionRef.current?.(currentIndexRef.current - 1, -1);
        }

        if (
          event.code === "ArrowDown" ||
          event.code === "ArrowRight" ||
          event.code === "Space" ||
          event.code === "Enter"
        ) {
          gotoSectionRef.current?.(currentIndexRef.current + 1, 1);
        }
      }

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        gotoSectionRef.current = null;
      };
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (!countRef.current) return;
    countRef.current.textContent = currentIndexRef.current + 1;
  }, []);

  useGSAP(
    () => {
      const images = gsap.utils.toArray(`.${styles.landscape}`);
      const imagesAlt = gsap.utils.toArray(`.${styles.landscapeAlt}`);
      const titles = gsap.utils.toArray(`.${styles.title}`);
      const round = gsap.utils.toArray(`.${styles.round}`);
      const overlay = overlayRef.current;
      const elements = [...images, ...imagesAlt, ...titles, ...round];

      if (modalState) {
        gsap.to(overlay, { opacity: 0 });
        gsap.to(elements, {
          opacity: 0,
          y: -100,
          duration: 0.2,
          ease: "power2.out",
          stagger: 0.05,
        });
      } else {
        gsap.fromTo(
          elements,
          { opacity: 0 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0,
          },
        );
        gsap.to(overlay, { opacity: 1 });
      }
    },
    { dependencies: [modalState], scope: containerRef },
  );

  return (
    <section
      className={styles.container}
      ref={containerRef}
      id="portfolio"
      data-nav-section="portfolio"
    >
      <div className={styles.grainOverlay} />
      <div className={styles.slideContainer}>
        {projects.map((project, i) => {
          const titleArray = project.title.split(" ");

          return (
            <div
              className={styles.slide}
              key={project.id ?? i}
              onClick={() => handleSelectProject(project.title)}
              id={styles[project.id]}
            >
              <div className={styles.videoContainer}>
                <video className={styles.video} autoPlay muted loop playsInline>
                  <source src="/video-edit.mp4" type="video/mp4" />
                </video>
              </div>
              <div className={styles.grainOverlay} />
              <div className={styles.slideInner}>
                <div className={`${styles.logoContainer} ${styles.title}`}>
                  <h1
                    className={styles.heroTitle}
                    style={{ fontStyle: "italic" }}
                  >
                    {titleArray[0]}
                  </h1>
                  <h1 className={styles.heroOutline}>{titleArray[1]}</h1>
                </div>

                <div className={styles.roundContainer}>
                  <img
                    className={styles.round}
                    src={project.round}
                    alt="Round website preview"
                  />
                </div>

                <div className={styles.landscapeContainer}>
                  <img
                    className={`${styles.landscape} ${styles.image}`}
                    src={project.landscape}
                    alt="Landscape website preview"
                  />
                </div>

                <div className={styles.landscapeAltContainer}>
                  <img
                    className={`${styles.landscapeAlt} ${styles.image}`}
                    src={project.landscapeAlt}
                    alt="Alternate landscape website preview"
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.overlayTextContainer}>
          <div className={styles.overlayText}>
            <h2>Click for more info...</h2>
          </div>
        </div>
        <div className={styles.overlayCount}>
          <p>
            0<span ref={countRef}>1</span>
          </p>
        </div>
      </div>
      <div className={styles.slideControls}>
        <div className={styles.buttons}>
          <div className={styles.buttonOverflowContainer}>
            {" "}
            <button
              className={styles.navButton}
              onClick={handlePreviousSlide}
              aria-label="View previous project"
            >
              <p className={styles.buttonText}>PREV</p>
              <p className={styles.arrow}> &larr;</p>
            </button>
          </div>

          <div className={styles.buttonOverflowContainer}>
            {" "}
            <button
              className={styles.navButton}
              onClick={handleNextSlide}
              aria-label="View next project"
            >
              <p className={styles.buttonText}>NEXT</p>
              <p className={styles.arrow}> &rarr;</p>
            </button>
          </div>

          {/* <img
            onClick={handlePreviousSlide}
            src="/hand.png"
            alt="Previous arrow icon"
            id={styles.left}
            className={styles.hand}
            aria-label="View previous project"
          />

          <img
            onClick={handleNextSlide}
            src="/hand.png"
            alt="Next arrow icon"
            id={styles.right}
            className={styles.hand}
            aria-label="View next project"
          /> */}
        </div>
      </div>

      {/* <div className={styles.overlay} ref={overlayRef} id="portfolio">
        <div className={styles.nav}>
          <a href="#about">
            <h1>&uarr; Home</h1>
          </a>
        </div>
      </div> */}
    </section>
  );
}
