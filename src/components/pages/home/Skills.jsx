import html5 from '../../../assets/html.webp'
import css3 from '../../../assets/css.webp'
import tailwindCss from '../../../assets/tailwind.webp'
import bootstrapCss from '../../../assets/bootstrap.png'
import javaScriptImg from '../../../assets/javascript.png'
import mongoDBImg from '../../../assets/mongo-db.png'
import nodeJSImg from '../../../assets/nodejs.png'
import reactJSImg from '../../../assets/react.png'
import expressJSImg from '../../../assets/express.png'
import wordpress from '../../../assets/wordpress.png'
import wix from '../../../assets/Wix-Logo.png'
import figma from '../../../assets/figma.png'
import SectionTitle from '../../shared/SectionTitle';

const Skills = () => {
    return (
        <>
            <div id="skills" className='container max-w-5xl mx-auto my-40 lg:px-0 md:px-10 px-5'>
                <div className='text-center'>
                    <SectionTitle title={'My Skills'} paragraph={'I am a front-end web developer and I am passionate about web design and development. I am expertise in React, Tailwind, JavaScript, HTML5, CSS3, WordPress, Wix etc. I build user-friendly and performant web applications.'}></SectionTitle>
                </div>

                <div className='col-span-4 grid md:grid-cols-6 grid-cols-2 gap-10 mt-20'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={html5} alt="html5" className='' />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#F06529]'>HTML5</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={css3} alt="css3" />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#264de4]'>CSS3</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={tailwindCss} alt="css3" />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#27b8bd]'>Tailwind</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={bootstrapCss} alt="css3" />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#e040fb]'>BootStrap</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={javaScriptImg} alt="css3" />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#f0db4f]'>JavaScript</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={reactJSImg} alt="css3" />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#61dbfb]'>React JS</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={mongoDBImg} alt="css3" />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#3d9b35]'>MongoDB</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={nodeJSImg} alt="css3" />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#6cc24a]'>NodeJS</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={expressJSImg} alt="css3" />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#303030]'>Express JS</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={wordpress} alt="css3" />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#21759b]'>WordPress</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={wix} alt="css3" />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#faad4d]'>Wix</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={figma} alt="css3" />
                        <h3 className='text-xl font-semibold mt-2 italic text-[#ff7262]'>Figma</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;