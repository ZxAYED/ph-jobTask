

const SecTionTItle = ({name,des}) => {
    return (
        <div className="py-10 ">
            <h1 className="text-3xl font-bold text-center italic">{name}</h1>
            <div className="divider my-2"></div>
            <p className="text-center text-lg mx-10 ">{des}</p>
            <div className="divider my-2 "></div>
        </div>
    );
};

export default SecTionTItle;