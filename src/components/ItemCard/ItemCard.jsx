import React from 'react';
import salad from '../../assets/home/slide1.jpg';

const ItemCard = () => {
    return (
        <div className=" bg-gray-200 shadow-xl">
            <figure>
                <img src={salad} alt="Shoes" className="w-full h-[300px] object-cover" />
            </figure>
            <div className="card-body items-center text-black text-center">
                <h3 className="text-2xl font-semibold">Caeser Salad</h3>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <button className="bg-gray-300 text-yellow-600 font-medium uppercase rounded-lg border-b-2 border-yellow-600 px-6 py-3 mt-2">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ItemCard;