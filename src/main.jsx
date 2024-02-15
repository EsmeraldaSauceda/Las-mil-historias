import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages/Home.jsx';
import Pagos from './components/Pagos.jsx';
import Perfil from './components/Perfil.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "Pagos",
    element: <Pagos/>,
  },
  {
    path: "Perfil",
    element: <Perfil/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)