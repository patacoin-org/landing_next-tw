"use client";

import { ReactElement } from "react";
import patacon2 from "../images/24.jpg.webp";
import { MdDesignServices, MdLightbulb, MdPeople } from "react-icons/md";
import { ButtonWhite } from "./standards/button";
import { motion } from "framer-motion";
import Image from "next/image";
import PataCoinImg from "@assets/logos/logo.png";

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
      "https://app.uniswap.org/#/swap?exactField=input&inputCurrency=ETH&outputCurrency=0xefd4e828e8ea886b3d21c09e549690ed66e30b35",
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
            description="Necesario para las personas que deseen utilizar, comerciar o mantener PTC"
          />
          <FeatureCard
            icon={<MdLightbulb size={50} />}
            title="2. Configura tu wallet"
            description="Descarga, instala y configurara"
          />
          <FeatureCard
            icon={<MdPeople size={50} />}
            title="3. Consigue unos PataCoins"
            description="Consigue PTC para tu almuerzo"
          />
        </motion.div>

        <div
          style={{ backgroundImage: `url('${patacon2.src}')` }}
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
              <div className="text-xl font-medium">Construido con Ethereum</div>
              <div className="text-4xl font-medium">Compra $PTC</div>
              <div className="text-xl font-medium mt-4">
                PataCoin es soportado en las plataformas más populares
                <br />
                DeFi wallets como MetaMask
              </div>

              <div className="h-24 w-24 flex justify-center items-center bg-tan rounded-full mt-5 mb-10">
                <Image
                  src={PataCoinImg}
                  width={70}
                  alt="PataCoin"
                  className=" rounded-full "
                />
              </div>
              <ButtonWhite
                text="Comprar en Uniswap (PTC)"
                onClick={() => openInNewTab()}
              />
              <br></br>
              <b>
                <h1 style={{ fontSize: 15 }}>Smart Contract</h1>
              </b>
              <h1 style={{ fontSize: 13 }}>
                0xefd4e828e8ea886b3d21c09e549690ed66e30b35
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
