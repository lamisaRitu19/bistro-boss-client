import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div className=''>
            <Banner className=''></Banner>
            <div className='max-w-screen-2xl mx-auto'>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;