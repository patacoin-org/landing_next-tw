"use client";
import { motion } from "framer-motion";
import patacon2 from "../images/25.webp";
import patacon1 from '@assets/patacon.jpeg'

function ASimpleMission() {
    return (
        <div className="h-full md:h-screen w-full flex flex-col md:flex-row-reverse relative z-10 justify-center items-center">
            <div style={{ backgroundImage: `url('${patacon2.src}')` }} className="bg-cover bg-center w-full md:w-2/4 h-96 md:h-full flex bg-soft-orange"></div>
            <div className="w-full md:w-2/4  h-full bg-tan flex flex-col justify-center items-start p-10">
                <div className="text-md md:text-xl font-medium">Lo nuestra misión tiene un enfoque claro..</div>
                <motion.div
                    initial="hidden"
                    variants={{
                        "visible": { opacity: 1, y: 0 },
                        "hidden": { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileInView={"visible"}
                    className="text-5xl md:text-6xl font-bold mt-3"
                >
                    ¡Latinoamérica! 
                </motion.div>
                <motion.div
                    initial="hidden"
                    variants={{
                        "visible": { opacity: 1, y: 0 },
                        "hidden": { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 1, delay: 0.7 }}
                    whileInView={"visible"}
                    className="text-xl md:text-2xl font-regular my-5 md:my-10"
                >
                    ¿No estás cansando de que todos los avances tecnologícos vengan de otra parte? <br/><br/>
                    ¡Hagamos crecer este contienente juntos! Seamos parte del crecimiento tecnologico de la región y apoyemos a que cada individuo esté familiarizado con las tecnologías blockchain y tengamos mayor adopción tecnologica. <br></br>
                    La consecuencia de esto es sencilla: <b>¡Más crecimiento para la región!</b><br></br><br></br>

                    

                   <b> ¡Hagamos retumbar el mundo juntos al son de un crujiente PataCoin! </b>

                </motion.div>

            </div>

        </div>
    );
}

export default ASimpleMission;