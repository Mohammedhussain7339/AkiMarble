import React from 'react'
import Navbar from './component/Navbar'
import Homepage from './component/Homepage';
import Blog from './component/Blog';
import About from './component/About'
import Contact from './component/Contact';
import Product from './component/Product';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Productpage from './component/Productpage';
import Footer from './component/Footer';
import Login from './Component1/Login';
import Signup from './Component1/Signup';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Homepage/></>
    },
    {
      path: "/Blog",
      element: <><Navbar/><Blog/></>
    },
    {
      path: "/Contact",
      element: <><Navbar/><Contact/></>
    },
    {
      path: "/About",
      element: <><Navbar/><About/></>
    },
    {
      path: "/Product",
      element: <><Navbar/><Product/></>
    },
    {
      path: "/Productpage",
      element: <><Navbar/><Productpage/></>
    },
    {
      path: "/Footer",
      element: <><Navbar/><Footer/></>
    },
    {
      path: "/Login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/Signup",
      element: <><Navbar/><Signup/></>
    }
    ]);
  

  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
