import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { FaRegEnvelope } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";



const Contact = () => {
    return (
        <>
            <div className='container max-w-7xl mx-auto my-32 lg:px-0 md:px-10 px-5'>
                <div className='text-center'>
                    <SectionTitle title={'CONTACT ME'} subtitle={'Get In Touch'}></SectionTitle>
                </div>
                <div className='grid lg:grid-cols-3 gap-10 justify-between  my-10'>
                    <div className='col-span-1 '>
                        <div className='flex gap-5 p-5'>
                            <div>
                                <IoLocationOutline className='text-5xl text-brown-900'></IoLocationOutline>
                            </div>
                            <div >
                                <h2 className='text-3xl font-semibold text-brown-900'>Location</h2>
                                <p className='paragraph text-lg leading-8'>Chandpur, Bangladesh</p>
                            </div>
                        </div>
                        <div className='flex gap-6 p-5'>
                            <div>
                                <FaRegEnvelope className='text-4xl text-brown-900'></FaRegEnvelope>
                            </div>
                            <div >
                                <h2 className='text-3xl font-semibold text-brown-900'>Email</h2>
                                <p className='paragraph text-lg leading-8'>mdrabbybd4747@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex gap-6 p-5'>
                            <div>
                                <MdOutlinePhoneInTalk className='text-4xl text-brown-900'></MdOutlinePhoneInTalk>
                            </div>
                            <div >
                                <h2 className='text-3xl font-semibold text-brown-900'>Phone</h2>
                                <p className='paragraph text-lg leading-8'>+8801630474756</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 w-full p-10 rounded-lg'>
                        <form action="">
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                                <input type="text" name="name" id="name" placeholder='Your Name...' className='border-b-[1px] border-brown-500 outline-none p-4 text-sm' />
                                <input type="email" name="name" id="name" placeholder='Your Email...' className='border-b-[1px] border-brown-500 outline-none p-4 text-sm' />
                                <input type="text" name="name" id="name" placeholder='Your Number...' className='border-b-[1px] border-brown-500 outline-none p-4 text-sm' />
                                <input type="text" name="name" id="name" placeholder='Subject...' className='border-b-[1px] border-brown-500 outline-none p-4 text-sm' />
                            </div>
                            <textarea name="" id="" rows="5" placeholder="What's on your mind..." className='border-b-[1px] border-brown-500 outline-none p-4 text-sm w-full mt-5'></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;