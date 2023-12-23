import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import SectionTags from '../../../components/SectionTags/SectionTags';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-screen-2xl mx-auto mt-20'>
                <Category></Category>
                <SectionTags 
                    heading="Bistro Boss" 
                    subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo"
                ></SectionTags>
                <PopularMenu></PopularMenu>
                <div className='h-[250px] flex justify-center items-center bg-black text-white text-5xl font-medium mb-28'>
                    Call Us: +88 0192345678910
                </div>
            </div>
            <Featured></Featured>
        </div>
    );
};

export default Home;