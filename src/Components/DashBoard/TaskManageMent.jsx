import SecTionTItle from "../Shared/SecTionTItle";
import { BsListTask } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscTasklist } from "react-icons/vsc";
import { MdOutlineAddTask } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@chakra-ui/react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useContext, } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'



// isPending,isLoading, isError, error 
const TaskManageMent = () => {


  const handleDrop =()=>{
    console.log('kela');
  }
  const axiosPublic = useAxiosPublic()
  const { user } = useContext(AuthContext)

  const { data: items = [], refetch, isPending, isLoading, error, isError } = useQuery({
    queryKey: ['email', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks?email=${user?.email}`)
      return res.data
    },
  })


  if (isPending || isLoading) {
    return <span><Skeleton></Skeleton></span>
  }
  if (isError) {
    return console.log(error.message)
  }
  const handleDelete = id => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/:${id}`)
          .then(res => {
            refetch()
            if (result.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })

      }
    });


  }




  return (
    <div >
      <SecTionTItle name={' Task Harmony Hub'} des={'Effortlessly organize, prioritize, and collaborate on tasks with our intuitive task management platform. Experience seamless efficiency with drag-and-drop functionality, empowering you to effortlessly navigate your workflow and achieve unparalleled productivity'}></SecTionTItle>
      <DragDropContext onDragEnd={handleDrop}>
      <div className="flex flex-wrap mx-10 gap-10 ">
        <section>
          <div className="overflow-x-auto">
            <h1 className="text-xl font-bold rounded-xl w-fit p-2 my-3 text-white flex items-center gap-2 bg-[#FF4500] ">
              <BsListTask /> To Do tasks
            </h1>

            <Droppable droppableId="root1" type="group">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <table className="table">
                    <thead className="text-lg text-center">
                      <tr>
                        <th>Index</th>
                        <th>Title</th>
                        <th className="">Description</th>
                        <th>Deadlines</th>
                        <th>Priority</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <Draggable key={item._id} draggableId={item._id} index={index}>
                          {(provided) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-[#4B0082] text-white rounded-2xl"
                            >
                              <th className="font-bold">{index + 1}</th>
                              <td>
                                <div className="flex items-center font-semibold gap-1">{item.title}</div>
                              </td>
                              <td>{item.description}</td>
                              <td>{item.deadline}</td>
                              <td>{item.priority}</td>
                              <th>
                                <button
                                  onClick={() => handleDelete(item._id)}
                                  className="btn bg-[#FF4500] text-lg px-4 border-none shadow-lg"
                                >
                                  <RiDeleteBin6Line />
                                </button>
                              </th>
                            </tr>
                          )}
                        </Draggable>
                      ))}
                    </tbody>
                  </table>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </section>
          <section>
            <div className="overflow-x-auto">
              <h1 className="text-xl font-bold rounded-xl w-fit p-2 my-3 text-white flex items-center gap-2 bg-[#FFD700]  " > <VscTasklist />On Going Tasks</h1>
              <table className="table">

                <thead className="text-lg text-center">
                  <tr>
                    <th>Index</th>
                    <th>Title</th>
                    <th className="">Description</th>
                    <th>Deadlines</th>
                    <th>Priority</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="bg-[#2F4F4F] min-h-[50vh] text-white rounded-2xl">

                  <tr>
                    <th className="font-bold">
                      1
                    </th>
                    <td>
                      <div className="flex items-center font-semibold  gap-1">

                        Lorem ipsum dolor sit amet.

                      </div>
                    </td>
                    <td className="">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quas cumque delectus quibusdam fugiat sunt, voluptas temporibus ullam quos, qui necessitatibus omnis facilis accusantium ad. Quia recusandae quos vitae? Aspernatur?


                    </td>
                    <td className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, consequuntur!</td>
                    <td className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, consequuntur!</td>
                    <th>
                      <button className="btn bg-[#FF4500] text-lg px-4 border-none shadow-lg"> <RiDeleteBin6Line /></button>
                    </th>
                  </tr>

                </tbody>


              </table>
            </div>
          </section>
          <section>
            <div className="overflow-x-auto  mb-20" >
              <h1 className="text-xl font-bold rounded-xl w-fit p-2 my-3 text-white flex items-center gap-2 bg-[#4CAF50] " > <MdOutlineAddTask /> Completed Task</h1>
              <table className="table">

                <thead className="text-lg text-center">
                  <tr>
                    <th>Index</th>
                    <th>Title</th>
                    <th className="">Description</th>
                    <th>Deadlines</th>
                    <th>Priority</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="bg-[#4B0082]  min-h-[50vh] text-white rounded-2xl">

                  <tr>
                    <th className="font-bold">
                      1
                    </th>
                    <td>
                      <div className="flex items-center font-semibold  gap-1">

                        Lorem ipsum dolor sit amet.

                      </div>
                    </td>
                    <td className="">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quas cumque delectus quibusdam fugiat sunt, voluptas temporibus ullam quos, qui necessitatibus omnis facilis accusantium ad. Quia recusandae quos vitae? Aspernatur?


                    </td>
                    <td className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, consequuntur!</td>
                    <td className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, consequuntur!</td>
                    <th>
                      <button className="btn bg-[#FF4500] text-lg px-4 border-none shadow-lg"> <RiDeleteBin6Line /></button>
                    </th>
                  </tr>

                </tbody>


              </table>
            </div>
          </section>




        </div></DragDropContext>
    </div>
  );
};

export default TaskManageMent;