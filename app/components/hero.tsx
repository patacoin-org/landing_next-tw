"use client";

import { motion } from "framer-motion";
import PataCoinImg from "@assets/patacoin-img.webp";
import Image from "next/image";

function Hero() {
  return (
    <div
      id="background-pataconio"
      className="fixed z-0 h-screen w-full flex flex-col justify-end items-end overflow-y-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="md:flex hidden absolute z-0 bg-contain bg-no-repeat bg-center h-3/4 w-2/4"
      ></motion.div>

      <div className="relative z-10 h-screen w-full bg-transparent flex flex-col justify-center items-center px-[5%]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white w-2/4 p-3 rounded-lg flex justify-around items-center relative z-10 tracking-tighter text-4xl md:text-7xl font-bold"
        >
          <Image src={PataCoinImg} width={150} alt="Pata coin" /> 
          <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Empieza ya!</button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
