import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useRef } from 'react';

function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const speakerRows = [
    [
      {
        img: 1,
        name: "Ava Morales",
        title: "Head of Community Design",
        description: "Ava is passionate about building inclusive creative communities and has led workshops globally.",
        social: {
          linkedin: "https://www.linkedin.com/in/pratik-mane-6677a824b/",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        img: 7,
        name: "Juniper Walsh",
        title: "UX Writer & Voice Strategist",
        description: "Juniper crafts compelling user experiences with personality. She’s worked with top SaaS startups.",
        social: {
          linkedin: "https://www.linkedin.com/in/pratik-mane-6677a824b/",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        img: 2,
        name: "Hana Okabe",
        title: "Art Director & Storyteller",
        description: "With a focus on narrative design, Hana blends visual art and motion into compelling campaigns.",
        social: {
          linkedin: "https://www.linkedin.com/in/pratik-mane-6677a824b/",
          twitter: "#",
          instagram: "#"
        }
      }
    ],
    [
      {
        img: 3,
        name: "Dylan Finch",
        title: "AI Product Designer",
        description: "Dylan leads design for AI tools, combining usability with cutting-edge machine learning concepts.",
        social: {
          linkedin: "https://www.linkedin.com/in/pratik-mane-6677a824b/",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        img: 4,
        name: "Ravi Patel",
        title: "Web3 Developer",
        description: "Ravi builds secure, scalable dApps and loves simplifying blockchain UX for everyone.",
        social: {
          linkedin: "https://www.linkedin.com/in/pratik-mane-6677a824b/",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        img: 5,
        name: "Zara Chen",
        title: "Figma Plugin Creator",
        description: "Zara develops Figma plugins that supercharge designers' workflows and productivity.",
        social: {
          linkedin: "https://www.linkedin.com/in/pratik-mane-6677a824b/",
          twitter: "#",
          instagram: "#"
        }
      }
    ],
    [
      {
        img: 6,
        name: "Leo van Dijk",
        title: "Digital Nomad & PM",
        description: "Leo travels the world managing remote teams and teaching async collaboration methods.",
        social: {
          linkedin: "https://www.linkedin.com/in/pratik-mane-6677a824b/",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        img: 8,
        name: "Maya Singh",
        title: "Design Systems Expert",
        description: "Maya consults on scalable design systems and accessibility-first interfaces.",
        social: {
          linkedin: "https://www.linkedin.com/in/pratik-mane-6677a824b/",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        img: 9,
        name: "Oscar Knight",
        title: "Creative Technologist",
        description: "Oscar merges code and design into interactive experiences for museums, brands, and more.",
        social: {
          linkedin: "https://www.linkedin.com/in/pratik-mane-6677a824b/",
          twitter: "#",
          instagram: "#"
        }
      }
    ]
  ];

  return (
    <div className='relative z-0 container mx-auto font-manrope h-auto text-white bg-black px-10'>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[26rem] flex justify-end items-center flex-col text-center"
      >
        <span className="bg-[#b0a6df] text-sm font-medium text-black py-2 px-3 rounded-full">
          Speakers
        </span>
        <h1 className="text-7xl max-lg:text-6xl max-sm:text-4xl font-medium my-5">
          Let the pro's <br /> do the talking
        </h1>
        <p className="text-xl max-sm:text-lg font-medium opacity-[0.5] max-sm:leading-snug max-sm:break-normal">
          Learn from indie founders, digital artists, <br className="max-sm:hidden" /> and product designers at the top of their game.
        </p>
      </motion.div>

{speakerRows.map((row, rowIndex) => {
  const rowRef = useRef(null);
  const inView = useInView(rowRef, { once: true, amount: 0.3 });

  return (
    <div
      key={rowIndex}
      ref={rowRef}
      className="h-auto flex justify-evenly gap-20 mt-20 
         max-lg:gap-8 max-lg:mt-10 
         max-sm:flex-col max-sm:gap-y-12"
    >
      {row.map((speaker, i) => (
        <div
          key={i}
          onClick={() => setSelectedSpeaker(speaker)}
          className={`h-fit w-full flex justify-end flex-col cursor-pointer  
            ${i === 1 ? 'mb-10 mt-36 max-lg:mt-16' : ''} 
            max-lg:max-w-[45%] max-sm:max-w-full`}
        >
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={`src/assets/images/eventmakers/img${speaker.img}.jpeg`}
            alt={speaker.name}
            className="h-full w-full rounded-xl object-cover grayscale opacity-[0.6] mb-5 
            max-lg:h-[50vh] max-sm:h-auto max-sm:object-contain"
          />

          <div className="h-auto">
            <h1 className="text-lg font-medium max-lg:text-base">{speaker.name}</h1>
            <p className="text-lg font-medium opacity-[0.7] max-lg:text-sm">{speaker.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
})}





      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center max-sm:mx-2 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black text-white p-8 rounded-xl relative w-[90%] max-w-2xl 
                   max-sm:w-[90%] max-sm:p-5 max-sm:rounded-lg max-sm:max-h-[90vh] max-sm:overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-[#b0a6df] transition"
              >
                ×
              </button>

              <div className="flex items-center gap-6 mb-6 max-sm:flex-col max-sm:text-center max-sm:gap-4">
                <img
                  src={`src/assets/images/eventmakers/img${selectedSpeaker.img}.jpeg`}
                  alt={selectedSpeaker.name}
                  className="w-20 h-20 object-cover rounded-full grayscale border-4 border-white"
                />
                <div>
                  <h2 className="text-2xl font-semibold max-sm:text-xl">{selectedSpeaker.name}</h2>
                  <p className="text-lg font-medium opacity-70 mt-1 max-sm:text-base">{selectedSpeaker.title}</p>
                </div>
              </div>

              <p className="text-base font-normal text-gray-300 mb-6 max-sm:text-sm">
                {selectedSpeaker.description}
              </p>

              <div className="flex justify-start gap-6 text-xl text-white max-sm:justify-center">
                <a href={selectedSpeaker.social.linkedin} className="hover:text-[#b0a6df] transition"><FaLinkedin /></a>
                <a href={selectedSpeaker.social.twitter} className="hover:text-[#b0a6df] transition"><FaTwitter /></a>
                <a href={selectedSpeaker.social.instagram} className="hover:text-[#b0a6df] transition"><FaInstagram /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}

export default Speakers;
