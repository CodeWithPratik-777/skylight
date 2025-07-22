import Marquee from "react-fast-marquee";
import { FaTicketAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  const messages = [
    "Join us live in Norcastle",
    "Early bird tickets now available",
    "Limited seats available",
    "Meet top creators",
  ];

  const repeated = [...messages, ...messages];

  return (
    <>
      <div className="relative bg-black text-white py-2 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <Marquee speed={35} gradient={false}>
          <div className="flex items-center whitespace-nowrap text-base font-medium">
            <span className="mx-6 text-base">✦</span>

            {repeated.map((msg, index) => (
              <div key={index} className="flex items-center">
                <span className="mx-6 font-manrope text-sm font-medium">{msg}</span>
                {index !== repeated.length - 1 && (
                  <span className="mx-6 text-base">✦</span>
                )}
              </div>
            ))}
          </div>
        </Marquee>
      </div>



            <div className="min-h-[100dvh] bg-white flex flex-col">

        <div className="h-20 flex items-center justify-between px-10">
          <a href="#" className="font-sans text-2xl tracking-[0.3rem] max-sm:text-xl font-normal text-black">SKYLIGHT</a>

          <button className="group relative bg-white rounded-full inline-flex border-2 border-black items-center px-2 py-[6px] pr-5 font-manrope text-base font-medium shadow-sm overflow-hidden
  max-sm:pr-3 max-sm:py-[4px] max-sm:text-sm max-sm:scale-95" onClick={() => { const el = document.getElementById("buytickets"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}>

            <div className="absolute top-[0.15rem] bottom-[0.15rem] left-[0.15rem] bg-black rounded-full transition-all duration-700 ease-in-out z-0 
    w-[52px] group-hover:w-[calc(100%-4.15px)] max-sm:w-[42px] group-hover:max-sm:w-[calc(100%-4.15px)]" />

            <div className="relative z-10 flex items-center">
              <div className="flex items-center justify-center w-[52px] h-[40px] pr-3 text-white 
      max-sm:w-[42px] max-sm:h-[36px] max-sm:pr-2">
                <FaTicketAlt className="text-xl max-sm:text-lg" />
              </div>
              <span className="ml-3 text-black group-hover:text-white transition-colors duration-500 
      max-sm:ml-2">
                Buy tickets
              </span>
            </div>
          </button>

        </div>

        <div className="flex-1 relative overflow-hidden">

          <img
            src="/src/assets/images/home-img.png"
            alt=""
            className="absolute bottom-[-75%] max-lg:bottom-[-85%] left-1/2 -translate-x-1/2 h-[185%] object-cover animate-fade-slide-up"
          />


          <h1 className="absolute lg:top-[45%] lg:-translate-y-1/2 max-lg:top-24 max-lg:h-[46%] max-sm:h-[50%] max-lg:flex max-lg:items-end flex font-manrope font-extrabold w-full text-[20.6vw] m-auto leading-none text-center text-white -tracking-wider mix-blend-difference">
            <span className="text-[21vw] -tracking-wider">Mid</span>
            <span>scr</span>
            <span>een</span>
          </h1>



          <div className="absolute bottom-0 left-0 w-full h-40 max-lg:flex-col max-lg:items-start max-lg:h-auto max-lg:text-5xl max-lg:p-10 max-sm:text-4xl flex justify-around items-center font-manrope text-7xl font-semibold text-back">
            <h1 className="flex gap-[2px] overflow-hidden max-lg:!text-white">
              {"03/07.02".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.09, ease: "easeOut" }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            <hr className="w-40 opacity-[0.6] -mx-16 max-lg:hidden" />
            <h1 className="flex gap-[2px] text-white overflow-hidden">
              {"2027".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.09, ease: "easeOut" }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            <hr className="w-40 opacity-[0.6] -mx-16 max-lg:hidden" />
            <h1 className="flex gap-[2px] overflow-hidden max-lg:!text-white">
              {"Norcastle".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.09, ease: "easeOut" }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

          </div>
        </div>
      </div>

    </>

  );
}

export default Home;
