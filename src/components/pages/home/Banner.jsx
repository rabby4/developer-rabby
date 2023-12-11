import React from 'react';
import bannerImg from './../../../assets/banner.jpg'

const Banner = () => {
    return (
        <>
            <div className='bgImage h-[calc(100vh-100px)] relative'>
                {/* <div className="absolute bgOverlay"></div> */}
                <div className='container mx-auto text-white z-10 h-full flex flex-col justify-center space-y-5'>
                    <h2 className='text-7xl font-bold '>Hello, I&#39;m</h2>
                    <h2 className='text-8xl font-bold '>Golam Rabby</h2>
                    <p>Full Stack Web Developer And WordPress Expert</p>
                    <div className='space-x-5'>
                        <button className="btn bg-transparent border-brown-400 uppercase text-white hover:bg-brown-500 hover:border-brown-500 px-8">Free consultation</button>
                        <button className="btn bg-brown-500 hover:bg-brown-900 text-white border-none uppercase px-8">Download Resume</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;