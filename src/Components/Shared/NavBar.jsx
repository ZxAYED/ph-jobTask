import { Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Headroom from "react-headroom";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import ButtonZ from "./ButtonZ";
import { AuthContext } from "../Authentication/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const NavBar = () => {
const {user,  logOut } =useContext(AuthContext)
const navigate= useNavigate()
const {photoURL,displayName} =user || ''
const navLinks=<>
<div className="flex flex-col   bg-[#001f3f] rounded-lg p-4  lg:flex-row gap-6">
<NavLink to='/' className="hover:scale-110 hover:transition-transform hover:duration-400  font-semibold text-lg hover:text-[#CCCCCC] hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-500 hover:to-blue-300 hover:text-transparent hover:bg-clip-text  " > Home  </NavLink>
{
  user &&<NavLink to='/dashboard' className=" hover:scale-110 hover:transition-transform hover:duration-400 font-semibold text-lg hover:text-[#CCCCCC] hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-500 hover:to-blue-300 hover:text-transparent hover:bg-clip-text " > DashBoard  </NavLink>
}

<NavLink to='/' className="hover:scale-110 hover:transition-transform hover:duration-400  font-semibold text-lg hover:text-[#CCCCCC] hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-500 hover:to-blue-300 hover:text-transparent hover:bg-clip-text " > Cases  </NavLink>
<NavLink to='/' className="hover:scale-110 hover:transition-transform hover:duration-400  font-semibold text-lg hover:text-[#CCCCCC] hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-500 hover:to-blue-300 hover:text-transparent hover:bg-clip-text " > Reports  </NavLink>
<NavLink to='/' className="hover:scale-110 hover:transition-transform hover:duration-400  font-semibold text-lg hover:text-[#CCCCCC] hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-500 hover:to-blue-300 hover:text-transparent hover:bg-clip-text " > Teams  </NavLink>
</div>

</>
 
      
          return (
            <Headroom>
  

            <div className=" bg-[#001f3f]  text-white">
                <div className="max-w-7xl  navbar p-0 mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                  {navLinks}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 text-transparent bg-clip-text text-xl md:text-3xl font-bold  ">
  TaskGuard Pro
</div>
            </div>
            <div className="navbar-center  hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
           {navLinks}
              </ul>
            </div>
            <div className="navbar-end ">
            {
              user?<div className="dropdown  dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                <img className="" src={photoURL} alt="" />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#001f3f] rounded-box w-52">
                <li>
                  <a className=" hover:bg-blue-900 ">Name :<span className="uppercase"> {displayName}</span>
                 
                 
                  </a>
                </li>
                <li><button onClick={()=>  logOut().then(
                 
                  toast.success('log Out Successfull', {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    }),
                   <Navigate to='/'></Navigate>
                )
                
                
                } className="hover:bg-blue-900 ">Logout</button></li>
              </ul>
            </div>
           :   <Link to='/Login'><ButtonZ heading={'Log In' }></ButtonZ> </Link>
            }
          
            </div>
       
            </div>
          </div></Headroom>
          
          );
        
  
  
};

export default NavBar;