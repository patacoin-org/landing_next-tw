"use client";

import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";
import patacon2 from "../images/23.jpeg";
import patacon1 from '@assets/patacon.jpeg'

interface StepProps {
    step: string,
    index?: number
}

function Step({ step, index = 0 }: StepProps) {
    return (
        <motion.div
            initial="hidden"
            variants={{
                "visible": { opacity: 1, y: 0 },
                "hidden": { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
            whileInView={"visible"}
            className="text-md md:text-xl text-black/80 flex flex-row justify-start items-start md:items-center gap-5"
        >
            <MdCheckCircle size={35} />
            {step}
        </motion.div>
    )
}


function NextSteps() {
    return (
        <div id="roadmap" className="h-full md:h-screen w-full flex flex-col md:flex-row relative z-10 justify-center items-center">

            <div style={{ backgroundImage: `url('${patacon2.src}')` }} className="bg-cover bg-center w-full md:w-2/4 h-96 md:h-full flex bg-soft-orange"></div>

            <div className="w-full md:w-2/4 h-full bg-tan flex flex-col justify-center items-start p-10">
                <div className="text-md md:text-xl font-medium">Roadmap</div>
                <motion.div
                    initial="hidden"
                    variants={{
                        "visible": { opacity: 1, y: 0 },
                        "hidden": { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileInView={"visible"}
                    className="text-5xl md:text-6xl font-bold mt-2"
                >
                    Nuestra Visión
                </motion.div>
                <div className="flex flex-col justify-start items-start mt-6 md:mt-10 pr-5 md:pr-10 gap-3 md:gap-5">
                    <Step index={0} step="Lanzamiento de Patacoin: Emitir 100.000.000 tokens y establecer alianzas con exchanges latinoamericanos." />
                    <Step index={1} step="Educación Blockchain: Organizar webinars y talleres en universidades y comunidades de LATAM." />
                    <Step index={2} step="Adopción Comercial: Desarrollar partnerships con negocios locales para aceptar Patacoin como método de pago." />
                    <Step index={3} step="Inversión Social: Crear un fondo comunitario en Patacoin para financiar proyectos tecnológicos en Latinoamérica." />
                </div>

            </div>

        </div>
    );
}

export default NextSteps;