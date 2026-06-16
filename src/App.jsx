import { useState, useEffect } from "react";
import HeroScroll from "./components/Hero/HeroScroll";
import AboutMe from "./components/AboutMe/AboutMe";
import Modal from "./components/Modal/Modal";
import SlideShow from "./components/Slideshow/Slideshow";
import SlideShowNav from "./components/Slideshow/SlideshowNav";
import Nav from "./components/Nav/Nav";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedWork, setSelectedWork] = useState("Steph Marziano");

  function handleSelectWork(item) {
    setSelectedWork(item);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function handleClose() {
    setModalOpen(false);
    document.body.style.overflow = "visible";
  }

  return (
    <>
      {/* <div className="grainOverlay" /> */}
      <Nav />
      <HeroScroll />
      <AboutMe />

      <SlideShowNav onhandleSelect={handleSelectWork} modalState={modalOpen} />
      <Contact />
      <Reviews />

      <Footer />

      <Modal
        isOpen={modalOpen}
        onClose={handleClose}
        selectedWork={selectedWork}
      />
    </>
  );
}

export default App;
