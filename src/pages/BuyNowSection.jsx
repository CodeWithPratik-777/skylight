import React, { useEffect, useState } from 'react';
import { FaTicketAlt } from "react-icons/fa";

function BuyNowSection() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 351);
    targetDate.setHours(targetDate.getHours() + 10);
    targetDate.setMinutes(targetDate.getMinutes() + 24);
    targetDate.setSeconds(targetDate.getSeconds() + 56);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative z-0 container mx-auto font-manrope text-white bg-black flex flex-col overflow-hidden" id='buytickets'>

            <div className="h-[75vh] flex flex-col justify-end max-sm:justify-center items-center text-center">
                <span className="bg-white text-base font-semibold text-black mb-4 py-2 px-3 rounded-full">
                    <span className="text-black mr-2">●</span>
                    {`${timeLeft.days} : ${String(timeLeft.hours).padStart(2, '0')} : ${String(timeLeft.minutes).padStart(2, '0')} : ${String(timeLeft.seconds).padStart(2, '0')}`}
                </span>

                <h1 className="text-7xl max-sm:text-5xl font-medium">
                    Get a seat for <br /> $299
                </h1>
                <p className="text-xl font-medium my-8 leading-snug max-sm:text-base max-sm:my-4 max-sm:leading-tight text-center">
                    We’re keeping it intimate and intentional. <br />
                    Limited seats—secure your spot now.
                </p>

                <button className="group relative bg-white rounded-full inline-flex border-2 border-black items-center px-2 py-[6px] pr-5 font-manrope text-base font-medium shadow-sm overflow-hidden">
                    <div className="absolute top-[0.15rem] bottom-[0.15rem] left-[0.15rem] bg-black rounded-full transition-all duration-700 ease-in-out z-0 w-[52px] group-hover:w-[calc(100%-4.15px)]" />
                    <div className="relative z-10 flex items-center">
                        <div className="flex items-center justify-center w-[52px] pr-3 h-[40px] text-white">
                            <FaTicketAlt className="text-xl" />
                        </div>
                        <span className="ml-3 text-black group-hover:text-white transition-colors duration-500">
                            Buy tickets
                        </span>
                    </div>
                </button>
            </div>

            <div className="h-[70vh] max-sm:h-auto max-sm:mb-10 flex justify-center items-center px-4 py-8 max-sm:py-4 overflow-visible">
                <div
                    className="flex flex-col sm:flex-row max-w-3xl w-full gap-2"
                    style={{
                        transformStyle: 'preserve-3d',
                        animation: 'tiltLoop 6s linear infinite alternate',
                    }}
                >
                    <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 sm:p-8 min-w-[300px] max-sm:min-w-full">
                        <h2 className="text-3xl font-bold text-black mb-2 max-sm:text-2xl">MIDSCREEN</h2>
                        <p className="text-sm text-gray-500 mb-3">| 02.05 – 01.07</p>
                        <p className="text-sm text-gray-500 mb-1">| STUDIO ABM</p>
                        <p className="text-sm text-gray-500 mb-6">| NORCASTLE</p>

                        <div className="flex justify-between text-black mt-6 max-sm:mt-4">
                            <div>
                                <p className="text-xs text-gray-400">GATE</p>
                                <p className="text-xl font-semibold">2</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">ROW</p>
                                <p className="text-xl font-semibold">16</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">SEAT</p>
                                <p className="text-xl font-semibold">24</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative bg-gradient-to-r from-black to-gray-950 text-white w-full sm:w-[200px] flex flex-col justify-between px-4 py-6 rounded-2xl border-l-2 max-sm:border-t-2 max-sm:border-l-0 border-dashed border-white
    transform transition-all duration-500 origin-left sm:hover:rotate-[8deg]"
                    >
                        <div className="absolute top-4 right-4 mb-2 max-sm:mb-0 sm:static sm:mt-6 sm:flex sm:justify-center">
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=OffscreenEvent"
                                alt="QR Code"
                                className="w-16 h-16 object-contain"
                            />
                        </div>

                        <div className="mt-4 sm:mt-0">
                            <h3 className="text-lg font-bold">MIDSCREEN</h3>
                            <p className="text-xs mt-1 text-gray-400">02.05 – 01.07</p>
                            <p className="text-xs text-gray-400">NORCASTLE</p>
                        </div>

                        <div className="mt-6 space-y-2 text-sm">
                            <p><span className="text-gray-400">GATE</span> <span className="float-right font-semibold">02</span></p>
                            <p><span className="text-gray-400">ROW</span> <span className="float-right font-semibold">16</span></p>
                            <p><span className="text-gray-400">SEAT</span> <span className="float-right font-semibold">24</span></p>
                        </div>
                    </div>

                </div>
            </div>




            <style>
                {`
                    @keyframes tiltLoop {
                    0% {
                        transform: perspective(1200px) rotateY(-4deg) rotateX(2deg);
                    }
                    25% {
                        transform: perspective(1200px) rotateY(-2deg) rotateX(0deg);
                    }
                    50% {
                        transform: perspective(1200px) rotateY(4deg) rotateX(-2deg);
                    }
                    75% {
                        transform: perspective(1200px) rotateY(2deg) rotateX(0deg);
                    }
                    100% {
                        transform: perspective(1200px) rotateY(-4deg) rotateX(2deg);
                    }
                    }
                `}
            </style>


        </div>
    );
}

export default BuyNowSection;
