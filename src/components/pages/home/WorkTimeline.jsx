import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaChartLine, FaCode } from "react-icons/fa6";
import { BsUiChecks } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";

const WorkTimeline = () => {
    return (
        <>
            <div className='container max-w-7xl mx-auto my-20'>
                <div className='text-center'>
                    <SectionTitle title={'HOW DO I WORK'} paragraph={'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.'}></SectionTitle>
                </div>
                <div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#3f4245', color: '#fff' }}
                            icon={<IoChatbubblesSharp />}
                        >
                            <h4 className="vertical-timeline-element-subtitle text-3xl font-bold text-brown-900">DISCUSSION</h4>
                            <p className='paragraph'>
                                To understand the project needs & requirements it’s very important for me, for that I discuss with every details to related projects if needed I communicate by video or audio conversations.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#3f4245', color: '#fff' }}
                            icon={<FaChartLine />}
                        >
                            <h4 className="vertical-timeline-element-subtitle text-3xl font-bold text-brown-900">PLANNING</h4>
                            <p className='paragraph'>
                                Then I can create a plan for the interior projects. Planning gives high potential to every projects. Every single detail listed in the plan, when I deliver, when I need website data form you.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#3f4245', color: '#fff' }}
                            icon={<FaCode />}
                        >
                            <h4 className="vertical-timeline-element-subtitle text-3xl font-bold text-brown-900">CODING</h4>
                            <p className='paragraph'>
                                The website is built by web language that’s why we need to code for every website. it’s very important to have hand coding, clean and developer friendly coding. I give 100% guarantee in all of them.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#3f4245', color: '#fff' }}
                            icon={<BsUiChecks />}
                        >
                            <h4 className="vertical-timeline-element-subtitle text-3xl font-bold text-brown-900">SUBMIT FOR REVIEW</h4>
                            <p className='paragraph'>
                                After design and coding, I send for review to client/project manager. After client/project manager checking, If have to change or revision, I say client/project manager to send all of them in a list and I am happy to do all changes every time.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: '#3f4245', color: '#fff' }}
                            icon={<MdOutlineWeb />}
                        >
                            <h4 className="vertical-timeline-element-subtitle text-3xl font-bold text-brown-900">WEBSITE IS READY!</h4>
                            <p className='paragraph'>
                                After reviewing everything, we are going to the final step, if everything has done, then I can publish it for everyone. In every project, i make sure to give full support to the clients/project manager.
                            </p>
                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>

            </div>
        </>
    );
};

export default WorkTimeline;