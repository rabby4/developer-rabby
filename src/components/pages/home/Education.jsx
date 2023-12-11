import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { IoChatbubblesSharp } from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const Education = () => {
    return (
        <>
            <div className='container max-w-7xl mx-auto'>
                <div className='text-center'>
                    <SectionTitle title={'Education'}></SectionTitle>
                </div>
                <div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#3f4245', color: '#fff' }}
                            date='2011-2016'
                            icon={<IoChatbubblesSharp />}
                        >
                            <h4 className="vertical-timeline-element-subtitle text-3xl font-bold text-brown-900">S.S.C</h4>
                            <h4 className="vertical-timeline-element-subtitle">Chandpur, Bangladesh</h4>
                            <p className='paragraph'>
                                Graduated from Rahimanagar B.A.B High School, Kachua, Chandpur, Bangladesh
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
};

export default Education;