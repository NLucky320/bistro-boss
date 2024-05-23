import React from 'react';
import useCart from '../../../Hooks/useCart';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure=useAxiosSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const handleDelete = id => {
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
      axiosSecure.delete(`/carts/${id}`)
          .then(res => {
              if (res.data.deletedCount > 0) {
                  refetch();
               Swal.fire({
      title: "Deleted!",
      text: "Your food has been deleted.",
      icon: "success"
      });
          }
      })
  }
});
}


    return (
        <div className=''>
            <div className='flex justify-between'>
                <h2 className='text-3xl font-bold'>Items: {cart.length}</h2>
                <h2 className='text-2xl font-bold'>Total Price: ${totalPrice}</h2>
                <button className='btn bg-[#D1A054] text-white'>Pay</button>
            </div>
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className=' bg-[#D1A054] text-white'>
        <th>
        #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((item, index)=>   <tr key={item._id}>
        <th>
         {index+1}
        </th>
        <td>
       
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                      <img src={ item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
         
        </td>
        <td>
         {item.name}
        </td>
        <td> ${item.price} </td>
        <th>
          <button onClick={()=>handleDelete(item._id)} className="btn bg-[#D1A054] text-white btn-xs"><MdDelete /></button>
        </th>
      </tr> )}
     
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default Cart;