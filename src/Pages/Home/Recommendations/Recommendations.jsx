import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ItemCard from '../../../components/ItemCard/ItemCard';

const Recommendations = () => {
    return (
        <section>
            <SectionTitle heading="Chef Recommends" subheading="Should Try"></SectionTitle>
            <div className='grid grid-cols-3 gap-12 mt-10 mb-24'>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard>
            </div>
        </section>
    );
};

export default Recommendations;