"use client";

import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';
import { MdArrowDropDown, MdArrowRight, MdClose } from "react-icons/md"
import { GiCrossMark, GiHamburgerMenu } from "react-icons/gi";
import Button, { ButtonWhite } from "./button";
import { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

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
                                    const element = document.getElementById("panisforyou");
                                    element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                    setheaderOpen(false);
                                }}
                                className="hover:text-purp hover:underline text-md transition-all duration-300">PAN Contract</button>
                                <button onClick={()=>{
                                     const element = document.getElementById("dao");
                                     element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                     setheaderOpen(false);
                                }} className="hover:text-purp hover:underline text-md transition-all duration-300">DAO</button>
                                <button onClick={()=>{
                                     const element = document.getElementById("tokenomics");
                                     element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                     setheaderOpen(false);
                                }} className="hover:text-purp hover:underline text-md transition-all duration-300 flex flex-row justify-center items-center gap-1">
                                    About
                                    {/* <MdArrowDropDown /> */}
                                </button>
                                <Link href="/" className="hover:text-purp hover:underline text-md transition-all duration-300">Chart</Link>
                                <div className="flex flex-col justify-start items-end gap-5">
                                    <ButtonWhite text="Add to MetaMask" onClick={() => { }} />
                                    <ButtonWhite text="Buy on Uniswap" onClick={() => { }} />
                                </div>
                            </div>

                        </motion.div>

                    }
                </AnimatePresence>
                <AnimatePresence>
                    {
                        headerOpen == false &&
                        <div className="fixed bg-tan z-20 flex flex-row justify-between w-full p-5">

                            <div className="bg-purp text-tan text-4xl font-regular px-4 py-1 rounded-md">
                                PAN
                            </div>

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

                <div className="bg-purp text-tan text-4xl font-regular px-4 py-1 rounded-md">
                    PAN
                </div>

                <div className="hidden md:flex flex-row justify-center items-center gap-12">
                    <button onClick={() => {
                        const element = document.getElementById("panisforyou");
                        element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    }} className="hover:text-purp hover:underline text-md transition-all duration-300">PAN Contract</button>
                    <button onClick={() => {
                        const element = document.getElementById("dao");
                        element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    }} className="hover:text-purp hover:underline text-md transition-all duration-300">DAO</button>

                    <div className="">
                        {/* About
                         */}
                        <Menu>
                            <Menu.Button className={"hover:text-purp relative hover:underline text-md transition-all duration-300 flex flex-row justify-center items-center gap-1"}>
                                About
                                <MdArrowDropDown />
                            </Menu.Button>
                            <Transition as={Fragment}
                             enter="transition ease-out duration-100"
                             enterFrom="transform opacity-0 scale-95"
                             enterTo="transform opacity-100 scale-100"
                             leave="transition ease-in duration-75"
                             leaveFrom="transform opacity-100 scale-100"
                             leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className={"absolute z-[90] gap-2 mt-2 flex flex-col justify-start items-start bg-tan/90 backdrop-blur-3xl shadow-xl overflow-hidden rounded-md"}>
                                    <Menu.Item>
                                        <button onClick={() => {
                                            const element = document.getElementById("tokenomics");
                                            element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                        }} className="hover:bg-blue hover:pl-8 transition-all duration-200 hover:text-tan px-5 py-2 flex flex-row justify-center items-center gap-2">
                                            Tokenomics
                                            <MdArrowRight size={20} />
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <button 
                                        onClick={() => {
                                            const element = document.getElementById("readytobuy");
                                            element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                        }} 
                                        className="hover:bg-blue hover:pl-8 transition-all duration-200 hover:text-tan px-5 py-2 flex flex-row justify-center items-center gap-2">
                                            Buying PAN
                                            <MdArrowRight size={20} />
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <button 
                                        onClick={() => {
                                            const element = document.getElementById("roadmap");
                                            element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                                        }} 
                                        className="hover:bg-blue hover:pl-8 transition-all duration-200 hover:text-tan px-5 py-2 flex flex-row justify-center items-center gap-2">
                                            Roadmap
                                            <MdArrowRight size={20} />
                                        </button>
                                    </Menu.Item>

                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>

                    <Link href="/" className="hover:text-purp hover:underline text-md transition-all duration-300">Chart</Link>
                    <div className="flex flex-row justify-center items-center gap-8">
                        <Button text="Add to MetaMask" onClick={() => { }} />
                        <Button text="Buy on Uniswap" onClick={() => { }} />
                    </div>
                </div>

            </motion.div>


    );
}

export default Header;