import React from 'react';

const Banner = () => {
    return (
        <>
            <div className='bgImage h-[calc(100vh-100px)] relative'>
                {/* <div className="absolute bgOverlay"></div> */}
                <div className='container max-w-7xl mx-auto text-white z-10 h-full flex flex-col justify-center space-y-5 lg:px-3 md:px-10 px-5'>
                    <h2 className='lg:text-7xl md:text-6xl text-4xl font-bold '>Hello, I&#39;m</h2>
                    <h2 className='lg:text-8xl md:text-7xl text-5xl font-bold text-transparent italic strokeText'>Golam Rabby</h2>
                    <p className='text-lg'>Full Stack Web Developer And WordPress Expert</p>
                    <div className='md:space-x-5 md:space-y-0 space-y-4'>
                        <button className="btn bg-transparent border-brown-400 uppercase text-white hover:bg-brown-500 hover:border-brown-500 px-8">Free consultation</button>
                        <button className="btn bg-brown-500 hover:bg-brown-900 text-white border-none uppercase px-8">Download Resume</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;