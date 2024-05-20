import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
       <div className="card  bg-base-100 shadow-xl">
  <figure className="p-4">
    <img src={image} alt="food" className="rounded-xl" />
            </figure>
            <p className='bg-[#BB8506] text-white absolute right-0 mr-4 mt-4 px-4'>${price}</p>
  <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn text-[#BB8506] bg-black hover:bg-white border-0 border-b-2 border-[#BB8506]">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;