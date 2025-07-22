import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Marquee from "react-fast-marquee";

const otherImages = [
  "img1.jpeg", "img2.jpeg", "img3.jpeg",
  "img4.jpeg", "img5.jpeg", "img6.jpeg"
];

function EventIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const [showOthers, setShowOthers] = useState(false);
  const [marqueeStart, setMarqueeStart] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowOthers(true);
        const fullAnimDone = setTimeout(() => {
          if (isMobile) setMarqueeStart(true);
        }, 1600);
        return () => clearTimeout(fullAnimDone);
      }, 2400);
      return () => clearTimeout(timer);
    }
  }, [isInView, isMobile]);

  const imageSizeClasses = `
    w-20 h-32
    lg:w-28 lg:h-40
    xl:w-36 xl:h-52
    object-cover rounded-xl shadow-lg
  `;

  const allImages = [...otherImages.slice(0, 3), "img7.jpeg", ...otherImages.slice(3)];

  return (
    <div
      ref={ref}
      className='sticky top-0 z-0 bg-black h-screen text-white mx-auto flex justify-center items-center flex-col text-center font-manrope overflow-hidden'
    >

      <h1 className='text-7xl max-lg:text-6xl max-sm:text-5xl font-medium mb-56 relative z-10'>
        An event for <span className='text-[#b0a6df]'>makers</span>
      </h1>

      <div
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0"
        style={{
          width: `${7 * 160 + 6 * 16}px`,
        }}
      >
        {marqueeStart && isMobile ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Marquee
              speed={35}
              gradient={false}
              pauseOnHover
              className="px-0"
            >
              <div className="flex items-center pl-2">
                {[...allImages, ...allImages].map((img, i) => (
                  <img
                    key={i}
                    src={`src/assets/images/eventmakers/${img}`}
                    alt={`Img ${i + 1}`}
                    className={`${imageSizeClasses} shrink-0 mx-2`}
                  />
                ))}
              </div>
            </Marquee>
          </motion.div>
        ) : (
          <div className="flex justify-center items-center gap-2 sm:gap-2 md:gap-3 lg:gap-5 mx-2 sm:mx-0">
            {otherImages.slice(0, 3).map((img, index) => (
              <motion.img
                key={img}
                src={`src/assets/images/eventmakers/${img}`}
                alt={`Img ${index + 1}`}
                className={imageSizeClasses}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: showOthers ? 1 : 0, x: showOthers ? 0 : -50 }}
                transition={{
                  delay: 0.2 + index * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            ))}

            <motion.img
              src="src/assets/images/eventmakers/img7.jpeg"
              alt="Animated Img7"
              className={`${imageSizeClasses} z-10`}
              initial={{ y: -800, rotate: -15, opacity: 0 }}
              animate={
                isInView
                  ? { y: 0, rotate: 0, opacity: 1 }
                  : { y: -800, rotate: -15, opacity: 0 }
              }
              transition={{
                y: { delay: 0.1, duration: 2.0, ease: [0.22, 1, 0.36, 1] },
                rotate: { delay: 2.0, duration: 0.25, ease: "easeInOut" },
                opacity: { delay: 0.4, duration: 1.0 },
              }}
            />

            {otherImages.slice(3).map((img, index) => (
              <motion.img
                key={img}
                src={`src/assets/images/eventmakers/${img}`}
                alt={`Img ${index + 4}`}
                className={imageSizeClasses}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: showOthers ? 1 : 0, x: showOthers ? 0 : -50 }}
                transition={{
                  delay: 0.2 + (index + 3) * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}
      </div>

      <p className="text-sm font-medium mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 relative z-10">
        Creatives from around the globe <br />
        to talk about <span className="text-[#b0a6df]">design</span>.
      </p>
    </div>
  );
}

export default EventIntro;
