import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import SecTionTItle from '../Shared/SecTionTItle';
import { AuthContext } from '../Authentication/AuthProvider';
import 'react-calendar/dist/Calendar.css';
import { FaBookDead } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { useState } from 'react';
import { MdOutlineLowPriority } from "react-icons/md";
import Calendar from 'react-calendar';
import { PiSubtitlesDuotone } from "react-icons/pi";
import Btnz from '../Shared/Btnz';
const CreateTask = () => {
    const {user} =useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data) 
    
    
    
    }
   
    return (
        <div className='mx-5 xl:mx-20 pb-20 '>
            <SecTionTItle name='Craft Your Next Achievement' des='Dive into productivity and start your journey to success by creating tasks with ease. Our "Craft Your Next Achievement" section allows you to define, organize, and prioritize your goals effortlessly. Seamlessly tailor tasks to your workflow, ensuring nothing gets overlooked. Take charge of your progress and turn aspirations into accomplishments with the simple yet powerful task creation features at your fingertips. Your path to success begins here.'></SecTionTItle>

            <div className="mx-auto ">
                <div className="flex  flex-col-reverse items-center xl:flex-row-reverse">
                    <div className="flex flex-col justify-center flex-1">
                        <form onSubmit={handleSubmit(onSubmit)}>

                         
                         
<section className="shadow-xl pt-5 xl:pt-0  rounded-2xl">
 
        <div className="p-4   flex   flex-wrap rounded-lg border-t-2 font-semibold">
            <div className= "mx-auto  ">
                <div className="flex  justify-start lg:justify-between gap-4  flex-wrap items-center ">
                    <a href="#" className="relative block">
                        <img alt="profil" src={user?.photoURL} className="mx-auto object-cover rounded-full h-16 w-16 "/>
                    </a>
                    <h1 className=" uppercase">
                        {user?.displayName}
                    </h1>
                    <h1 className=" ">
                      Email :  {user?.email}
                    </h1>
                </div>
            </div>
        </div>
        <div className="space-y-6 ">
            
            <div className=" w-full px-4  pt-6   md:inline-flex md:space-y-0">
                <h2 className="max-w-sm flex items-center gap-2 mx-auto md:w-1/3">
                <PiSubtitlesDuotone />  Task Title 
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input type="text" {...register("title")} id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#001f3f]  focus:border-transparent" placeholder="Task Title "/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className=" w-full px-4  md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3 flex items-center gap-2">
                    <TbFileDescription />  Description 
                    </h2>
                    <div className="max-w-sm mx-auto md:w-2/3">
                        <div>
                            <div className=" relative ">
                                <input type="text"{...register("description")} className=" rounded-lg border-transparent flex-1 appearance-none border h-20 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#001f3f]  focus:border-transparent" placeholder="Description"/>
                                </div>
                            </div>
                            <div>
                              
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className=" w-full px-4  md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3 flex items-center gap-2">
                    <FaBookDead />   Deadline
                    </h2>
                    <div className="max-w-sm mx-auto  md:w-2/3">
                        <div>
                            <div className=" relative ">
                                <input type="date"{...register("deadline")} className=" rounded-lg border-transparent flex-1 appearance-none border h-20 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#001f3f]  focus:border-transparent" placeholder="Deadline"/>
                                </div>
                            </div>
                            <div>
                            <hr/>
                                </div>
                                
                            </div>
                        </div>
                            <hr/>
                            <div className='   px-4  pt-6 flex items-center md:space-y-0'>  
                            <label className="max-w-sm mx-auto flex gap-2 items-center md:w-1/3"> <MdOutlineLowPriority /> Task Priority</label>
                            <select className='rounded-lg  border-transparent appearance-none border border-gray-300 max-w-sm mx-auto  md:w-2/3  bg-white  shadow-sm text-base ' {...register("gender")}>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                           
                                <hr />
                            </div>
                            <div className=" mx-auto py-5 w-fit">
                                <Btnz  type="submit" heading={'Sumbit'}></Btnz>
                            </div>
                        </div>
               
                </section>




                          
                            
                        </form>

                    </div>
                    <div className="flex  justify-center ">
                        <div className="flex flex-col items-end ">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-68 w-36 sm:w-52 xl:w-56"
                                src="https://ninjaas.com/cdn/shop/products/project-management.gif?v=1660197004"
                                alt=""
                            />
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-52 sm:w-32 xl:w-48"
                                src="https://cdn1.byjus.com/wp-content/uploads/blog/2022/02/11204239/Time-management.gif"
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/36ddd276339625.5c66944c27cd5.gif"  
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default CreateTask;