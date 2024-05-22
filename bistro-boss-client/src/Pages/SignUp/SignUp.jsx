import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const SignUp = () => {
const {createUser}=useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
        })
  }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Signup now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
                            <input type="text" {...register("name",  { required: true })} placeholder="name" className="input input-bordered" />
                                 {errors.name && <p className="text-red-600">This field is required</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
                            <input type="email"  {...register("email",  { required: true })} placeholder="email" className="input input-bordered"  />
                                 {errors.email && <p className="text-red-600">This field is required</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
                            <input type="password"  {...register("password",  { required: true, minLength:6, maxLength: 20,  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/  })} placeholder="password" className="input input-bordered"  />
                              {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#D1A054] text-white">Sign Up</button>
        </div>
                    </form>
                        <p className='px-4 pb-4'><small>Already have an account? please <Link to='/login'> Login</Link></small></p>
    </div>
  </div>
            </div>
        </>
    );
};

export default SignUp;