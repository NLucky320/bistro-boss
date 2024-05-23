import React from 'react';
import { FaCalendar, FaHome, FaList, FaShoppingCart, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { FcRating } from "react-icons/fc";
import { MdOutlinePayments, MdOutlineRestaurantMenu } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import useCart from '../Hooks/useCart';
const Dashboard = () => {
    const [cart] = useCart()
    const isAdmin = true;
    return (
        <div className='flex max-w-[1170px] mx-auto'>
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className='menu p-4'>
                    {
                        isAdmin ? <>
                                  <li>
                        < NavLink to="/dashboard/adminHome">
                           <FaHome></FaHome>
                          Admin Home
                        </NavLink>          
                    </li>
                      <li>
                        < NavLink to="/dashboard/reservation">
                        <FaCalendar></FaCalendar>
                Reservation
                        </NavLink>          
                    </li>
                      <li>
                        < NavLink to="/dashboard/payment">
                <MdOutlinePayments />
                  
              Payment History
                        </NavLink>          
                    </li>
                      <li>
                        < NavLink to="/dashboard/addItems">
                           <MdOutlineRestaurantMenu />
                 Add Items
                        </NavLink>          
                    </li>
                        <li>
                        < NavLink to="/dashboard/cart">
                             <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})
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
                         <FaCalendar></FaCalendar>
                            Manage Bookings
                        </NavLink>          
                    </li>
                    <li>
                        < NavLink to="/dashboard/users">
                         <FaUser></FaUser>
                          All Users
                        </NavLink>          
                    </li>
                        </> : <>
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
                     <li>
                        < NavLink to="/contact">
                  <IoIosContact />
                   Contact
                        </NavLink>          
                    </li>     
                        </>
                    }

                
                    
                  
                  
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