import  { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
const Login = () => {
    const captchaRef = useRef()
    const [disabled, setDisabled]=useState(true)

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
        })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
              alert('Captcha Does Not Match');
        }
}

    return (
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
                            <input type="text" ref={captchaRef} placeholder="type the captcha above" name='captcha' className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'> Validate</button>
     
        </div>
        <div className="form-control mt-6">
                            
                            <input  disabled={disabled} className="btn bg-[#D1A054] text-white " type="submit" name="" id="" value='Login' />
        </div> 
            </form>
            <p className='px-4 pb-4'><small>New Here? please <Link to='/signup'> SignUp</Link></small></p>
    </div>
  </div>
</div>
    );
};

export default Login;