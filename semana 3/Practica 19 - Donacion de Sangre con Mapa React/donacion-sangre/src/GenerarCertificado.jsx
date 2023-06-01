import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GenerarCertificado = () => {
  const [datos, setDatos] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    axios
      .get("http://192.168.16.90:8000/api/locales/")
      .then((response) => {
        setDatos(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const generarCertificado = (event) => {
    event.preventDefault();

    const fecha_donacion = document.querySelector("#fecha_donacion").value;
    const local_donacion = document.querySelector("#local_donacion").value;

    if (fecha_donacion == "") {
      return alert("Por favor ingrese una fecha de donación.");
    }

    if (local_donacion == "") {
      return alert("Por favor ingrese un local de donación.");
    }

    axios
      .post(
        "http://192.168.16.90:8000/api/certificados",
        {
          fecha_donacion: "2022-06-01",
          local_donacion_id: 1,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data)
        if (response.data.status == true) {
            alert("Certificado generado correctamente.");
            navigate("/certificados")
          }
          else{
              alert("No se pudo generar el certificado\n" + response.data.message)
          }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {datos && (
        <div
          id="main-container"
          className="d-flex flex-column container-fluid align-items-center p-4 m-0"
        >
          <div id="main-container-login" className="container-fluid fw-bold">
            <div
              id="header-login"
              className="container-fluid d-flex flex-column p-0 m-0 align-items-center justify-content-center"
            >
              <div id="title-header-login">
                <h4>Generar Certificado</h4>
              </div>
              <div id="img-header-login">
                <i className="bi bi-clipboard-heart-fill"></i>
              </div>
            </div>
            <div id="form-restablecer" className="container-fluid ">
              <form>
                <div className="mb-3">
                  <label htmlFor="fecha_donacion" className="form-label">
                    Fecha de donación
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="fecha_donacion"
                    max={today}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="local_donacion" className="form-label">
                    Centro de donación:
                  </label>
                  <select id="local_donacion" className="form-select" required>
                    <option value="">Seleccione una opción</option>
                    {datos.map((item) => {
                      return (
                        <option key={item.id} value={item.id}>
                          {item.local_donacion}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={generarCertificado}
                  >
                    Generar Certificado
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GenerarCertificado;
