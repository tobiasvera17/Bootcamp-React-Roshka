import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './index.css'
import App from './components/App.tsx'
import Index from './components/Index.tsx';
import Mapa from './components/Mapa.tsx';
import Publicar from './components/Publicar.tsx';
import Colaborar from './components/Colaborar.tsx';
import Terminos from './components/Terminos.tsx';

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "index", element: <Index /> },
      { path: "mapa", element: <Mapa /> },
      { path: "publicar", element: <Publicar /> },
      { path: "colaborar", element: <Colaborar /> },
      { path: "terminos", element: <Terminos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
