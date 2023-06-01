import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let type = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];

const GenerarSolicitud = () => {
  const [locales, setLocales] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const generarSolicitud = (event) => {
    event.preventDefault(event);

    const nombre_apellido_donatario = document.getElementById(
      "nombre_apellido_donatario"
    ).value;
    const cedula_donatario = document.getElementById("cedula_donatario").value;
    const tipo_sangre = document.getElementById("tipo_sangre").value;
    const establecimiento = document.getElementById("establecimiento").value;
    const volumenes_necesarios = document.getElementById(
      "volumenes_necesarios"
    ).value;
    const fecha_limite = document.getElementById("fecha_limite").value;
    const telefono_contacto =
      document.getElementById("telefono_contacto").value;
    const solicitud = document.getElementById("solicitud").value;

    if (nombre_apellido_donatario == "") {
      return alert("Por favor ingrese el nombre y apellido correctamente.");
    }

    if (cedula_donatario == "") {
      return alert("Por favor ingrese el número de cédula correctamente.");
    }

    if (tipo_sangre == "") {
      return alert("Por favor ingrese el tipo de sangre correctamente.");
    }

    if (establecimiento == "") {
      return alert("Por favor ingrese el establecimiento correctamente.");
    }

    if (volumenes_necesarios == "") {
      return alert("Por favor ingrese el volumen correctamente.");
    }

    if (fecha_limite == "") {
      return alert("Por favor ingrese la fecha límite correctamente.");
    }

    if (telefono_contacto == "") {
      return alert("Por favor ingrese el teléfono correctamente.");
    }

    if (fecha_limite == "") {
      return alert("Por favor ingrese la fecha límite correctamente.");
    }

    axios
      .post(
        "http://192.168.16.90:8000/api/solicitudes/",
        {
          solicitud: solicitud,
          fecha_limite: fecha_limite,
          volumenes_necesarios: volumenes_necesarios,
          nombre_apellido_donatario: nombre_apellido_donatario,
          cedula_donatario: cedula_donatario,
          telefono_contacto: telefono_contacto,
          tipo_sangre: Number(tipo_sangre),
          establecimiento: establecimiento,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status == "200") {
          alert("Solicitud generada correctamente.");
          navigate("/solicitudes");
        } else {
          alert("No se pudo generar el certificado\n" + response.message);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("http://192.168.16.90:8000/api/locales/")
      .then((response) => {
        setLocales(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {locales && (
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
                <h4>Generar Solicitud</h4>
              </div>
              <div id="img-header-login">
                <i className="bi bi-clipboard-heart-fill"></i>
              </div>
            </div>
            <div id="form-login" className="container-fluid ">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="nombre_apellido_donatario"
                    className="form-label"
                  >
                    Nombre y Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre_apellido_donatario"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="cedula_donatario" className="form-label">
                    Cédula
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="cedula_donatario"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="tipo_sangre" className="form-label">
                    Tipo de sangre
                  </label>
                  <select id="tipo_sangre" className="form-select" required>
                    <option value="">Seleccione una opción</option>
                    {type.map((item, index) => {
                      return (
                        <option key={index} value={index + 1}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="establecimiento" className="form-label">
                    Establecimiento
                  </label>
                  <select id="establecimiento" className="form-select" required>
                    <option value="">Seleccione una opción</option>
                    {locales.map((item) => {
                      return (
                        <option key={item.id} value={item.local_donacion}>
                          {item.local_donacion}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="volumenes_necesarios" className="form-label">
                    Volumen
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="volumenes_necesarios"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="fecha_limite" className="form-label">
                    Fecha límite
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="fecha_limite"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="telefono_contacto" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="telefono_contacto"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="solicitud" className="form-label">
                    Descripción
                  </label>
                  <textarea className="form-control" id="solicitud"></textarea>
                </div>

                <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={generarSolicitud}
                  >
                    Generar Solicitud
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

export default GenerarSolicitud;
