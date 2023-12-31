import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home.jsx';
import CategoryProducts from "../src/Component/CategoryProducts.jsx";
import ProductList from './Component/ProductList.jsx';
import AboutSection from './Component/AboutSection.jsx';
import ContactPage from './Component/ContactPage.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/Products",
        element:<ProductList></ProductList>,
      },
      {
        path:"/About",
        element: <AboutSection></AboutSection>,
      },
      {
        path:"/Contact",
        element: <ContactPage></ContactPage>,
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)