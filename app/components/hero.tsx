"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import pan from "../images/peter.png";

function Hero() {
    return (
        <div className="fixed z-0 h-screen w-full flex flex-col justify-end items-end overflow-y-hidden">
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ backgroundImage: `url('${pan.src}')` }} className='md:flex hidden absolute z-0 bg-contain bg-no-repeat bg-center h-3/4 w-2/4'></motion.div>

            <div className='relative z-10 h-screen w-full bg-transparent flex flex-col justify-center items-start px-[5%]'>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative z-10 tracking-tighter text-4xl md:text-7xl font-bold">
                    Fly to New heights with <span className="underline text-purp">PAN</span><br />
                </motion.div>
                <motion.div 
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className='relative z-10 tracking-tighter text-4xl md:text-7xl font-bold'>
                    The Coin that never grows!
                </motion.div>
                <motion.div
                    initial={{ y: 90, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className='relative z-10 tracking-tighter text-xl md:text-2xl font-medium mt-10'>
                    PAN is a community driven token on the Ethereum blockchain. <br />It is a deflationary token with a 1% burn rate on every transaction.
                </motion.div>
            </div>



        </div>
    );
}

export default Hero;