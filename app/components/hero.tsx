"use client";

import { motion } from "framer-motion";
import PataCoinImg from "@assets/patacoin-img.webp";
import Image from "next/image";
import { ButtonWhite } from "./standards/button";

function Hero() {
  return (
    <div
      id="start-launch"
      className="background-pataconio fixed z-0 h-screen w-full flex flex-col justify-end items-end overflow-y-hidden"
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
          className="bg-white w-3/4 md:w-3/4 flex-col p-10 rounded-lg flex justify-around items-center relative z-10 tracking-tighter text-2xl md:text-74xl"
        >
          <Image
            src={PataCoinImg}
            width={250}
            alt="Patacoin"
            className="pb-10"
          />
          <div className="flex justify-center flex-col">
            <p className="text-4xl text-center font-medium pb-10">
              La cryptocurrency de latam
            </p>
              <ButtonWhite text="¡Empieza ya!" onClick={() => {}} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
