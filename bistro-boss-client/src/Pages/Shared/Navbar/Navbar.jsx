
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../Hooks/useCart';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [cart] =useCart()
  const handleLogout = () => {
    logOut()
      .then(() => {
      
      })
      .catch(error => {
      console.log(error)
    })
  }

    const navList = <>
    
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Menu</Link></li>
    <li><Link to='/order/salad'>Order Food</Link></li>
      <li><Link to='/'>
        <button className="btn bg-[#D1A054] text-white">
<FaShoppingCart />
          <div className="badge ">+{cart.length}</div>
</button>
      </Link>
  </li>
      {
        user ? <>
          
          <button onClick={handleLogout} className='btn bg-[#D1A054] text-white '>LogOut</button>
        </> :
          <>
              <li><Link to='/login'>Login</Link></li>
          </>
   }
    
    </>
    return (
      <>
     
            <div className="navbar max-w-6xl  fixed z-10 bg-black text-white bg-opacity-30">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {navList}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro-Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navList}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#D1A054] text-white ">Get Started</a>
  </div>
</div>
        </>
    );
};

export default Navbar;