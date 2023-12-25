import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTags from '../../../components/SectionTags/SectionTags';
import banner from '../../../assets/menu/banner3.jpg';
import chefService from '../../../assets/home/chef-service.jpg';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <SectionTags 
                heading="Our Menu" 
                subheading="Would Like To Try A Dish?"
                img={banner}
                mainContainer={"h-[800px]"}
                txtContainer={"w-[1536px] h-[450px] bg-black/50 text-white"}
                pageTag={true}
            ></SectionTags>

            <div className='max-w-screen-2xl mx-auto mt-20'>
                <SectionTags 
                    heading="Deserts" 
                    subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    img={chefService}
                    mainContainer={"h-[572px]"}
                    txtContainer={"w-[1096px] h-[334px] bg-black/50 text-white"}
                    pageTag={false}
                ></SectionTags>
                <SectionTags 
                    heading="Pizza" 
                    subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    img={chefService}
                    mainContainer={"h-[572px]"}
                    txtContainer={"w-[1096px] h-[334px] bg-black/50 text-white"}
                    pageTag={false}
                ></SectionTags>
                <SectionTags 
                    heading="Salads" 
                    subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    img={chefService}
                    mainContainer={"h-[572px]"}
                    txtContainer={"w-[1096px] h-[334px] bg-black/50 text-white"}
                    pageTag={false}
                ></SectionTags>
                <SectionTags 
                    heading="Soup" 
                    subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    img={chefService}
                    mainContainer={"h-[572px]"}
                    txtContainer={"w-[1096px] h-[334px] bg-black/50 text-white"}
                    pageTag={false}
                ></SectionTags>
            </div>
        </div>
    );
};

export default Menu;