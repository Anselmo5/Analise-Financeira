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
import Login from '../components/Login';
import Cadastro from '../components/Cadastro';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "grafico",
    element: <Grafico/>,
  },

  {
    path:"login",
    element:<Login/>
  },

  {
    path:"cadastro",
    element:<Cadastro/>
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
