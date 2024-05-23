import React from 'react';
import { FaCalendar, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { FcRating } from "react-icons/fc";
import { MdOutlineRestaurantMenu } from "react-icons/md";
const Dashboard = () => {
    return (
        <div className='flex max-w-[1170px] mx-auto'>
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className='menu p-4'>

                      <li>
                        < NavLink to="/dashboard/userHome">
                           <FaHome></FaHome>
                          User Home
                        </NavLink>          
                    </li>
                      <li>
                        < NavLink to="/dashboard/reservation">
                       <FaCalendar></FaCalendar>
                     Reservation
                        </NavLink>          
                    </li>
                        <li>
                        < NavLink to="/dashboard/cart">
                             <FaShoppingCart></FaShoppingCart>
                            My Cart
                        </NavLink>          
                    </li>
                      <li>
                        < NavLink to="/dashboard/review">
                     <FcRating />
            Review
                        </NavLink>          
                    </li>
                
                    <li>
                        < NavLink to="/dashboard/bookings">
                             <FaList></FaList>
                            My Bookings
                        </NavLink>          
                    </li>
                    <div className='divider'>

                    </div>
                     <li>
                        < NavLink to="/">
                           <FaHome></FaHome>
                          Home
                        </NavLink>          
                    </li>
                     <li>
                        < NavLink to="/menu">
                           <MdOutlineRestaurantMenu />
                      Menu
                        </NavLink>          
                    </li>
                  
</ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet>

                </Outlet>
            </div>
        </div>
    );
};

export default Dashboard;