import React from 'react';
import MenuItem from '../../../components/MenuItem/MenuItem';
import SectionTags from '../../../components/SectionTags/SectionTags';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className='pb-16'>
            { title && <SectionTags 
                heading={title} 
                subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img={coverImg}
                mainContainer={"h-[572px]"}
                txtContainer={"w-[1096px] h-[334px] bg-black/50 text-white"}
                pageTag={false}
            ></SectionTags>}
            <div className='grid md:grid-cols-2 gap-12 mt-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className='text-black font-medium uppercase rounded-lg border-b-2 border-black px-6 py-2 mt-4'>Order your favorite food</button></Link>
        </div>
    );
};

export default MenuCategory;