import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Observer from "gsap/dist/Observer";
import styles from "./Modal.module.css";
import portfolio from "../../../portfolio";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger);

export default function Modal({ isOpen, onClose, selectedWork }) {
  /* REFS */
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const closeButtonRef = useRef(null);

  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const secondSectionRef = useRef([]);

  const webImageRef = useRef([]);

  /*Define selected project */

  const modalContent = portfolio.find((item) => item.title === selectedWork);
  let titleArray = modalContent.title.split(" ");

  useEffect(() => {
    if (!isOpen) return;

    /*Animations */
    const tl = gsap.timeline();

    tl.fromTo(
      modalRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      }
    )
      .from(titleRef.current, { opacity: 0, y: 20, duration: 0.5 }, "-=0.2")
      .from(leftRef.current, { x: -50, opacity: 0, duration: 0.5 }, "-=0.3")
      .from(rightRef.current, { x: 50, opacity: 0, duration: 0.5 }, "-=0.5");

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      gsap.to(webImageRef.current[0], {
        x: x * -20,
        y: y * -20,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(webImageRef.current[1], {
        x: x * 20,
        y: y * 20,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            });
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    secondSectionRef.current.forEach((el) => {
      if (el) {
        gsap.set(el, { opacity: 0, y: 30 }); // initial state
        observer.observe(el);
      }
    });

    /*Mouse based animation of web images */
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      // When the modal is hidden, we want to remain at the top of the scroll position
      document.body.style.position = "";
      document.body.style.top = "";
    };
  }, [isOpen]);

  if (!isOpen) return null; // Prevents rendering when closed

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.fixed}>
          {" "}
          <button
            className={styles.closeButton}
            onClick={onClose}
            ref={closeButtonRef}
          >
            ✕
          </button>
          <div className={styles.logoContainer} ref={titleRef}>
            <a target="/blank" href={`${modalContent.link}`}>
              {" "}
              <h1 className={styles.heroTitle} style={{ fontStyle: "italic" }}>
                {titleArray[0]}
              </h1>
              <h1 className={styles.heroOutline}>{titleArray[1]}</h1>
              <h2>Visit Site</h2>
            </a>
          </div>
        </div>

        <div className={styles.modalContent} ref={contentRef}>
          <div className={styles.contentContainer} id={styles.first}>
            <div className={styles.left}>
              <div className={styles.details} ref={leftRef}>
                <h1 className={styles.subHeading}>Overview</h1>
                <h3>{modalContent.overview}</h3>
                <h1 className={styles.subHeading}>Objectives</h1>
                {modalContent.objectives.map((objective, index) => (
                  <h3 className={styles.textLine} key={index}>
                    {objective}
                  </h3>
                ))}
              </div>
            </div>
            <div className={styles.right} ref={rightRef}>
              <a href={modalContent.link} target="_blank">
                <div className={styles.imageContainer}>
                  {modalContent.modalVideo && (
                    <video className={styles.webVideo} autoPlay loop muted>
                      <source src={modalContent.modalVideo}></source>
                    </video>
                  )}
                  {modalContent.modalImage && (
                    <img
                      className={styles.webImage}
                      src={modalContent.modalImage}
                      alt={`${modalContent.title} main image`}
                      ref={(el) => (webImageRef.current[0] = el)}
                    />
                  )}
                  {modalContent.modalImageAlt && (
                    <img
                      className={styles.webImage}
                      src={modalContent.modalImageAlt}
                      alt={`${modalContent.title} alternative`}
                      ref={(el) => (webImageRef.current[1] = el)}
                    />
                  )}
                </div>
              </a>
            </div>
          </div>
          <div className={styles.contentContainer} id={styles.second}>
            <div
              className={styles.left}
              ref={(el) => (secondSectionRef.current[0] = el)}
            >
              <div className={styles.details}>
                <div>
                  <h1 className={styles.subHeading}>Design</h1>
                  {modalContent.design.map((design, index) => (
                    <h3 className={styles.textLine} key={index}>
                      {design}
                    </h3>
                  ))}
                </div>
                <div>
                  <h1 className={styles.subHeading}>Technical</h1>
                  {modalContent.technical.map((tech, index) => (
                    <h3 className={styles.textLine} key={index}>
                      {tech}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={styles.right}
              ref={(el) => (secondSectionRef.current[1] = el)}
            >
              <a href={modalContent.link} target="_blank">
                <div className={styles.mobileImageContainer}>
                  <img
                    className={styles.mobileImage}
                    src={modalContent.mobileImage}
                    alt={`${modalContent.title} mobile image`}
                  />

                  <img
                    className={styles.mobileImage}
                    src={modalContent.mobileAlt}
                    alt={`${modalContent.title} mobile image alternative`}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
