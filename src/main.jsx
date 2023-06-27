import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import ErroPage from './components/ErroPage'
import NuevoCliente,{action as nuevoClienteAction} from './pages/NuevoCliente'
import Index,{loader as clientesLoader} from './pages/Index'
import Hola from './components/Hola'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErroPage/>
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente/>,
        action: nuevoClienteAction
      },
      {
        path: "/ejemplo/nuevo",
        element: <Hola/>,
        action: nuevoClienteAction
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
