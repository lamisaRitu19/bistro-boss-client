import React from 'react';

const ItemCard = (item) => {
    const {name, image, price, recipe} = item;

    return (
        <div className="relative bg-gray-200 shadow-xl">
            <figure>
                <img src={image} alt="" className="w-full h-[300px] object-cover" />
            </figure>
            <p className='absolute top-4 right-4 bg-black/75 text-white text-lg font-semibold px-4 py-2'>$ {price}</p>
            <div className="card-body items-center text-black text-center">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p>{recipe}</p>
                <button className="bg-gray-300 text-yellow-600 font-medium uppercase rounded-lg border-b-2 border-yellow-600 px-6 py-3 mt-2">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ItemCard;