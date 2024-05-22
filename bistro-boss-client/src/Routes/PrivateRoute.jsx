import React, { useContext, useLayoutEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../component/loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location =useLocation()
    
    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;