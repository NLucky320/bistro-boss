import  { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
    const [disabled, setDisabled]=useState(true)

  const from = location?.state?.pathname || '/';
  
const {signIn}=useContext(AuthContext)

    useEffect(() => {
     loadCaptchaEnginge(6); 
},[])

    const handleLogin = event => {
        event.preventDefault;
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result=>{
          const user = result.user;
          console.log(user)
        Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
              alert('Captcha Does Not Match');
        }
}

    return (
      <>
           <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col  md:flex-row">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
                            <input type="email" placeholder="email" name="email"
                                className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
  <LoadCanvasTemplate />
          </label>
                            <input type="text" onBlur={handleValidateCaptcha }  placeholder="type the captcha above" name='captcha' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
                            
                            <input  disabled={disabled} className="btn bg-[#D1A054] text-white " type="submit" name="" id="" value='Login' />
        </div> 
            </form>
            <p className='px-4 pb-4'><small>New Here? please <Link to='/signup'> SignUp</Link></small></p>
    </div>
  </div>
</div>
      </>
    );
};

export default Login;