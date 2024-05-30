import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const AdminHome = () => {
    const {user}=useAuth()
    return (
        <div>
            <h2>
                <span>Hi, Welcome</span>
                 {
                user?.disPlayName? user.disPlayName: 'Back'
            }
           </h2>
        </div>
    );
};

export default AdminHome;