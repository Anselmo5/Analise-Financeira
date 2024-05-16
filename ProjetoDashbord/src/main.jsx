import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from './App.jsx'
import Grafico from '../components/Grafico';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "grafico",
    element: <Grafico/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
