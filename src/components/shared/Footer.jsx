import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='bg-brown-900'>
                <div className='container max-w-7xl mx-auto flex justify-between py-5'>
                    <p className='text-white'>Copyright © 2023 - Developer Rabby</p>
                    <div className='flex gap-5 text-xl text-white'>
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