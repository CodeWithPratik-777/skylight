import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

function Venue() {
  const imageContainerRef = useRef(null);
  const isInView = useInView(imageContainerRef, {
    amount: 0.4, // 40% in view
    once: true,  // only animate once
  });

  return (
    <div className="container mx-auto h-screen pt-36 text-white bg-black px-10 font-manrope relative">
      <div className="h-3/5 flex justify-center items-center flex-col text-center z-10 relative">
        <span className="bg-[#b0a6df] text-sm font-medium text-black py-2 px-3 rounded-full">Venue</span>
        <h1 className="text-5xl font-medium my-3">Studio Draadloos</h1>
        <p className="text-xl font-medium opacity-[0.5]">
          Kabelgracht 17 <br />
          1234 AB Norcastle
        </p>
        <a href="#" className="text-xl font-medium mt-3 hover:text-[#b0a6df] transition ease-in">
          Get directions →
        </a>
      </div>

      <div
        ref={imageContainerRef}
        className="relative h-2/5 max-sm:h-1/4 max-sm:mt-8 bg-[#1c1c1c] rounded-tl-2xl rounded-tr-2xl overflow-visible flex justify-center"
      >
        <motion.img
          src="src/assets/images/Venue/img.png"
          alt=""
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.25, 0.8, 0.25, 1] }}
          className="relative -top-10 h-[calc(100%+2.5rem)] w-auto object-contain z-10"
          style={{
            WebkitMaskImage: 'linear-gradient(300deg, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 45%)',
            maskImage: 'linear-gradient(300deg, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 45%)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
        />
      </div>
    </div>
  );
}

export default Venue;
