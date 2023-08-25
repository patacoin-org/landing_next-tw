"use client";

import { ReactElement } from "react";
import peter2 from "../images/peter2.png";
import { MdDesignServices, MdLightbulb, MdPeople, MdSearch } from "react-icons/md";
import { ButtonWhite } from "./standards/button";
import { motion } from "framer-motion";

interface FeatureCardProps {
    title: string,
    description: string,
    icon: ReactElement,
}

function FeatureCard(props: FeatureCardProps) {
    return (
        <motion.div 
        initial="hidden"
        variants={{
            "visible":{opacity:1, y:0},
            "hidden":{opacity:0, y:100},
        }}
        transition={{duration:1}}
        whileInView={"visible"}
        className="w-full md:w-64 h-full md:h-64 border-blue rounded-md text-blue p-5">
            {props.icon}
            <div className="text-3xl mt-5 font-regular">{props.title}</div>
            <div className="text-md mt-4 font-regular">{props.description}</div>
        </motion.div>

    )
}


function Features() {
    return (
        <>
            <div className="h-screen w-full"></div>

            <div className="bg-tan relative border-t-8 border-purp z-10 h-full md:h-[800px] w-full flex flex-col-reverse  gap-24 md:flex-row justify-center items-center">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="w-full md:w-3/5 h-full md:h-2/4 flex flex-wrap gap-10 justify-center items-center p-10">

                    <FeatureCard icon={<MdDesignServices size={50} />} title="Design" description="Launched stealth with no presale, zero taxes, LP burnt and contract renounced, $PAN is for the people -forever." />
                    <FeatureCard icon={<MdLightbulb size={50} />} title="Idea" description="It’s time for the most recognizable pan in the world to claim his rightful position on the charts at the start of a life changing bull market." />
                    <FeatureCard icon={<MdPeople size={50} />} title="Community" description="$PAN is a decentralized community movement. Anyone with skills or time can contribute as part of a group or on their own to help advance $PAN." />
                    <FeatureCard icon={<MdSearch size={50} />} title="Transparency" description="95% of PAN’s total supply is locked in Uniswap and keys are burnt! 5% is allocated for centralized exchange listings." />

                </motion.div>


                <div style={{ backgroundImage: `url('${peter2.src}')` }} className="h-full md:h-[792px] w-full md:w-2/5 text-tan flex bg-cover bg-center justify-center items-center">
                    <div className="w-full h-full flex justify-center items-center py-10 px-5">
                        <motion.div 
                        initial="hidden"
                        variants={{
                            "visible":{opacity:1, y:0},
                            "hidden":{opacity:0, y:100},
                        }}
                        transition={{duration:1,delay:0.3}}
                        whileInView={"visible"}
                        className="h-full md:h-3/4 w-full md:w-3/4 rounded-3xl text-center bg-blue/90 backdrop-blur-xl flex flex-col gap-2 justify-center items-center p-10">
                            <div className="text-xl font-medium">Built on Ethereum</div>
                            <div className="text-4xl font-medium">Buy $PAN</div>
                            <div className="text-xl font-medium mt-4">PAN is supported on popular<br />DeFi wallets like MetaMask</div>
                            <div className="h-24 w-24 bg-tan rounded-full mt-5 mb-10"></div>
                            <ButtonWhite text="Buy on Uniswap" onClick={() => { }} />

                        </motion.div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Features;