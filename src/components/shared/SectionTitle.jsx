import React from 'react';

const SectionTitle = ({ title, subtitle, paragraph }) => {
    return (
        <>
            <div className=' space-y-5'>
                <h4 className='text-2xl newFont'>{subtitle}</h4>
                <h2 className='md:text-6xl text-4xl uppercase font-bold '>{title}</h2>
                <div className="divider w-40 mx-auto divider-warning h-0"></div>
                <p className='md:text-xl text-base max-w-4xl mx-auto paragraph'>{paragraph}</p>
            </div>
        </>
    );
};

export default SectionTitle;