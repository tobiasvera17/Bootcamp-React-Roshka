import { useState } from "react";
import "./style.css";
import GenerarSolicitudes from "./GenerarSolicitudes";
import GenerarMapaLocales from "./GenerarMapaLocales";

function App() {
  const [showSolicitudes, setShowSolicitudes] = useState(false);

  let peticion = {};
  $.ajax({
    dataType: "json",
    async: false,
    url: "http://192.168.16.90:8000/api/solicitudes",
    success: function (result) {
      peticion = result.data;
    },
  });
  
  let locales = {}
  $.ajax({
    dataType: "json",
    async: false,
    url: "http://192.168.16.90:8000/api/locales",
    success: function (result) {
      locales = result.data;
    },
  });

  const toggle = () => {
    setShowSolicitudes(!showSolicitudes);
  };

  return (
    <>
      <div id="container" className="container-lg p-0 m-0 d-flex flex-column">
        <div
          id="header-container"
          className="d-flex container-fluid text-center"
        >
          <div id="solicitudes-header">Solicitudes</div>
          <div id="mas-button-container">
            <button
              id="btn-agregarSolicitud"
              onClick={() => toggle()}
              className="btn btn-link"
            >
              <i className="bi bi-plus-square-fill"></i>
            </button>
          </div>
        </div>
        {showSolicitudes == true ? (
          <GenerarSolicitudes peticion={peticion} />
        ) : (
          <GenerarMapaLocales locales={locales} />
        )}
      </div>
    </>
  );
}

export default App;
