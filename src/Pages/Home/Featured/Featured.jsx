import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <section className='h-[848px] bg-featured-item bg-fixed mb-24'>
            <div className='h-full bg-black/70'>
                <div className='max-w-screen-2xl mx-auto pt-28'>
                    <SectionTitle heading="From Our Menu" subheading="Check it out" textColor={"text-white"}></SectionTitle>
                    <div className='md:flex justify-center items-center space-x-12 py-8 mt-4'>
                        <img src={featuredImg} alt="" className='w-[648px]' />
                        <div className='text-white text-xl text-left'>
                            <p>March 20, 2023</p>
                            <p className='uppercase'>Where can i get some?</p>
                            <p className='text-lg mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className='text-white font-medium uppercase rounded-lg border-b-2 border-white px-6 py-2'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;