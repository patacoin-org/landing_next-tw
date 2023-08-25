"use client";

import { motion } from 'framer-motion';

function Hero() {
    return (
        <div id="background-pataconio" className="fixed z-0 h-screen w-full flex flex-col justify-end items-end overflow-y-hidden">
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='md:flex hidden absolute z-0 bg-contain bg-no-repeat bg-center h-3/4 w-2/4'></motion.div>

            <div className='relative z-10 h-screen w-full bg-transparent flex flex-col justify-center items-center px-[5%]'>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-white w-2/4 h-8 rounded  relative z-10 tracking-tighter text-4xl md:text-7xl font-bold">
                </motion.div>
            </div>



        </div>
    );
}

export default Hero;