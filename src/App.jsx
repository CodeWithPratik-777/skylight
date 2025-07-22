import React, { useRef, useEffect, useState } from "react";
import Home from "./pages/Home";
import EventIntro from "./pages/EventIntro";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Venue from "./pages/Venue";
import BuyNowSection from "./pages/BuyNowSection";
import Footer from "./pages/Footer";

function App() {
  const homeRef = useRef(null);
  const [isHomeInView, setIsHomeInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (homeRef.current) observer.observe(homeRef.current);
    return () => homeRef.current && observer.unobserve(homeRef.current);
  }, []);

  return (
    <div className="min-h-screen mx-auto bg-black">
      <div ref={homeRef}>
        <Home />
      </div>
       <EventIntro />
      <About hideFixedBar={isHomeInView} />
      <Speakers />
      <Schedule />
      <Venue />
      <BuyNowSection />
      <Footer />
    </div>
  );
}

export default App;
