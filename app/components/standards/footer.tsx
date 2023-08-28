import Link from "next/link";

function Footer() {
    return (
        <div className="flex relative z-10 h-full md:h-96 w-full bg-black text-tan">
            <div className="flex flex-col gap-10 md:flex-row justify-between w-full items-start p-24">

                <div className="text-tan text-4xl font-regular px-4 py-1 rounded-md">
                    PataCoin
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
                    <div className="flex flex-col justify-start items-start gap-3">
                        <div className="text-3xl font-bold">Enlaces de interés</div>
                        <div className="text-xl font-regular">Pata-nomics</div>
                        <div className="text-xl font-regular">¿Cómo comprar?</div>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-3">
                        <div className="text-3xl font-bold">Nuestro equipo</div>
                        <div className="text-xl font-regular">Proyectos</div>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-3">
                        <div className="text-3xl font-bold">Redes Sociales</div>
                        <Link className="text-xl font-regular" href="https://twitter.com/Pata_coin">Twitter</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;