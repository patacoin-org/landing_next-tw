import React from 'react';
import p2 from  "@assets/2.png";
import p3 from "@assets/3.png";
import p6 from "@assets/6.png";



function Exchanges() {
    return (
        <div className="w-full h-full relative z-10 bg-tan flex flex-wrap justify-center items-center py-0 md:py-24 gap-8 md:gap-16">
                <button style={{backgroundImage:`url('${p2.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p3.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>
                <button style={{backgroundImage:`url('${p6.src}')`}} className='bg-contain bg-center bg-no-repeat  md:h-24 md:w-64 h-12 w-36'></button>

        </div>
      );
}

export default Exchanges;