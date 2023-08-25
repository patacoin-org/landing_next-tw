"use client";

import { motion } from "framer-motion";
import peter2 from "../images/peter2.png";
import dynamic from "next/dynamic";


interface CommunityCardProps {
    title: string,
    description: Array<string>,
}

function CommunityCard(props: CommunityCardProps) {
    return (
        <div className="text-black w-full h-full p-10 rounded-2xl bg-blue/[0.05]">
            <div className="flex flex-row justify-start gap-5 items-center">
                <div style={{ backgroundImage: `url('${peter2.src}')` }} className="bg-cover bg-center flex-none h-12 w-12 rounded-full bg-blue"></div>
                <div className="text-3xl font-medium">{props.title}</div>
            </div>
            <div className="flex text-md flex-col mt-5 gap-3 justify-start items-start">
                {
                    props.description.map((item, index) => {
                        return (
                            <motion.div
                                initial="hidden"
                                variants={{
                                    "visible": { opacity: 1, y: 0 },
                                    "hidden": { opacity: 0, y: 20 },
                                }}
                                transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
                                whileInView={"visible"}
                                className="flex" key={index}>
                                <div className="flex flex-row justify-center items-start gap-2">
                                    <div>{index+1}.</div>
                                    <div>{item}</div>
                                    
                                    
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    );
}


function DrivenByTheCommunity() {

    const testingArr=[
        "Launch POOH on Uniswap and other popular decentralized exchanges.",
        "Announce POOH on social media channels like Twitter and Discord and crypto forums like Bitcoin Talk and Reddit",
        "Early adopters are incentivized and rewarded for being early and then helping spread the word.",
        "Approach influencers and crypto publications to promote and build awareness of POOH.",
        "List on popular price tracking websites like Coinmarketcap and CoinGecko."
    ]

    return (
        <div className="h-full w-full bg-tan relative z-10 flex justify-start items-center flex-col p-10 pb-24">
            <div className="text-black font-medium text-md md:text-xl mt-10">Driven by the community</div>
            <div id="dao"  className="text-black font-bold text-5xl md:text-6xl mt-5 md:mt-10 text-center">Expect Nothing<br />Expect Surprises.</div>
            <div  className="flex flex-col md:flex-row justify-center items-start mt-16 gap-10 px-[10%]">
                <CommunityCard description={testingArr} title="Launch and promotion" />
                <CommunityCard description={testingArr} title="Community Building & Expansion" />
                <CommunityCard description={testingArr} title="Long-Term Sustainability and Growth" />
            </div>


        </div>
    );
}

export default DrivenByTheCommunity;