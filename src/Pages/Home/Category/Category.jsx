import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='mb-14'>
            <SectionTitle heading={"Order Online"} subheading={"From 11:00am to 10:00pm"} textColor={"text-black"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-10"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" className='w-full' />
                    <h3 className='text-white text-3xl text-center uppercase -mt-16'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" className='w-full' />
                    <h3 className='text-white text-3xl text-center uppercase -mt-16 mb-16'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" className='w-full' />
                    <h3 className='text-white text-3xl text-center uppercase -mt-16'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" className='w-full' />
                    <h3 className='text-white text-3xl text-center uppercase -mt-16'>Cake</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" className='w-full' />
                    <h3 className='text-white text-3xl text-center uppercase -mt-16'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;