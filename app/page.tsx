import Image from 'next/image'
import Hero from './components/hero'
import Features from './components/features'
import Facts from './components/facts'
import exchanges from "./images/exchanges.png";
import ReadyToBuy from './components/readyToBuy';
import NextSteps from './components/nextSteps';
import ASimpleMission from './components/aSimpleMission';
import Roadmap from './components/roadmap';
import DrivenByTheCommunity from './components/drivenByTheCommunity';
import Exchanges from './components/exchanges';

export default function Home() {
  return (
    <div className='bg-white h-full w-full flex flex-col justify-start items-start overflow-x-hidden'>
        <Hero/>
        <Features/>
        {/* <Image alt="exchanges" src={exchanges} className='flex w-full object-contain bg-tan relative z-10'/> */}
        <Exchanges/>
        <Facts/>
        <ReadyToBuy/>
        <NextSteps/>
        <ASimpleMission/>
        <Roadmap/>
        <DrivenByTheCommunity/>
      
    </div>
  )
}
