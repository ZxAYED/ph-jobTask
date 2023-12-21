import React from 'react'
import ReactDOM from 'react-dom/client'
import { extendTheme } from '@chakra-ui/react'
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Components/Authentication/Login';
import AuthProvider from './Components/Authentication/AuthProvider.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Components/Authentication/Register.jsx';
import Dashboard from './Components/DashBoard/Dashboard.jsx';
import CreateTask from './Components/DashBoard/CreateTask.jsx';
import TaskManageMent from './Components/DashBoard/TaskManageMent.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
      {
        path:'/Register',
        element:<Register/>
      },
    ]
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element:<CreateTask></CreateTask>,
      },
      {
        path:'/dashboard/ManageTask',
        element:<TaskManageMent/>,
      },
    ]
  }
]);

// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }

// const theme = extendTheme({ colors })
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
  <ChakraProvider>
  {/* theme={theme} */}
 
   <RouterProvider router={router} />
   </ChakraProvider>
   </AuthProvider>
  </React.StrictMode>,
)
