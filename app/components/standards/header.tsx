"use client";

import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';
import { MdArrowDropDown, MdArrowRight, MdClose } from "react-icons/md"
import { GiCrossMark, GiHamburgerMenu } from "react-icons/gi";
import Button, { ButtonWhite } from "./button";
import { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import PataCoinImg from '@assets/patacoin-img.webp';
function Header() {

    const [mobile, setmobile] = useState(false);
    const [headerOpen, setheaderOpen] = useState(false);

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
        mobile ?
            <>
                <AnimatePresence>
                    {
                        headerOpen &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed z-[90] h-screen w-full bg-black/80 backdrop-blur-sm text-tan font-medium flex flex-row justify-end items-start p-10">

                            <div className="flex flex-col md:flex-row justify-start items-end gap-5">
                                <button onClick={() => { setheaderOpen(!headerOpen) }}>
                                    <MdClose size={30} />
                                </button>
                                <button 
                                onClick={() => {
                                    const element = document.getElementById("start");
                                    element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                    setheaderOpen(false);
                                }}
                                className="hover:text-orange hover:underline text-md transition-all duration-300">Inicio</button>
                                <button onClick={()=>{
                                     const element = document.getElementById("how-buy");
                                     element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                     setheaderOpen(false);
                                }} className="hover:text-orange hover:underline text-md transition-all duration-300">Como comprar</button>
                                <button onClick={()=>{
                                     const element = document.getElementById("tokenomics");
                                     element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                     setheaderOpen(false);
                                }} className="hover:text-orange hover:underline text-md transition-all duration-300 flex flex-row justify-center items-center gap-1">
                                    Tokenomics
                                    {/* <MdArrowDropDown /> */}
                                </button>
                                <button onClick={()=>{
                                     const element = document.getElementById("roadmap");
                                     element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                     setheaderOpen(false);
                                }} className="hover:text-orange hover:underline text-md transition-all duration-300 flex flex-row justify-center items-center gap-1">
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
                                alt="Pata coin"
                            />

                            <button onClick={() => { setheaderOpen(!headerOpen) }}>
                                <GiHamburgerMenu size={30} />
                            </button>

                        </div>
                    }
                </AnimatePresence>
            </>
            :
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed z-[90] h-24 w-full bg-tan text-black font-medium flex flex-row justify-between items-center px-[5%]">

                <div className="flex justify-center">
                    <Image
                        src={PataCoinImg}
                        width={45}
                        alt="Pata coin"
                    />
                    <div className="text-black text-4xl font-regular px-4 py-1 rounded-md">Pata coin</div>
                </div>

                <div className="hidden md:flex flex-row justify-center items-center gap-12">
                    <button onClick={() => {
                        const element = document.getElementById("start");
                        element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    }} className="hover:text-orange hover:underline text-md transition-all duration-300">Inicio</button>
                    <button onClick={() => {
                        const element = document.getElementById("how-buy");
                        element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    }} className="hover:text-orange hover:underline text-md transition-all duration-300">Como comprar</button>

                    <button onClick={() => {
                        const element = document.getElementById("tokenomics");
                        element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    }} className="hover:text-orange hover:underline text-md transition-all duration-300">Tokenomics</button>

                    <button onClick={() => {
                        const element = document.getElementById("dao");
                        element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    }} className="hover:text-orange hover:underline text-md transition-all duration-300">Roadmap</button>

                    {/* <div className="flex flex-row justify-center items-center gap-8">
                        <Button text="Add to MetaMask" onClick={() => { }} />
                        <Button text="Buy on Uniswap" onClick={() => { }} />
                    </div> */}
                </div>

            </motion.div>


    );
}

export default Header;