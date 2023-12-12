import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='bg-brown-900'>
                <div className='container max-w-7xl mx-auto flex md:flex-row flex-col justify-between py-5 lg:px-0 md:px-10 px-5'>
                    <p className='text-white md:text-left text-center'>Copyright © 2023 - Developer Rabby</p>
                    <div className='flex md:justify-end justify-center gap-5 text-xl text-white md:mt-0 mt-4'>
                        <a href="https://www.facebook.com/developerRabby6"><FaFacebook></FaFacebook></a>
                        <a href="https://www.linkedin.com/in/developer-rabby/"><FaLinkedin></FaLinkedin></a>
                        <a href="https://twitter.com/DeveloperRabby"><FaTwitter ></FaTwitter></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;