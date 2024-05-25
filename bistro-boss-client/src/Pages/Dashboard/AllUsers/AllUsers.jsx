 import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const res = await axiosSecure.get('/users'
          //, {
            // headers: {
            //   authorization: `bearer ${localStorage.getItem('access-token')}`
            //   }
            // }
          );
            return res.data
        }
    })
    const handleMakeAdmin = user => {
      axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
          console.log(res.data)
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${user.name} is an admin now!`,
  showConfirmButton: false,
  timer: 1500
});
          }
      })
}

    const handleDeleteUser = user => {
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
      axiosSecure.delete(`/users/${user._id}`)
          .then(res => {
              if (res.data.deletedCount > 0) {
                  refetch();
               Swal.fire({
      title: "Deleted!",
      text: "User has been deleted.",
      icon: "success"
      });
          }
      })
  }
});
    }
    return (
        <div>
             <div className="flex justify-evenly my-4">
            <h2 className="text-2xl"> All users</h2>
            <h2 className="text-2xl"> Total users: { users.length}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
    
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
                        {
                            users.map((user, index)=>   <tr key={user._id}>
        <th>
       {index+1}
        </th>
        <td>
         {user.name}
        </td>
        <td>
 {user.email}
        </td>
                                <td>
                                {
                                  user.role==='admin'? 'Admin' :  <button onClick={()=>handleMakeAdmin(user)} className="btn bg-[#D1A054] text-white btn-xs"><FaUser /></button>
                 }
                       
        </td>
        <th>
          <button onClick={()=>handleDeleteUser(user)} className="btn bg-[#B91C1C] text-white btn-xs"><MdDelete /></button>
        </th>
      </tr>)
   }
    </tbody>
   
    
  </table>
</div>
       </div>
    );
};

export default AllUsers;