import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GenerarMapaLocales from './GenerarMapaLocales.jsx'
import GenerarSolicitudes from './GenerarSolicitudes.jsx'

const router = createBrowserRouter([
  {path:'', element: <App/>, children: [
    {path:'mapa', element: <GenerarMapaLocales/>},
    {path:'solicitudes', element: <GenerarSolicitudes/>},
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
