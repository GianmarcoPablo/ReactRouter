import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import ErroPage from './components/ErroPage'
import EditarCliente,{loader as editarClienteLoader,action as editarClienteAction} from './pages/EditarCliente'
import NuevoCliente,{action as nuevoClienteAction} from './pages/NuevoCliente'
import Index,{loader as clientesLoader} from './pages/Index'
import {action as eliminarClienteAction} from './components/Cliente'

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
        action: nuevoClienteAction,
        errorElement: <ErroPage/>
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente/>,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErroPage/>
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: eliminarClienteAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
