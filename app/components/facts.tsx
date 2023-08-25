"use client";

import peter2 from "../images/peter2.png";
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});

function Facts() {

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
        <div id="tokenomics" className="relative z-10 h-full bg-tan w-full flex flex-col justify-start items-center">

            <motion.div
                initial="hidden"
                variants={{
                    "visible": { opacity: 1, y: 0 },
                    "hidden": { opacity: 0, y: 100 },
                }}
                transition={{ duration: 1, delay: 0.3 }}
                whileInView={"visible"}
                className="flex mt-5 w-full gap-5 flex-row justify-center items-center px-[10%]">
                <div className="w-full h-[1px] bg-purp"></div>
                <div className="text-md flex-none text-center text-purp">PAN is available worldwide</div>
                <div className="w-full h-[1px] bg-purp"></div>
            </motion.div>

            <motion.div
                initial="hidden"
                variants={{
                    "visible": { opacity: 1, y: 0 },
                    "hidden": { opacity: 0, y: 100 },
                }}
                transition={{ duration: 1, delay: 0.5 }}
                whileInView={"visible"}
                className="font-bold text-6xl md:text-8xl text-center text-black mt-24 md:mt-36">PAN is for <span className="text-purp italic">you</span></motion.div>
            <motion.div
                initial="hidden"
                variants={{
                    "visible": { opacity: 1, y: 0 },
                    "hidden": { opacity: 0, y: 100 },
                }}
                transition={{ duration: 1, delay: 0.7 }}
                whileInView={"visible"}
                className="text-md px-10 md:text-xl font-medium text-black mt-10 mb-24 text-center">No taxes, no nonsense. Simple tokenomics to make PAN sustainable long term.</motion.div>

            <motion.div
                initial="hidden"
                variants={{
                    "visible": { opacity: 1, y: 0 },
                    "hidden": { opacity: 0, y: 100 },
                }}
                transition={{ duration: 1, delay: 0.3 }}
                whileInView={"visible"}
                className="flex flex-col md:flex-row justify-center items-start w-full pb-12 md:mb-48 px-5 md:px-[15%]">

                <div  id="panisforyou" style={{ backgroundImage: `url('${peter2.src}')` }} className="bg-cover bg-center flex-none flex-col justify-center items-center h-96 w-full md:h-[500px] md:w-[500px]"></div>
                <div className="flex flex-col h-full md:h-[500px] justify-center w-full items-end p-5">

                    <div className="text-xl md:text-3xl font-regular text-right mt-5">
                        <div className="flex flex-row justify-end items-center gap-1">
                            <AnimatedNumbers
                                animateToNumber={420}
                                fontStyle={{ fontSize: 30, fontWeight: "bold" }}
                                configs={(number, index) => {
                                    return { mass: 1, tension: 230, friction: 140 };
                                }} />
                            <div className="font-bold text-[30px]">Million</div>
                        </div>
                        <div className="font-regular text-md md:text-2xl">Total Supply</div>
                        <div className="w-full h-[2px] bg-black/40 my-5"></div>
                    </div>

                    <div className="text-xl md:text-3xl text-right mt-5">
                        <div className="flex flex-row justify-end items-center">
                            <AnimatedNumbers
                                animateToNumber={95}
                                fontStyle={{ fontSize: 30, fontWeight: "bold" }}
                                configs={(number, index) => {
                                    return { mass: 1, tension: 230, friction: 140 };
                                }} />
                            <div className="font-bold">%</div>
                        </div>
                        <div className="font-regular text-md md:text-2xl">Locked Forever</div>
                        <div className="w-full h-[2px] bg-black/40 my-5"></div>
                    </div>

                    <div className="text-xl md:text-3xl text-right mt-5">
                        <div className="flex flex-row justify-end items-center">
                            <AnimatedNumbers
                                animateToNumber={100}
                                fontStyle={{ fontSize: 30, fontWeight: "bold" }}
                                configs={(number, index) => {
                                    return { mass: 0.2, tension: 100, friction: 140 };
                                }} />
                            <div className="font-bold">%</div>
                        </div>
                        <div className="font-regular text-md md:text-2xl">Community Driven</div>
                        <div className="w-full h-[2px] bg-black/40 my-5"></div>
                    </div>

                </div>

            </motion.div>


        </div>
    );
}

export default Facts;