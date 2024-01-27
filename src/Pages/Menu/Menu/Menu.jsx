import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTags from '../../../components/SectionTags/SectionTags';
import banner from '../../../assets/menu/banner3.jpg';
import chefService from '../../../assets/home/chef-service.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    
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
                <SectionTitle heading={"Today's Offer"} subheading={"Don't miss"} textColor={"text-black"}></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
                <MenuCategory items={dessert} title={"dessert"} coverImg={chefService}></MenuCategory>
                <MenuCategory items={pizza} title={"pizza"} coverImg={chefService}></MenuCategory>
                <MenuCategory items={salad} title={"salad"} coverImg={chefService}></MenuCategory>
                <MenuCategory items={soup} title={"soup"} coverImg={chefService}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;