import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='w-80 mx-auto'>
            <p className='text-yellow-600 text-xl italic mb-4'>---{subheading}---</p>
            <h3 className='text-black text-4xl border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;