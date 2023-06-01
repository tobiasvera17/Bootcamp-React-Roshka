import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import GenerarMapaLocales from "./GenerarMapaLocales.jsx";
import GenerarSolicitudes from "./GenerarSolicitudes.jsx";
import Login from "./Login.jsx";
import Registro from "./Registro.jsx";
import RestablecerContrasena from "./RestablecerContrasena.jsx";
import Perfil from "./Perfil.jsx";
import Certificados from "./Certificados.jsx";
import GenerarCertificado from "./GenerarCertificado.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "mapa", element: <GenerarMapaLocales /> },
      { path: "solicitudes", element: <GenerarSolicitudes /> },
      { path: "login", element: <Login /> },
      { path: "/registro", element: <Registro /> },
      { path: "/restablecer-contrasena", element: <RestablecerContrasena /> },
      { path: "/perfil", element: <Perfil/> },
      { path: "/certificados", element: <Certificados/> },
      { path: "/generar-certificado", element: <GenerarCertificado/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
