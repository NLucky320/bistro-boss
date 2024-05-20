import React from 'react';
import FoodCard from '../../component/Shared/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                              {
                            items.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                            }
                              </div>
        </div>
    );
};

export default OrderTab;