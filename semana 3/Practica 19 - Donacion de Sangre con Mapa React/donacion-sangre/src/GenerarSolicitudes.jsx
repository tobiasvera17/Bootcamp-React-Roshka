import React from "react";
import Info from "./Info";
import { useState } from "react";

let peticion = {};
$.ajax({
  dataType: "json",
  async: false,
  url: "http://192.168.16.90:8000/api/solicitudes",
  success: function (result) {
    peticion = result.data;
  },
});

const GenerarSolicitudes = () => {
  const [showSolicitudes, setShowSolicitudes] = useState(false);

  const toggle = () => {
    setShowSolicitudes(!showSolicitudes);
  };

  const keys = Object.keys(peticion);
  return (
    <div
      id="main-container"
      className="d-flex flex-column container-fluid align-items-center p-0 m-0"
    >
      <div id="solicitudes-header-container" className="d-flex container-fluid text-center p-3 m-0">
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
      <div
        id="misSolicitudes-container"
        className="d-flex justify-content-center align-items-center"
      >
        Mis solicitudes <input id="check-misSolicitudes" type="checkbox" />
      </div>

      {keys.map((key, index) => {
        return <Info data={peticion[key]} idContainer={index} />;
      })}
    </div>
  );
};

export default GenerarSolicitudes;
