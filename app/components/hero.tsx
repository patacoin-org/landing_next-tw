"use client";

import { motion } from "framer-motion";
import PataCoinImg from "@assets/patacoin-img.webp";
import Image from "next/image";
import Patacon1 from "@assets/patacon.jpeg"
import { ButtonWhite } from "./standards/button";

function Hero() {
  const openInNewTab = () => {
    window.open(
      "https://app.uniswap.org/#/swap",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div
      id="start-launch"
      className="fixed z-0 h-screen w-full flex flex-col justify-end items-end overflow-y-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="md:flex hidden absolute z-0 bg-contain bg-no-repeat bg-center h-3/4 w-2/4"
      ></motion.div>

      <div className="relative z-10 h-screen w-full bg-transparent flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white w-3/4 md:w-3/4 flex-col p-10 rounded-lg flex justify-around items-center relative z-10 tracking-tighter text-2xl md:text-74xl"
        >
          <Image
            src={Patacon1}
            alt="Patacoin"
            className="pb-10 pt-20"
          />
          <div className="flex justify-center flex-col">
            <p className="text-4xl text-center font-medium pb-10">
              La cryptocurrency de latam
            </p>
            <button
                onClick={() => {
                    const element = document.getElementById("how-buy");
                    element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                }} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                Empieza ya!
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
