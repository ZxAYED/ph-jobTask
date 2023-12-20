
import { useState, useEffect } from 'react';
const Banner = () => {
 



const images = [
  
  'https://static.vecteezy.com/system/resources/previews/024/927/824/non_2x/police-officers-in-uniform-patrol-city-streets-at-night-generated-by-ai-free-photo.jpg',
  'https://media.istockphoto.com/id/1249400249/photo/american-policeman-and-police-car-in-the-background.jpg?s=612x612&w=0&k=20&c=atpUrdu4jjN51UfwAHP7hGXap6bQBJRgDap3a00AQYk=',
  'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/WxGe3vLYJ8cNT1dQ1_8H4nr3DgM=/960x0/filters:focal(2235x2315:2245x2305)/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/GADWVSS3NPQLLSQMUIHZXHCR4Q.jpg',
];



  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); //


    return () => clearInterval(interval);
  }, []);
     return (
       <div>
       <div className="relative w-full h-[70vh]  mb-10 ">
         {images.map((image, index) => (
           <div
             key={index}
             className={`absolute w-full h-full transition-opacity  duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
               }`}
           >
             <img
               src={image}
               alt={`Slide ${index}`}
               className="w-full h-full object-fit rounded-lg"
             />
             <div className='absolute top-0 md:pl-20 md:pt-10 flex flex-col  left-0 h-full xl:w-1/2 bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)   p-6'>
                <h1 className=' text-xl  md:text-2xl  lg:text-5xl font-bold text-white py-2'>
                Optimize Law Enforcement Operations with TaskGuard Pro
                </h1>
                <p className='text-white lg:text-lg py-2 md:pb-5 md:pt-5 '>Elevate your agency's efficiency and collaboration with TaskGuard Pro – a cutting-edge task management platform designed for law enforcement professionals. Streamline case management, enhance communication, and ensure seamless coordination within your team. Experience the power of precision and security as you safeguard your community with TaskGuard Pro.</p>
                <div className='flex md:mt-6 mt-2 justify-center   '>
                
                <button className=" btn btn-outline text-white" >Let's Explore </button></div>
             </div>
           </div>
         ))}
         </div>
       </div>
     );
   };










export default Banner;