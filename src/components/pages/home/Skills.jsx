

const Skills = () => {
    return (
        <>
            <div id="skills" className='container max-w-7xl mx-auto grid lg:grid-cols-6 lg:gap-10 my-40 lg:px-0 md:px-10 px-5'>
                <div className='col-span-2 space-y-5 lg:text-left text-center'>
                    <h2 className='text-5xl capitalize font-bold '>My Skills</h2>
                    <div className="divider w-40 divider-warning h-0 mx-auto lg:mx-0"></div>
                    <p className='md:text-lg text-base max-w-4xl mx-auto paragraph md:leading-8'>I am a front-end web developer and I am passionate about web design and development. I am expertise in React, Tailwind, JavaScript, HTML5, CSS3, WordPress, Wix etc. I build user-friendly and performant web applications.</p>
                </div>
                <div className='col-span-4 grid md:grid-cols-4 grid-cols-2 gap-5 lg:mt-0 mt-10'>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-28 h-28" style={{ "--value": 90 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>90%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#F06529]'>HTML5</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-28 h-28" style={{ "--value": 90 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>90%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#264de4]'>CSS3</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-28 h-28" style={{ "--value": 85 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>85%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#27b8bd]'>Tailwind</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-28 h-28" style={{ "--value": 80 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>80%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#e040fb]'>BootStrap</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-28 h-28" style={{ "--value": 70 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>70%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#f0db4f]'>JavaScript</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-28 h-28" style={{ "--value": 70 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>70%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#61dbfb]'>React JS</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 60 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>60%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#3d9b35]'>MongoDB</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 50 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>50%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#6cc24a]'>NodeJS</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 50 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>50%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#303030]'>Express JS</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 85 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>85%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#21759b]'>WordPress</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 80 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>80%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#faad4d]'>Wix</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-md rounded-lg py-8'>
                        <div className="radial-progress flex items-center justify-center w-32 h-32" style={{ "--value": 50 }} role="progressbar">
                            <h3 className='text-2xl font-bold'>50%</h3>
                        </div>
                        <h3 className='text-xl font-semibold mt-2 italic text-[#ff7262]'>Figma</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;