import React from 'react';
import p1 from "../images/1.png";
import p2 from "../images/2.png";
import p3 from "../images/3.png";
import p4 from "../images/4.png";
import p5 from "../images/5.png";
import p6 from "../images/6.png";
import p7 from "../images/7.png";
import p8 from "../images/8.png";
import p9 from "../images/9.png";
import p10 from "../images/10.png";
import p11 from "../images/11.png";
import p12 from "../images/12.png";



function Exchanges() {
    return (
        <div className="w-full h-full relative z-10 bg-tan flex flex-wrap justify-center items-center py-0 md:py-24 gap-8 md:gap-16">
                <button style={{backgroundImage:`url('${p1.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p2.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p3.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p4.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p5.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p6.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p7.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p8.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p10.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p11.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p12.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>

        </div>
      );
}

export default Exchanges;