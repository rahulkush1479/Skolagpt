import React from 'react';

export default function HeroBanner() {
    return (

        <div className='relative h-svh w-full overflow-hidden'>
            <div className="absolute top-0 -left-40 h-[22rem] w-[22rem] rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-20 blur-3xl filter sm:h-96 sm:w-96"></div>


            <div className="absolute -bottom-20 -right-20 h-[22rem] w-[22rem] rounded-full bg-gradient-to-r from-cyan-400 to-green-300 opacity-20 blur-3xl filter sm:h-96 sm:w-96"></div>
            <div className="absolute  bottom-14  right-48 h-[22rem] w-[22rem] rounded-full bg-gradient-to-r from-blue-400 to-blue-200 opacity-20 blur-3xl filter sm:h-96 sm:w-96"></div>



        </div>
    );
}
