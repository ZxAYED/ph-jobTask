import { Outlet } from "react-router-dom";
import NavBar from './../Shared/NavBar';
import Footer from './../Shared/Footer';
import { Button } from "@chakra-ui/react";


const Root = () => {
    return (
        <div className="bg-[#F5F5F5] min-h-screen">
            <NavBar></NavBar>
       
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;