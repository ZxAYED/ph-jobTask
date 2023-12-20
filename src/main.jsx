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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
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
  <ChakraProvider>
  {/* theme={theme} */}
  
   <RouterProvider router={router} />
   </ChakraProvider>
  </React.StrictMode>,
)
