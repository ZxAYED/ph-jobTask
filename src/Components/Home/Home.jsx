import axios from "axios";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import Card from "./Card";
import { GoVerified } from "react-icons/go";

const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
       axios.get('/Api.json').then(res=>{ setData(res.data) })
    },[])
    
console.log(data);
    return (
        <div>
          <Banner></Banner>
          <div className="max-w-7xl  mx-auto">
            <h1 className="text-3xl flex justify-center gap-4 items-center text-[#565151]  font-bold text-center mt-20 mb-8 ">Who can benefit ? <GoVerified /></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {
            data.map(item=><Card item={item} key={item.category}>  </Card>)
          }</div>





          </div>

        </div>
    );
};

export default Home;