import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Observer from "gsap/Observer";
import styles from "./SlideShow.module.css";
import portfolio from "../../../portfolio";

gsap.registerPlugin(Observer);

let currentIndex = 0;

export default function SlideShow({ onhandleSelect, modalState }) {
  const containerRef = useRef();
  const overlayRef = useRef(null);
  const observerRef = useRef(null);
  let projects = [...portfolio];
  let countRef = useRef(null);
  let animating = false;

  /*Use a Ref for modalState so that the Observer always has the updated value
otherwise it gets frozen at 'false' after initial render and never sees the new value
*/
  const modalStateRef = useRef(modalState);
  useEffect(() => {
    modalStateRef.current = modalState;
  }, [modalState]);

  /*Check if the device is a touch device
  to disable the scroll Observer (the scroll Observer prevents scrolling and converts 
  scroll input to change slides)*/

  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.userAgent.toLowerCase().includes("mobile") ||
      navigator.userAgent.toLowerCase().includes("tablet")
    );
  }

  const isTouch = isTouchDevice();

  /*useState to monitor when a user has swiped to remove the swipe prompt on mobile version */

  const [hasSwiped, setHasSwiped] = useState(false);

  /*check if animating is false before opening modal */

  function handleSelectProject(projectId) {
    if (!animating) {
      onhandleSelect(projectId);
    } else return;
  }

  useGSAP(() => {
    requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray(`.${styles.slide}`);
        const images = gsap.utils.toArray(`.${styles.landscape}`);
        const imagesAlt = gsap.utils.toArray(`.${styles.landscapeAlt}`);
        const titles = gsap.utils.toArray(`.${styles.title}`);
        const wrap = gsap.utils.wrap(0, sections.length);
        let count = countRef.current;

        //Set initial animation conditions

        gsap.set(sections, { xPercent: 100 });
        gsap.set(sections[0], { xPercent: 0 });
        gsap.set(images, { xPercent: -100 });
        gsap.set(images[0], { xPercent: 0 });
        gsap.set(imagesAlt, { xPercent: -100 });
        gsap.set(imagesAlt[0], { xPercent: 0 });

        //Function to navigate up or down a slide

        function gotoSection(index, direction) {
          animating = true;
          index = wrap(index);
          const tl = gsap.timeline({
            defaults: { duration: 1, ease: "expo.inOut" },
            onComplete: () => (animating = false),
          });

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
                if (count) count.textContent = index + 1;
              },
              null,
              0.4,
            );

          currentIndex = index;
        }
        //Variable to store clean up functions that will be executed at the end

        const cleanups = [];

        //Store isTouchDevice value in a variable

        const isMobile = isTouchDevice();

        //if mobile device monitor screen swipes to increment or decrement slides

        if (isMobile) {
          let touchStartX = 0;
          let touchEndX = 0;
          const container = containerRef.current;

          function handleTouchStart(e) {
            touchStartX = e.changedTouches[0].screenX;
          }

          function handleTouchEnd(e) {
            touchEndX = e.changedTouches[0].screenX;
            const swipeDistance = touchEndX - touchStartX;

            if (Math.abs(swipeDistance) > 20 && !animating) {
              setHasSwiped(true);
              if (swipeDistance > 0) {
                gotoSection(currentIndex - 1, -1);
              } else {
                gotoSection(currentIndex + 1, 1);
              }
            }
          }

          container.addEventListener("touchstart", handleTouchStart);
          container.addEventListener("touchend", handleTouchEnd);
          cleanups.push(() => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchend", handleTouchEnd);
          });

          return () => cleanups.forEach((fn) => fn()); // return early for mobile
        }

        // --- Desktop-only setup ---

        //Observer to check if the Slideshow is in the viewport (threshold 0.99) and if so
        //disable scroll behaviour and use it to increment or decrement slide index

        observerRef.current = Observer.create({
          target: containerRef.current, //only operates when slideshow container is in viewport
          type: "wheel,pointer",
          preventDefault: true,
          wheelSpeed: -2,
          onUp: () => !animating && gotoSection(currentIndex + 1, 1),
          onDown: () => !animating && gotoSection(currentIndex - 1, -1),
          tolerance: 5,
        });

        const intersectionObserver = new IntersectionObserver(
          (entries) => {
            const isVisible = entries[0].isIntersecting;

            if (isVisible && !modalStateRef.current) {
              observerRef.current.enable();
            } else {
              observerRef.current.disable();
            }
          },
          { threshold: 0.9 },
        );

        if (containerRef.current) {
          intersectionObserver.observe(containerRef.current);
        }

        cleanups.push(() => {
          observerRef.current?.kill();
          intersectionObserver.disconnect();
        });

        // --- Keyboard nav ---
        function logKey(e) {
          if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && !animating) {
            gotoSection(currentIndex - 1, -1);
          }
          if (
            (e.code === "ArrowDown" ||
              e.code === "ArrowRight" ||
              e.code === "Space" ||
              e.code === "Enter") &&
            !animating
          ) {
            gotoSection(currentIndex + 1, 1);
          }
        }

        document.addEventListener("keydown", logKey);
        cleanups.push(() => document.removeEventListener("keydown", logKey));

        return () => cleanups.forEach((fn) => fn());
      }, containerRef);
    });

    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(`.${styles.landscape}`);
      const imagesAlt = gsap.utils.toArray(`.${styles.landscapeAlt}`);
      const titles = gsap.utils.toArray(`.${styles.title}`);
      const round = gsap.utils.toArray(`.${styles.round}`);
      let overlay = overlayRef.current;

      const elements = [...images, ...imagesAlt, ...titles, ...round];

      if (modalState) {
        observerRef.current?.disable();

        // Modal is opening: fade out elements
        gsap.to(overlay, { opacity: 0 });
        gsap.to(elements, {
          opacity: 0,
          y: -100,
          duration: 0.2,
          ease: "power2.out",
          stagger: 0.05, // Stagger the fade-out
        });
      } else {
        observerRef.current?.enable();
        // Modal is closing: fade in elements

        gsap.fromTo(
          elements,
          { opacity: 0 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0, // Stagger the fade-in
          },
        );
        gsap.to(overlay, { opacity: 1 });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [modalState]);

  return (
    <div className={styles.container} ref={containerRef}>
      {projects.map((project, i) => {
        let titleArray = project.title.split(" ");
        return (
          <section
            className={styles.slide}
            key={i}
            onClick={() => handleSelectProject(project.title)}
            id={styles[project.id]}
          >
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
                  alt="Round website preview image"
                />
              </div>

              <div className={styles.landscapeContainer}>
                <img
                  className={`${styles.landscape} ${styles.image}`}
                  src={project.landscape}
                  alt="Landscape website preview image"
                />
              </div>

              <div className={styles.landscapeAltContainer}>
                <img
                  className={`${styles.landscapeAlt} ${styles.image}`}
                  src={project.landscapeAlt}
                  alt="Round website preview image"
                />
              </div>
            </div>
          </section>
        );
      })}
      <section className={styles.overlay} ref={overlayRef} id="portfolio">
        <div className={styles.nav}>
          <a href="#about">
            <h1> &uarr; Home </h1>
          </a>
        </div>
        <div className={styles.overlayTextContainer}>
          {/* Mobile swipe hint */}
          {isTouch && !hasSwiped && (
            <div className={styles.swipeHint}>
              <span className={styles.chevron}>&larr;</span>
              <span className={styles.hintText}>Swipe</span>
              <span className={styles.chevron}>&rarr;</span>
            </div>
          )}

          <div className={styles.overlayText}>
            <h2>Click for more info...</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
