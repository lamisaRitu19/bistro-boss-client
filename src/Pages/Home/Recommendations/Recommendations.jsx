import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ItemCard from '../../../components/ItemCard/ItemCard';
import useMenu from '../../../hooks/useMenu';

const Recommendations = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    
    return (
        <section>
            <SectionTitle heading="Chef Recommends" subheading="Should Try" textColor={"text-black"}></SectionTitle>
            <div className='grid grid-cols-4 gap-12 mt-10 mb-24'>
                {
                    offered.map(item => <ItemCard key={item._id} name={item.name} image={item.image} price={item.price} recipe={item.recipe}></ItemCard>)
                }
            </div>
        </section>
    );
};

export default Recommendations;