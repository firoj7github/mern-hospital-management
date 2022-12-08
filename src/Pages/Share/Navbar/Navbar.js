import React, { useEffect } from 'react'
import { $ } from 'react-jquery-plugin';
import './Navbar.css'
import img from '../../../image/400.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../src/firebase.init.js'
import { useSignOut } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

 const Navbar = () => {
  const [user] =useAuthState(auth);
  const logout=()=>{
    signOut(auth);
  }

  useEffect(()=>{
  $(window).on('scroll',function(){
    if($(window).scrollTop()){
      $('nav').addClass('white');
      
    }
    else{
      $('nav').removeClass('white');
     
    }
  })
  },[]);
  return (
    <nav className="navbar navbar-size">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl navbar-image">
    <img  src={img} alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal ul-size">
     
      <Link to="/"><li><a>Home</a></li></Link>
      <Link to="/appionment"><li><a>Appionment</a></li></Link>
      {
        user? <li><a onClick={logout}>Signout</a></li>  : <Link to="/login"><li><a>Login</a></li></Link>
      }
      
      <Link to="/signup"><li><a>Signup</a></li></Link>
      
      
    </ul>
  </div>
 
</nav>
  )
}
export default Navbar;