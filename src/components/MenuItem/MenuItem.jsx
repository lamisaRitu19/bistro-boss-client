import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;

    return (
        <div className='flex space-x-6 mb-8'>
            <img src={image} alt="" style={{borderRadius: '0 200px 200px 200px'}} className='w-24' />
            <div className='text-left'>
                <h3 className='text-black text-xl uppercase'>{name}----------</h3>
                <p className='text-gray-500'>{recipe}</p>
            </div>
            <p className='text-yellow-500 text-xl'>${price}</p>
        </div>
    );
};

export default MenuItem;