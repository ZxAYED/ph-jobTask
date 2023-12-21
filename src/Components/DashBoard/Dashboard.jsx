import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { FaTasks } from "react-icons/fa";
import { MdManageSearch } from "react-icons/md";
const Dashboard = () => {
    return (
        <div className=" md:grid md:grid-cols-12   ">
            <section className="md:col-span-4 xl:col-span-2 bg-[#001f3f] md:min-h-screen  text-center min-h-[70vh] text-white pt-5 pb-10 md:mb-0"> 
            <p className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 text-transparent bg-clip-text text-xl md:text-3xl font-bold pb-16 ">
  TaskGuard Pro
</p> 
        <div className="flex items-center flex-col gap-4">
            <h1 className="flex text-2xl font-bold justify-center items-center gap-2"><MdOutlineSpaceDashboard />User Dashboard</h1>
            <div className=" ">

            <NavLink to='/' className="hover:scale-110 hover:transition-transform hover:duration-400  font-semibold text-lg hover:text-[#CCCCCC] flex  justify-start items-center gap-2 btn hover:bg-gradient-to-r  bg-[#001f3f]  text-white hover:from-blue-800 hover:via-blue-500 my-5 hover:to-blue-300  hover:text-transparent hover:bg-clip-text  " > <TiHomeOutline /> Home  </NavLink>
            <NavLink to='/dashboard' className="hover:scale-110 hover:transition-transform hover:duration-400  font-semibold text-lg hover:text-[#CCCCCC] flex  justify-start items-center gap-2 btn hover:bg-gradient-to-r  bg-[#001f3f]  text-white hover:from-blue-800 hover:via-blue-500 my-5 hover:to-blue-300  hover:text-transparent hover:bg-clip-text  " > <FaTasks /> Create a task  </NavLink>
          
            <NavLink to='/dashboard/ManageTask' className="hover:scale-110 hover:transition-transform hover:duration-400 bg-[#001f3f]  text-white btn font-semibold text-lg hover:text-[#CCCCCC] flex  justify-start items-center gap-2 hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-500 hover:to-blue-300 hover:text-transparent hover:bg-clip-text  " > <MdManageSearch /> Task Management  </NavLink>
            </div> 
            </div>
            
            </section>
            <section className="md:col-span-8 xl:col-span-10 bg-[#F5F5F5]"> <Outlet></Outlet>
            </section>
          
        </div>
    );
};

export default Dashboard;