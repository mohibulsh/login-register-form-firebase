import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../provider/AuthProvider';

const Header = () => {
    const {user ,logOut}=useContext(authContext)
    const halderLogOut =() =>{
        logOut()
        .then(()=>{
            console.log('sing Out successfully')
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    return (
        <div>
         <div className="navbar bg-green-600 text-white">
         <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
            <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
            {
                user? <span>{user.email} <button onClick={halderLogOut} className="btn btn-xs ms-2">sign out</button></span>
                :<span> <Link to="/login">Login</Link></span>
            }
         </div>
        </div>
    );
};

export default Header;