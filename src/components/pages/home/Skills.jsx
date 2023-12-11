import React from 'react';
import html5 from '../../../assets/HTML5_Logo_512.png'
import css3 from '../../../assets/css-logo.png'
import js from '../../../assets/js.webp'
import react from '../../../assets/react.png'

const Skills = () => {
    return (
        <>
            <div className='container max-w-7xl mx-auto grid grid-cols-5 gap-10 my-36'>
                <div className='col-span-2 text-left'>
                    <div className='space-y-5'>
                        <h4 className='text-xl newFont'>My Skills</h4>
                        <h2 className='text-4xl capitalize font-bold '>I am a front-end developer</h2>
                        <div className="divider w-40 divider-warning h-0"></div>
                        <p className='text-xl max-w-4xl mx-auto paragraph'>I am a front-end web developer and I am passionate about web design and development.</p>
                    </div>
                </div>
                <div className='col-span-3 grid grid-cols-3 gap-10'>
                    <div className='flex flex-col justify-center items-center shadow-lg rounded-lg py-10'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 90 }} role="progressbar">
                            <h3 className='text-3xl font-bold'>90%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-5 italic'>HTML5</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-lg rounded-lg py-10'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 90 }} role="progressbar">
                            <h3 className='text-3xl font-bold'>90%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-5 italic'>CSS3</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-lg rounded-lg py-10'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 75 }} role="progressbar">
                            <h3 className='text-3xl font-bold'>85%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-5 italic'>Tailwind</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-lg rounded-lg py-10'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 75 }} role="progressbar">
                            <h3 className='text-3xl font-bold'>80%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-5 italic'>BootStrap</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-lg rounded-lg py-10'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 70 }} role="progressbar">
                            <h3 className='text-3xl font-bold'>70%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-5 italic'>JavaScript</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-lg rounded-lg py-10'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 70 }} role="progressbar">
                            <h3 className='text-3xl font-bold'>70%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-5 italic'>React JS</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-lg rounded-lg py-10'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 70 }} role="progressbar">
                            <h3 className='text-3xl font-bold'>70%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-5 italic'>HTML5</h3>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Skills;