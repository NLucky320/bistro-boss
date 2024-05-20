import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, coverImg, text, title}) => {
    return (
        <div className='pt-10 '>
            {title &&  <Cover img={coverImg} title={title} text={text}></Cover>}
               <div className='grid gris-cols-1 md:grid-cols-2 gap-8 mt-10'>
                {
                    items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
               
            </div>

            <Link to={`/order/${title}`}>
                  <div className=' text-center pt-4'>
                    <button className='btn btn-outline  border-0 border-b-2 mt-4'>ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </Link>
             
        </div>
    );
};

export default MenuCategory;