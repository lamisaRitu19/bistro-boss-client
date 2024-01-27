import React from 'react';
import { Parallax } from 'react-parallax';

const SectionTags = ({heading, subheading, img, mainContainer, txtContainer, pageTag}) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="chef service"
            strength={-200}
            className='mb-16'
        >
            <div className={`${mainContainer} flex justify-center items-center`} >
                <div className={`${txtContainer} flex flex-col justify-center px-40`}>
                    <h3 className={pageTag? 'text-7xl font-bold capitalize mb-4': 'text-4xl font-medium capitalize mb-4'}>{heading}</h3>
                    <p className={pageTag? 'text-2xl font-semibold' : ''}>{subheading}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default SectionTags;