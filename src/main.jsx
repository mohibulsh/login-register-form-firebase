import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './components/Layout/Main.jsx';
import Home from './components/Layout/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './components/Layout/Login.jsx';
import Register from './components/Layout/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
 </AuthProvider>
)
