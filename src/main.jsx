import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Contato from "./pages/Contato"
import Sobre_mim from "./pages/Sobre_mim"
import Projetos from "./pages/Projetos"
import PageNotFound from "./pages/PageNotFound"
import Home from "./pages/Home"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index:true, element: <Home/>},
      {path:'/contato', element: <Contato/>},
      {path:'/sobre-mim', element: <Sobre_mim/>},
      {path:'/projetos', element: <Projetos/>},
      {path: '*', element:<PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
