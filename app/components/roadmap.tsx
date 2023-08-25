'use client';
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { AiOutlineHeart, AiOutlineRocket, AiOutlineBarChart, AiOutlineArrowUp } from "react-icons/ai";
import peter2 from "../images/peter2.png";

interface RoadmapCardProps {
    title: string,
    icon: ReactElement,
    index: number
}

function RoadmapCard(props: RoadmapCardProps) {
    return (
        <motion.div
            initial="hidden"
            variants={{
                "visible": { opacity: 1, y: 0 },
                "hidden": { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.5, delay: (props.index+1)*0.2 }}
            whileInView={"visible"}
        >
            <div className="flex flex-ro justify-start rounded-xl items-center gap-5 px-5 py-3 border-2 hover:bg-purp transition-all hover:scale-105 duration-200 text-tan hover:border-purp border-tan">
                {props.icon}
                <div className="text-xl">{props.title}</div>
            </div>
        </motion.div>
    );
}




function Roadmap() {
    return (
        <div className="h-full w-full bg-blue relative z-10 flex justify-start items-center flex-col p-10">
            <div className="text-tan font-medium text-xl mt-10">ROADMAP</div>
            <div id="roadmap" className="text-tan font-bold text-5xl md:text-6xl mt-10 text-center">Where we're going,<br />We don't need roads.</div>
            <div className="flex flex-wrap justify-center items-center mt-16 gap-5 md:gap-10">
                <RoadmapCard index={0} icon={<AiOutlineHeart size={35} />} title="1. Create" />
                <RoadmapCard index={1} icon={<AiOutlineRocket size={35} />} title="2. Stealth Launch" />
                <RoadmapCard index={2}icon={<AiOutlineBarChart size={35} />} title="3. Grow Holders" />
                <RoadmapCard index={3} icon={<AiOutlineArrowUp size={35} />} title="4. Trend" />
            </div>

            <div className="h-96 md:h-screen w-full mt-10 md:p-20 flex justify-center items-center">
                <div style={{ backgroundImage: `url('${peter2.src}')` }} className="bg-cover bg-center w-full md:w-3/4 h-full bg-tan rounded-xl">

                </div>
            </div>

        </div>
    );
}

export default Roadmap;