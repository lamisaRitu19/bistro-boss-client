import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../components/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems); 
        })
    }, [])
    
    return (
        <section className='mb-20'>
            <SectionTitle heading="From Our Menu" subheading="Check It Out"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-12 mt-12'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className='text-black font-medium uppercase rounded-lg border-b-2 border-black px-6 py-2'>View Full Menu</button>
        </section>
    );
};

export default PopularMenu;