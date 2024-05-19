import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

import featuredImg from '../home/featured.jpg'
import  './Featured.css'


const Featured = () => {
    return (
        <div className='featured-item bg-fixed bg bg-cover text-white my-20'>
            <div className='pt-8 '>
                 <SectionTitle heading={'check it out'} subHeading={'FROM OUR MENU'}>

            </SectionTitle>
           </div>
            <div className='md:flex justify-center items-center pt-12 py-20 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 text-white space-y-4'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4 border-white text-white'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;