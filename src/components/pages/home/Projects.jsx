import React from 'react';
import { FaUsers } from 'react-icons/fa';
import SectionTitle from '../../shared/SectionTitle';
import { GiFoodTruck } from "react-icons/gi";
import weddingImg from '../../../assets/wedding.png'
import electronicImg from '../../../assets/electronic.png'
import foodImg from '../../../assets/food.png'

const Projects = () => {
    return (
        <>
            <div className='container max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <SectionTitle subtitle={'PORTFOLIO'} title={'RECENT PROJECT'} paragraph={'I enjoy developing simple, clean and slick websites that provide real value to the end user.'}></SectionTitle>
                </div>
                <div className='space-y-10'>
                    <div className='flex gap-10 p-10 border-[1px] border-brown-900 border-opacity-20 rounded-lg'>
                        <div className='w-1/6'>
                            <img src={foodImg} alt="" />
                        </div>
                        <div className='w-5/6 space-y-4'>

                            <div className='flex justify-between'>
                                <h2 className='text-4xl font-bold text-brown-900'>Community food share</h2>
                                <a href='https://food-sharing-bc5b4.web.app/' className="bg-brown-900 hover:bg-brown-500 text-white px-6 rounded btn">
                                    Live Preview
                                </a>
                            </div>
                            <p className='paragraph text-base'>Anybody can join/log on community food share team and can share their foods Donor can manage her shared/uploaded foods Donor can change the status (Available/Delivered) of her shared/uploaded foods Also donor can delete her foods User can request and pick up the food at the mentioned location
                            </p>
                            <div className='space-x-3'>
                                <div className="badge bg-[#F06529] text-white px-5 py-3">Html</div>
                                <div className="badge bg-[#264de4] text-white px-5 py-3">Css</div>
                                <div className="badge bg-[#27b8bd] text-white px-5 py-3">Tailwind</div>
                                <div className="badge bg-[#f0db4f] text-white px-5 py-3">JavaScript</div>
                                <div className="badge bg-[#61dbfb] text-white px-5 py-3">React JS</div>
                                <div className="badge bg-[#6cc24a] text-white px-5 py-3">Node JS</div>
                                <div className="badge bg-[#3d9b35] text-white px-5 py-3">MongoDB</div>
                                <div className="badge bg-[#303030] text-white px-5 py-3">Express JS</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-10 p-10 border-[1px] border-brown-900 border-opacity-20 rounded-lg'>
                        <div className='w-1/6'>
                            <img src={weddingImg} alt="" />
                        </div>
                        <div className='w-5/6 space-y-4'>

                            <div className='flex justify-between'>
                                <h2 className='text-4xl font-bold text-brown-900'>Wedding Matrimony</h2>
                                <a href='https://matrimony-51be8.web.app/' className="bg-brown-900 hover:bg-brown-500 text-white px-6 rounded btn">
                                    Live Preview
                                </a>
                            </div>
                            <p className='paragraph text-base'>Anyone can register on the wedding matrimony website and find their partner. Every user has a details page where anyone can see their information. But they can not see the contact information. If anyone needs contact information, he or she should become a premium member, or he or she can request for contact information. In that case, he or she should pay $500. Also, every user has an individual dashboard where he or she can update her details, see requested information, and also see her favorite users that he or she added previously.
                            </p>
                            <div className='space-x-3'>
                                <div className="badge bg-[#F06529] text-white px-5 py-3">Html</div>
                                <div className="badge bg-[#264de4] text-white px-5 py-3">Css</div>
                                <div className="badge bg-[#f0db4f] text-white px-5 py-3">JavaScript</div>
                                <div className="badge bg-[#61dbfb] text-white px-5 py-3">React JS</div>
                                <div className="badge bg-[#3d80f7] text-white px-5 py-3">Material UI</div>
                                <div className="badge bg-[#6cc24a] text-white px-5 py-3">Node JS</div>
                                <div className="badge bg-[#3d9b35] text-white px-5 py-3">MongoDB</div>
                                <div className="badge bg-[#303030] text-white px-5 py-3">Express JS</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-10 p-10 border-[1px] border-brown-900 border-opacity-20 rounded-lg'>
                        <div className='w-1/6'>
                            <img src={electronicImg} alt="" />
                        </div>
                        <div className='w-5/6 space-y-4'>
                            <div className='flex justify-between'>
                                <h2 className='text-4xl font-bold text-brown-900'>Electronic Brand Shop</h2>
                                <a href='https://brand-shop-6ed3e.web.app/' className="bg-brown-900 hover:bg-brown-500 text-white px-6 rounded btn">
                                    Live Preview
                                </a>
                            </div>
                            <p className='paragraph text-base'>Different type of brand, each brand have some different products. Every product has ratting functionality. Add to cart option, The user can add multiple products to the cart. User can see all the products on the shop page. User can Register/Login.
                            </p>
                            <div className='space-x-3'>
                                <div className="badge bg-[#F06529] text-white px-5 py-3">Html</div>
                                <div className="badge bg-[#264de4] text-white px-5 py-3">Css</div>
                                <div className="badge bg-[#27b8bd] text-white px-5 py-3">Tailwind</div>
                                <div className="badge bg-[#f0db4f] text-white px-5 py-3">JavaScript</div>
                                <div className="badge bg-[#61dbfb] text-white px-5 py-3">React JS</div>
                                <div className="badge bg-[#6cc24a] text-white px-5 py-3">Node JS</div>
                                <div className="badge bg-[#3d9b35] text-white px-5 py-3">MongoDB</div>
                                <div className="badge bg-[#303030] text-white px-5 py-3">Express JS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;