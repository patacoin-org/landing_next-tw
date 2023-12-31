"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { MdClose } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import Image from "next/image";
import PataCoinImg from '@assets/logos/logo.png';

const MobileSection = () => {
    const [headerOpen, setheaderOpen] = useState(false);
    return (
        <>
            <AnimatePresence>
                {
                    headerOpen &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed z-[90] h-screen w-full bg-black/80 backdrop-blur-sm text-tan font-medium flex flex-row justify-end items-start p-10"
                    >
                        <div className="flex flex-col md:flex-row justify-start items-end gap-5">
                            <button onClick={() => { setheaderOpen(!headerOpen) }}>
                                <MdClose size={30} />
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById("start-launch");
                                    element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                    setheaderOpen(false);
                                }}
                                className="hover:text-orange hover:underline text-md transition-all duration-300"
                            >
                                Inicio
                            </button>
                            <button
                                onClick={()=>{
                                    const element = document.getElementById("how-buy");
                                    element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                    setheaderOpen(false);
                                }}
                                className="hover:text-orange hover:underline text-md transition-all duration-300"
                            >
                                ¿Cómo comprar?
                            </button>
                            <button
                                onClick={()=>{
                                    const element = document.getElementById("tokenomics");
                                    element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                    setheaderOpen(false);
                                }}
                                className="hover:text-orange hover:underline text-md transition-all duration-300 flex flex-row justify-center items-center gap-1"
                            >
                                Pata-nomiks
                            </button>
                            <button
                                onClick={()=>{
                                    const element = document.getElementById("Roadmap");
                                    element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                    setheaderOpen(false);
                                }}
                                className="hover:text-orange hover:underline text-md transition-all duration-300 flex flex-row justify-center items-center gap-1"
                            >
                                Roadmap
                            </button>
                            {/* <div className="flex flex-col justify-start items-end gap-5">
                                <ButtonWhite text="Add to MetaMask" onClick={() => { }} />
                                <ButtonWhite text="Buy on Uniswap" onClick={() => { }} />
                            </div> */}
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                    {
                        headerOpen == false &&
                        <div className="fixed bg-tan z-20 flex flex-row justify-between w-full p-5">
                            <Image
                                src={PataCoinImg}
                                width={45}
                                alt="PataCoin"
                            />
                            <button onClick={() => { setheaderOpen(!headerOpen) }}>
                                <GiHamburgerMenu size={30} />
                            </button>
                        </div>
                    }
                </AnimatePresence>
        </>
    )
}

const DesktopSection = () => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed z-[90] h-24 w-full bg-tan text-black font-medium flex flex-row justify-between items-center px-[5%]"
        >
            <div className="flex justify-center">
                <Image
                    src={PataCoinImg}
                    width={80}
                    alt="PataCoin"
                />
                {/* <div className="text-black text-4xl font-regular px-4 py-1 rounded-md">Paracoin</div> */}
            </div>
            <div className="hidden md:flex flex-row justify-center items-center gap-12">
                <button
                    onClick={() => {
                        const element = document.getElementById("start-launch");
                        element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    }} className="hover:text-orange hover:underline text-md transition-all duration-300"
                >
                    Inicio
                </button>
                <button
                    onClick={() => {
                        const element = document.getElementById("how-buy");
                        element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    }} className="hover:text-orange hover:underline text-md transition-all duration-300"
                >
                    ¿Cómo comprar?
                </button>
                <button
                    onClick={() => {
                        const element = document.getElementById("tokenomics");
                        element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    }} className="hover:text-orange hover:underline text-md transition-all duration-300"
                >
                    Pata-nomics
                </button>
                <button
                    onClick={() => {
                        const element = document.getElementById("roadmap");
                        element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    }} className="hover:text-orange hover:underline text-md transition-all duration-300"
                >
                    Roadmap
                </button>
                {/* <div className="flex flex-row justify-center items-center gap-8">
                    <Button text="Add to MetaMask" onClick={() => { }} />
                    <Button text="Buy on Uniswap" onClick={() => { }} />
                </div> */}
            </div>
        </motion.div>
    )
}

function Header() {
    const [mobile, setmobile] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 1280) {
                setmobile(true);
            }
            else {
                setmobile(false);
            }
        })
    }, [])


    return (
        mobile
            ?
                <MobileSection />
            :
                <DesktopSection />
    );
}

export default Header;