import React from 'react';
import ItemCard from '../../../components/ItemCard/ItemCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-3 gap-12 mt-10 mb-24'>
                        {
                            items.map(item => <ItemCard key={item._id} name={item.name} image={item.image} price={item.price} recipe={item.recipe}></ItemCard>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default OrderTab;