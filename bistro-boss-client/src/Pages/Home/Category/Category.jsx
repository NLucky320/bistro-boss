import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';



import slide1 from '../home/slide1.jpg'
import slide2 from '../home/slide2.jpg'
import slide3 from '../home/slide3.jpg'
import slide4 from '../home/slide4.jpg'
import slide5 from '../home/slide5.jpg'
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle   subHeading={'From 11:00am to 10:00pm'}
                heading={ 'ORDER ONLINE'}>
              
                
            </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-4"
      >
                <SwiperSlide><img src={slide1} alt="" />
                <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salads</h3></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /> <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Pizza</h3></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /> <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Soups</h3></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /> <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Deserts</h3></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /> <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salads</h3></SwiperSlide>
            
    
            </Swiper>
            </section>
    );
};

export default Category;