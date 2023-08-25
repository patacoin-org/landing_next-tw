"use client";
import { motion } from "framer-motion";
import peter2 from "../images/peter2.png";

function ASimpleMission() {
    return (
        <div className="h-full md:h-screen w-full flex flex-col md:flex-row-reverse relative z-10 justify-center items-center">

            <div style={{ backgroundImage: `url('${peter2.src}')` }} className="bg-cover bg-center w-full md:w-2/4 h-96 md:h-full flex bg-blue"></div>

            <div className="w-full md:w-2/4  h-full bg-tan flex flex-col justify-center items-start p-10">
                <div className="text-md md:text-xl font-medium">A simple mission</div>
                <motion.div 
                initial="hidden"
                variants={{
                    "visible": { opacity: 1, y: 0 },
                    "hidden": { opacity: 0, y: 20 },
                }}
                transition={{ duration: 1, delay: 0.3 }}
                whileInView={"visible"}
                className="text-5xl md:text-6xl font-bold mt-3">Make PAN the most widely held meme coin.</motion.div>
                <motion.div 
                initial="hidden"
                variants={{
                    "visible": { opacity: 1, y: 0 },
                    "hidden": { opacity: 0, y: 20 },
                }}
                transition={{ duration: 1, delay: 0.7 }}
                whileInView={"visible"}
                className="text-xl md:text-2xl font-regular my-5 md:my-10">
                    Sound crazy? Dog coins combined have over 5 million wallets holding a balance. <br/><br/>
                    Together, we can easily beat that!
                </motion.div>

            </div>

        </div>
    );
}

export default ASimpleMission;