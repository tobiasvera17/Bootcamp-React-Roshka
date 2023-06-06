import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index.js";

import App from "./App.jsx";
import GenerarMapaLocales from "./GenerarMapaLocales.jsx";
import GenerarSolicitudes from "./GenerarSolicitudes.jsx";
import Login from "./Login.jsx";
import Registro from "./Registro.jsx";
import RestablecerContrasena from "./RestablecerContrasena.jsx";
import Perfil from "./Perfil.jsx";
import CambiarPassword from "./CambiarPassword.jsx";
import Certificados from "./Certificados.jsx";
import GenerarCertificado from "./GenerarCertificado.jsx";
import GenerarSolicitud from "./GenerarSolicitud.jsx";
import EditarInformacion from "./EditarInformacion.jsx";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "mapa", element: <GenerarMapaLocales /> },
      { path: "solicitudes", element: <GenerarSolicitudes /> },
      { path: "generar-solicitud", element: <GenerarSolicitud /> },
      { path: "login", element: <Login /> },
      { path: "registro", element: <Registro /> },
      { path: "restablecer-contrasena", element: <RestablecerContrasena /> },
      { path: "perfil", element: <Perfil /> },
      { path: "cambiar-contrasena", element: <CambiarPassword /> },
      { path: "editar-informacion", element: <EditarInformacion /> },
      { path: "certificados", element: <Certificados /> },
      { path: "generar-certificado", element: <GenerarCertificado /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
