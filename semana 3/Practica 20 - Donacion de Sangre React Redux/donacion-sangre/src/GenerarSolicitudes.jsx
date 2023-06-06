import Info from "./Info";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const GenerarSolicitudes = () => {
  const [datos, setDatos] = useState(null);
  const [misDatos, setMisDatos] = useState(false);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (!misDatos && token == null) {
      axios
        .get("http://192.168.16.90:8000/api/solicitudes")
        .then((response) => {
          setDatos(response.data.data);
        })
        .catch((error) => console.log(error));
    } else if (misDatos && token != null) {
      axios
        .get("http://192.168.16.90:8000/api/solicitudes-protegido", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setDatos(response.data.data);
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .get("http://192.168.16.90:8000/api/solicitudes")
        .then((response) => {
          setDatos(response.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [misDatos, token]);

  return (
    <>
      {datos && (
        <div
          id="main-container"
          className="d-flex flex-column container-fluid align-items-center p-0 m-0"
        >
          <div
            id="solicitudes-header-container"
            className="d-flex container-fluid text-center p-3 m-0 align-items-center justify-content-center text-danger"
          >
            <div
              id="agregarSolicitud-container"
              className={
                token == null
                  ? "d-none"
                  : "" + "d-flex justify-content-center align-items-center"
              }
            >
              <Link to="/generar-solicitud">
                <button
                  id="btn-agregarSolicitud"
                  className="btn btn-link text-danger"
                >
                  Agregar Solicitud <i className="bi bi-plus-square-fill"></i>
                </button>
              </Link>
            </div>

            <div
              id="misSolicitudes-container"
              className={
                token == null
                  ? "d-none"
                  : "" + "d-flex justify-content-center align-items-center"
              }
            >
              Mis solicitudes{" "}
              <input
                id="check-misSolicitudes"
                type="checkbox"
                onChange={() => setMisDatos(!misDatos)}
              />
            </div>
          </div>

          {datos.map((item, index) => {
            return <Info data={item} idContainer={index} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default GenerarSolicitudes;
