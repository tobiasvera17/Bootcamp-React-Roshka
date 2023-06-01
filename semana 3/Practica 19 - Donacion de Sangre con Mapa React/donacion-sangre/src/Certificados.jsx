import { useEffect, useState } from "react";
import axios from "axios";
import InfoCertificado from "./InfoCertificado";
import { Link } from "react-router-dom";

const Certificados = () => {
  const [datos, setDatos] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://192.168.16.90:8000/api/certificados?desc=1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDatos(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
              className="d-flex justify-content-center align-items-center"
            >
              <Link to={"/generar-certificado"}>
                <button
                  id="btn-agregarCertificado"
                  className="btn btn-link text-danger"
                >
                  Agregar Certificado <i className="bi bi-plus-square-fill"></i>
                </button>
              </Link>
            </div>
          </div>

          {datos.map((item, index) => {
            return (
              <InfoCertificado data={item} idContainer={index} key={index} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Certificados;
