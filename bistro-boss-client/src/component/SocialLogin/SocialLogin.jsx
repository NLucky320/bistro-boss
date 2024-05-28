import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate=useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const userinfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userinfo)
                .then(res => {
                    // console.log(res.data)
                    navigate('/')
            })
        })
    }
    

    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn } className='btn bg-[#D1A054] text-white'>
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;