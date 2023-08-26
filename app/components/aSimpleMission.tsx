"use client";
import { motion } from "framer-motion";
import peter2 from "../images/peter2.png";

function ASimpleMission() {
    return (
        <div className="h-full md:h-screen w-full flex flex-col md:flex-row-reverse relative z-10 justify-center items-center">
            <div style={{ backgroundImage: `url('${peter2.src}')` }} className="bg-cover bg-center w-full md:w-2/4 h-96 md:h-full flex bg-soft-orange"></div>
            <div className="w-full md:w-2/4  h-full bg-tan flex flex-col justify-center items-start p-10">
                <div className="text-md md:text-xl font-medium">Una misión sencilla</div>
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
                    Haga de Patacoin la moneda meme más popular.
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
                    ¿Suena loco? Las monedas de perro combinadas tienen más de 5 millones de billeteras con saldo. <br/><br/>
                    ¡Juntos podemos superar eso fácilmente!
                </motion.div>

            </div>

        </div>
    );
}

export default ASimpleMission;