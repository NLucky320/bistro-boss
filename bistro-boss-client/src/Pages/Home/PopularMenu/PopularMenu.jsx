import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {

const [menu, setMenu]=useState([])

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const populatItems=data.filter(item=>item.category==='popular')
            setMenu(populatItems)
        })
},[setMenu])

    return (
        <div className='mb-12'>
              <SectionTitle subHeading={'Check it out'}
                heading={ 'FROM OUR MENU'}>
            </SectionTitle>
            <div className='grid gris-cols-1 md:grid-cols-2 gap-8'>
                {
                    menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
                
            </div>
            <div className=' text-center pt-4'>
                      <button className='btn btn-outline  border-0 border-b-2 mt-4'>View Full Menu</button>
                </div>
        </div>
    );
};

export default PopularMenu;