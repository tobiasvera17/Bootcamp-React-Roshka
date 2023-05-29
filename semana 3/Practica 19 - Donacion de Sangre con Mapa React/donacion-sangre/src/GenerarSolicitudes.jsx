import React from "react";
import Info from "./Info.jsx";

const GenerarSolicitudes = (props) => {
  const keys = Object.keys(props.peticion);
  return (
    <div
      id="main-container"
      className="d-flex flex-column container-fluid align-items-center p-0 m-0"
    >
      <div
        id="misSolicitudes-container"
        className="d-flex justify-content-center align-items-center"
      >
        Mis solicitudes <input id="check-misSolicitudes" type="checkbox" />
      </div>

      {keys.map((key, index) => {
        return <Info data={props.peticion[key]} idContainer={index} />;
      })}
    </div>
  );
};

export default GenerarSolicitudes;
