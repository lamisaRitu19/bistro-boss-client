import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import SectionTags from '../../../components/SectionTags/SectionTags';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import Recommendations from '../Recommendations/Recommendations';
import { Helmet } from 'react-helmet-async';
import chefService from '../../../assets/home/chef-service.jpg';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Banner></Banner>

            <div className='max-w-screen-2xl mx-auto mt-20'>
                <Category></Category>

                <SectionTags 
                    heading="Bistro Boss" 
                    subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo"
                    img={chefService}
                    mainContainer={"h-[572px]"}
                    txtContainer={"w-[1096px] h-[334px] bg-white text-black"}
                    pageTag={false}
                ></SectionTags>

                <PopularMenu></PopularMenu>

                <div className='h-[250px] flex justify-center items-center bg-black text-white text-5xl font-medium mb-20'>
                    Call Us: +88 0192345678910
                </div>
                
                <Recommendations></Recommendations>
            </div>

            <Featured></Featured>

            <div className='max-w-screen-2xl mx-auto mt-20'>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;