import React from 'react';

const SectionTags = ({heading, subheading}) => {
    return (
        <div className='bg-chef-service h-[572px] flex justify-center items-center mb-16'>
            <div className='w-[1096px] h-[334px] flex flex-col justify-center bg-white text-black px-40'>
                <h3 className='text-4xl mb-4'>{heading}</h3>
                <p>{subheading}</p>
            </div>
        </div>
    );
};

export default SectionTags;