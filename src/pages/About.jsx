import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

function About({ hideFixedBar }) {
  const aboutRef = useRef(null);

  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { threshold: 0.4 });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (imageInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [imageInView, hasAnimated]);

  return (
    <>
      <div
        ref={aboutRef}
        className="relative h-auto text-white pt-10 bg-black container mx-auto flex font-manrope justify-center max-lg:flex-col"
      >
        <div className="w-1/2 p-10">
          <span className="bg-[#b0a6df] text-sm font-medium text-black py-2 px-3 rounded-full">
            About
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mt-5">Creatives.</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#b0a6df] my-3">Conversations.</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">Connections.</h1>

        </div>

        <div className="w-1/2 flex items-end px-10 pb-36 max-sm:pb-10 text-3xl max-sm:text-2xl font-medium opacity-[0.5] max-lg:w-auto">
          <p>
            This isn’t your typical creative event. Think live talks, real
            connections, design jams, and no awkward networking.
          </p>
        </div>

        <motion.div
          className="fixed bottom-6 inset-x-0 mx-auto w-[90%] sm:w-[30rem] h-16 border-2 px-3 border-gray-900 rounded-xl flex gap-2 items-center justify-evenly bg-black bg-opacity-[0.8] z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={hideFixedBar ? { y: 100, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="text-[11px] sm:text-sm text-center">
            <p className="font-bold">1 Jul - 2 Jul, 2026</p>
            <span className="font-medium opacity-50">09:00 - 21:00</span>
          </div>

          <hr className="rotate-90 text-white w-6 opacity-50" />

          <div className="text-[11px] sm:text-sm text-center">
            <a href="#">
              <p className="font-bold">Studio Draadloos</p>
              <span className="font-medium opacity-50">Kabelgracht 17, Norcastle</span>
            </a>
          </div>

          <hr className="rotate-90 text-white w-6 opacity-50" />

          <div className="text-[11px] sm:text-sm text-center">
            <p className="font-bold hover:text-[#7568af] cursor-pointer transition duration-150" onClick={() => { const el = document.getElementById("buytickets"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}>
              Buy tickets
            </p>
          </div>
        </motion.div>

      </div>

      <div
        ref={imageRef}
        className="relative container mx-auto px-4 bg-black flex items-center justify-center "
      >
        <div className="relative w-full flex justify-center items-start py-4 max-h-[85vh] rounded-2xl overflow-hidden bg-black">
          <hr className="absolute z-10 top-8 left-4 w-20 max-sm:w-9 border-1 border-white rounded-full" />

          <img
            src="src/assets/images/eventmakers/about_img.jpeg"
            alt=""
            className="w-full object-cover rounded-2xl"
          />

          <motion.div
            initial={{ left: '10%', width: '90%' }}
            animate={hasAnimated ? { left: '100%', width: '0%' } : { left: '10%', width: '90%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute top-0 h-full bg-black z-20"
          />
        </div>
      </div>
    </>
  );
}

export default About;
