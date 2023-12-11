import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { FaMedal, FaUsers } from "react-icons/fa";
import { TbUserShield } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";



const About = () => {
    return (
        <>
            <div className='container max-w-7xl mx-auto my-32'>
                <div className='text-center mb-16'>
                    <SectionTitle subtitle={'Learn More'} title={'about me'} paragraph={'I’m professional web designer & developer. I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. '}></SectionTitle>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10 '>
                    <div className='flex gap-10 p-10 border-[1px] border-brown-900 border-opacity-20 rounded-lg'>
                        <div>
                            <FaMedal className='text-7xl text-brown-900'></FaMedal>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='text-4xl font-bold text-brown-900'>QUALITY</h2>
                            <p className='paragraph text-lg leading-8'>Design Quality is very important for every website, I make sure 100% quality & satisfaction before delivering the project.</p>
                        </div>
                    </div>
                    <div className='flex gap-10 p-10 border-[1px] border-brown-900 border-opacity-20 rounded-lg'>
                        <div>
                            <FaUsers className='text-7xl text-brown-900'></FaUsers>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='text-4xl font-bold text-brown-900'>INTEGRITY</h2>
                            <p className='paragraph text-lg leading-8'>Friendly coding and design professionality increase website speed and SEO result, only experienced people can make sure of this.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-10 p-10 border-[1px] border-brown-900 border-opacity-20 rounded-lg'>
                        <div>
                            <TbUserShield className='text-7xl text-brown-900'></TbUserShield>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='text-4xl font-bold text-brown-900'>SECURITY & SAFETY</h2>
                            <p className='paragraph text-lg leading-8'>Get complete security website and safe your all data and information. Super Safe.</p>
                        </div>
                    </div>
                    <div className='flex gap-10 p-10 border-[1px] border-brown-900 border-opacity-20 rounded-lg'>
                        <div>
                            <BiSupport className='text-7xl text-brown-900'></BiSupport>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='text-4xl font-bold text-brown-900'>SUPPORT</h2>
                            <p className='paragraph text-lg leading-8'>Get lifetime working relationship & support with full instructions for your project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;