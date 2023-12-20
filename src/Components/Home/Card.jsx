import ButtonZ from "../Shared/ButtonZ";


const Card = ({item}) => {
    const {  category,title,description,benefits,image} =item


    return (
        

<div className="max-w-sm h-[650px] relative text-[#565151] hover:bg-[#F2F2F2] hover:transition-transform hover:scale-105 hover:duration-300 hover:ease-in-out bg-white border border-gray-200  p-6 rounded-lg shadow-2xl ">
    <a href="#">
        <img  className="rounded-lg h-[250px] object-cover" src={image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-4 text-2xl font-bold text-center tracking-tight  dark:text-white">{category}</h5>
        </a>
        <p className="mb-3  "><span className="font-bold">Description : </span>{description}</p>
        <p className="mb-3  "><span className="font-bold">Benefits : </span>{benefits}</p>
      
        <a href="#"  className="absolute bottom-5 w-fit left-[35%] right-[35%] ">
           <ButtonZ heading={' Read more'}><svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></ButtonZ>
             
        </a>
    </div>
</div>

    );
};

export default Card;