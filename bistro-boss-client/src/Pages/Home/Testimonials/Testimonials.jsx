import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')  
            .then(res => res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <div className='my-12'>
            <SectionTitle heading={'TESTIMONIALS'}
                subHeading={'What Our Clients Say'}
            ></SectionTitle>
            <div>
                <Swiper        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        
                    {
                        reviews.map(review => <SwiperSlide key={review._id}  >
                            <div className='flex flex-col items-center gap-4 m-24'>
                                <Rating style={{ maxWidth: 300 }} value={review.rating}  readOnly />

                                <p>
                                    {review.details}
                                </p>
                                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
       }
   
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;