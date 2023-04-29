import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../provider/AuthProvider';

const Login = () => {
  const {loginUser}=useContext(authContext)
    const handlerLogin =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email =form.email.value; 
        const password =form.password.value; 
        loginUser(email,password)
        .then(result=>{
          const logginUser =result.user;
          console.log(logginUser)
        })
        .catch(error=>{
          console.log(error.message)
        })
    }
    return (
  <form onSubmit={handlerLogin} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Login!</h1>   
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' required placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <small>Are you new here Please
            <Link to='/register'><button className="btn btn-active btn-link">Register</button></Link>
        </small>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</form>
    );
};

export default Login;