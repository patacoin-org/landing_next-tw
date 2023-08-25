function Footer() {
    return (
        <div className="flex relative z-10 h-full md:h-96 w-full bg-black text-tan">
            <div className="flex flex-col gap-10 md:flex-row justify-between w-full items-start p-24">

                <div className="bg-purp text-tan text-4xl font-regular px-4 py-1 rounded-md">
                    PAN
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
                    <div className="flex flex-col justify-start items-start gap-3">
                        <div className="text-3xl font-bold">Useful Links</div>
                        <div className="text-xl font-regular">Tokenomics</div>
                        <div className="text-xl font-regular">How to buy PAN</div>
                        <div className="text-xl font-regular">Roadmap</div>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-3">
                        <div className="text-3xl font-bold">PAN Crew</div>
                        <div className="text-xl font-regular">Projects</div>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-3">
                        <div className="text-3xl font-bold">Socials</div>
                        <div className="text-xl font-regular">Twitter</div>
                        <div className="text-xl font-regular">Telegram</div>
                        <div className="text-xl font-regular">Discord</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;