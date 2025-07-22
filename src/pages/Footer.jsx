import React from 'react';

function Footer() {
  return (
    <div className="relative z-0 h-96 container mx-auto font-manrope text-white bg-black pb-10">

      <div className="h-1/2 flex justify-between items-center px-10 border-b border-gray-400 border-opacity-50 max-sm:flex-col max-sm:justify-center max-sm:gap-6">
        <a href="#" className="font-sans text-2xl max-sm:text-xl tracking-[0.3rem] font-normal">
          SKYLIGHT
        </a>

        <div className="flex space-x-10 max-sm:space-x-4">
          {["Twitter (X)", "Instagram", "LinkedIn"].map((text, index) => (
            <a
              key={index}
              href="#"
              className="text-xl max-sm:text-sm font-normal relative h-6 overflow-hidden group"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {text}
              </span>
              <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                {text}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="h-1/2 flex justify-center items-center text-center px-4">
        <p className="text-2xl max-sm:text-base font-medium leading-snug">
          Made With <span className="text-red-500">&#10084;</span> By{' '}
          <a
            href="https://www.linkedin.com/in/pratik-mane-6677a824b/"
            className="underline"
          >
            PRATIK
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
