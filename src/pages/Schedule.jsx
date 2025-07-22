import React, { useState, useEffect, useRef } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

function SessionItem({ session }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="border-b border-white border-opacity-[0.1] min-h-[8rem] py-8 flex gap-10 max-sm:flex-col max-sm:gap-4"
    >
      <div className="w-56 max-sm:w-full">
        <h1 className="text-2xl font-medium max-sm:text-xl">{session.timeStart}</h1>
        <h1 className="text-xl font-medium opacity-[0.5] max-sm:text-base">
          {session.timeEnd}
        </h1>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-medium max-sm:text-2xl">{session.title}</h1>
        <p className="text-lg font-medium opacity-[0.5] mt-2 max-sm:text-base">
          {session.description}
        </p>
      </div>
    </motion.div>
  );
}


function Schedule() {
  const [activeDay, setActiveDay] = useState("day1");
  const [isSticky, setIsSticky] = useState(true);
  const stickyRef = useRef(null);
  const sentinelRef = useRef(null);

  const sessionsData = {
    day1: [
      { timeStart: "09:00", timeEnd: "09:30", title: "Doors open", description: "Grab your badge, meet early birds, and enjoy fresh coffee from local roasters." },
      { timeStart: "09:30", timeEnd: "10:00", title: "Opening Talk", description: "Kickoff the event with an inspiring talk from the founder." },
      { timeStart: "10:00", timeEnd: "11:00", title: "SKYLIGHT: The Future of Design", description: "A deep dive into what’s next in product design and creativity." },
      { timeStart: "11:00", timeEnd: "11:30", title: "Coffee Break", description: "Fuel up and network with fellow creatives and techies over coffee." },
      { timeStart: "11:30", timeEnd: "12:30", title: "Closing SKYLIGHT", description: "Learn how top teams structure scalable design systems." },
      { timeStart: "12:30", timeEnd: "1:30", title: "Design Systems Masterclass", description: "Learn how top teams structure scalable design systems." },
      { timeStart: "1:30", timeEnd: "2:30", title: "Break", description: "Learn how top teams structure scalable design systems." },
      { timeStart: "2:30", timeEnd: "3:30", title: "Panel Discussion", description: "Learn how top teams structure scalable design systems." },
      { timeStart: "3:30", timeEnd: "4:30", title: "Case Study: Building in Public", description: "Learn how top teams structure scalable design systems." },
    ],
    day2: [
      { timeStart: "09:00", timeEnd: "09:45", title: "Welcome Back", description: "Start day 2 with community breakfast and announcements." },
      { timeStart: "09:45", timeEnd: "10:30", title: "Case Study: Building in Public", description: "Real-world journey of a bootstrapped indie project." },
      { timeStart: "10:30", timeEnd: "11:00", title: "Panel Discussion", description: "Top voices discuss the impact of AI on creative work." },
      { timeStart: "11:00", timeEnd: "11:30", title: "Break", description: "Snacks, chats, and a little leg stretch." },
      { timeStart: "11:30", timeEnd: "12:30", title: "Closing SKYLIGHT", description: "Reflect, recharge, and take action with a message to remember." },
    ],
  };

  const sessions = sessionsData[activeDay];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const stickyHeight = stickyRef.current?.offsetHeight || 0;
      const bottomReached = entry.boundingClientRect.top <= window.innerHeight - stickyHeight;
      setIsSticky(!bottomReached);
    });

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto px-10 pt-40 text-white bg-black font-manrope relative">
        <div className="flex h-auto relative max-lg:flex-col">
          <div
            ref={stickyRef}
            className={`w-2/3 pr-10 transition-all duration-300 max-lg:static max-lg:w-full max-lg:pr-0 ${isSticky ? "sticky top-28 self-start" : ""}`}
          >
            <span className="bg-[#b0a6df] text-sm font-medium text-black py-2 px-3 rounded-full">
              Who & When
            </span>
            <h1 className="text-7xl font-medium my-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
              Schedule
            </h1>
            <p className="text-xl font-medium opacity-[0.5] max-lg:text-lg max-md:text-base max-sm:text-sm leading-snug max-sm:leading-tight">
              Two days. Dozens of insights. One <br className="max-sm:hidden" />
              shared mission: make things that matter.
            </p>
            <button className="group relative mt-5 bg-white rounded-full inline-flex border-2 border-black items-center px-2 py-[6px] pr-5 text-base font-medium shadow-sm overflow-hidden max-sm:text-sm">
              <div className="absolute top-[0.15rem] bottom-[0.15rem] left-[0.15rem] bg-black rounded-full transition-all duration-700 ease-in-out z-0 w-[52px] group-hover:w-[calc(100%-4.15px)]" />
              <div className="relative z-10 flex items-center">
                <div className="flex items-center justify-center w-[52px] pr-3 h-[40px] text-white">
                  <FaTicketAlt className="text-xl max-sm:text-base" />
                </div>
                <span className="ml-3 text-black group-hover:text-white transition-colors duration-500">
                  Buy tickets
                </span>
              </div>
            </button>
          </div>

          <div className="w-full flex flex-col relative max-lg:mt-10">
            <div className="h-20 flex relative mb-8">
              <div className="absolute bottom-0 w-full h-[1.5px] bg-white bg-opacity-10 rounded-full" />
              {["day1", "day2"].map((day) => (
                <div
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className="w-1/2 flex items-center justify-center cursor-pointer"
                >
                  <h1
                    className={`text-lg font-medium transition-opacity duration-500 max-sm:text-base ${activeDay === day ? "opacity-100" : "opacity-50"}`}
                  >
                    {day === "day1" ? "Day 1" : "Day 2"}
                  </h1>
                </div>
              ))}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute bottom-0 h-[1.5px] bg-white w-1/2 rounded-full"
                style={{ left: activeDay === "day1" ? "0%" : "50%" }}
              />
            </div>

            {sessions.map((session, idx) => (
              <SessionItem
                key={`${activeDay}-${session.title}-${session.timeStart}`}
                session={session}
                idx={idx}
              />
            ))}


            <div ref={sentinelRef} className="w-full h-1" />
          </div>
        </div>
      </div>

      <div className="h-screen pt-52 bg-black max-sm:pt-28 overflow-hidden relative max-lg:h-[50vh]">
        <div className="carousel-track flex gap-5 absolute h-full">
          {[...Array(2)].flatMap(() =>
            [1, 2, 3].map((num) => (
              <img
                key={`img-${num}-${Math.random()}`}
                src={`src/assets/images/Schedule/img${num}.jpg`}
                alt={`img${num}`}
                loading="lazy"
                onLoad={(e) => e.target.classList.remove("blur-sm")}
                className="h-full w-auto rounded-xl object-cover max-sm:h-full max-sm:w-auto blur-sm"
              />


            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Schedule;
