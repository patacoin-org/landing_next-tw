"use client";

import { ReactElement } from "react";
import peter2 from "../images/peter2.png";
import {
  MdDesignServices,
  MdLightbulb,
  MdPeople,
  MdSearch,
} from "react-icons/md";
import { ButtonWhite } from "./standards/button";
import { motion } from "framer-motion";
import Image from "next/image";
import PataCoinImg from "@assets/patacoin-img.webp";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactElement;
}

function FeatureCard(props: FeatureCardProps) {
  return (
    <motion.div
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 1 }}
      whileInView={"visible"}
      className="w-full md:w-64 h-full md:h-64 border-soft-orange rounded-md text-soft-orange p-5"
    >
      {props.icon}
      <div className="text-3xl mt-5 font-regular">{props.title}</div>
      <div className="text-md mt-4 font-regular">{props.description}</div>
    </motion.div>
  );
}

function Features() {
  const openInNewTab = () => {
    window.open(
      "https://app.uniswap.org/#/swap",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <>
      <div className="h-screen w-full"></div>

      <div
        id="how-buy"
        className="bg-tan relative border-t-8 border-orange z-10 h-full md:h-[800px] w-full flex flex-col-reverse  gap-24 md:flex-row justify-center items-center"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="w-full md:w-3/5 h-full md:h-2/4 flex flex-wrap gap-10 justify-center items-center p-10"
        >
          <FeatureCard
            icon={<MdDesignServices size={50} />}
            title="1. Escoge tu wallet"
            description="Un monedero es necesario para las personas que deseen utilizar, comerciar o mantener Dogecoin. Puedes elegir un monedero"
          />
          <FeatureCard
            icon={<MdLightbulb size={50} />}
            title="2. Configura tu wallet"
            description="Después de descargarlo, puede configurar su monedero de acuerdo con nuestro"
          />
          <FeatureCard
            icon={<MdPeople size={50} />}
            title="3. Consigue unos Patacoins"
            description="Consigue patacoin para tu almuerzo"
          />
        </motion.div>

        <div
          style={{ backgroundImage: `url('${peter2.src}')` }}
          className="h-full md:h-[792px] w-full md:w-2/5 text-tan flex bg-cover bg-center justify-center items-center"
        >
          <div className="w-full h-full flex justify-center items-center py-10 px-5">
            <motion.div
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 1, delay: 0.3 }}
              whileInView={"visible"}
              className="h-full md:h-3/4 w-full md:w-3/4 rounded-3xl text-center bg-soft-orange/90 backdrop-blur-xl flex flex-col gap-2 justify-center items-center p-10"
            >
              <div className="text-xl font-medium">Built on Ethereum</div>
              <div className="text-4xl font-medium">Buy $Patacoin</div>
              <div className="text-xl font-medium mt-4">
                Patacoin is supported on popular
                <br />
                DeFi wallets like MetaMask
              </div>
              <div className="h-24 w-24 flex justify-center items-center bg-tan rounded-full mt-5 mb-10">
                <Image
                  src={PataCoinImg}
                  width={70}
                  alt="Patacoin"
                  className=" rounded-full "
                />
              </div>
              <ButtonWhite
                text="Comprar en Uniswap (PTC)"
                onClick={() => openInNewTab()}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
