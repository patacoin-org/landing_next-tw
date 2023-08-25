"use client";

import { motion } from "framer-motion";

function ReadyToBuy() {
    return (
        <div id="readytobuy" className="bg-tan relative z-10 h-full w-full flex flex-col md:flex-row justify-center items-center pb-12 md:pb-36">

            <motion.div
                initial="hidden"
                variants={{
                    "visible": { opacity: 1, y: 0 },
                    "hidden": { opacity: 0, y: 100 },
                }}
                transition={{ duration: 1 }}
                whileInView={"visible"}
                className="flex flex-col md:border-r-2 border-black/60 justify-center items-center h-full w-full p-5 md:p-10">
                <div className="relative z-10 tracking-tighter text-4xl md:text-7xl text-left font-bold">
                    Ready to buy PAN?
                </div>
            </motion.div>

            <motion.div 
            initial="hidden"
            variants={{
                "visible": { opacity: 1, y: 0 },
                "hidden": { opacity: 0, y: 100 },
            }}
            transition={{ duration: 1,delay:0.5 }}
            whileInView={"visible"}
            className="flex flex-col justify-start items-start h-full w-full px-5 md:px-20 py-0 md:py-10">
                <div className="text-black text-xl md:text-2xl font-regular text-center md:text-left">
                    Download an Ethereum wallet like MetaMask. It’s free on the app store or google play. Desktop users can download the MetaMask chrome extension.
                </div>
            </motion.div>

        </div>
    );
}

export default ReadyToBuy;