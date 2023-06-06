import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const GenerarSolicitud = () => {
  let type = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
  const navigate = useNavigate();
  const [locales, setLocales] = useState("");
  const [nombre_apellido_donatario, setNombre_Apellido_Donatario] =
    useState("");
  const [cedula_donatario, setCedula_Donatario] = useState("");
  const [tipo_sangre, setTipo_Sangre] = useState("");
  const [establecimiento, setEstablecimiento] = useState("");
  const [volumenes_necesarios, setVolumenes_Necesarios] = useState("");
  const [fecha_limite, setFecha_Limite] = useState("");
  const [telefono_contacto, setTelefono_Contacto] = useState("");
  const [solicitud, setSolicitud] = useState("");
  const token = useSelector((state) => state.token);

  const generarSolicitud = (event) => {
    event.preventDefault(event);

    if (nombre_apellido_donatario == "") {
      return alert("Por favor ingrese el nombre y apellido correctamente.");
    }

    if (!/\d+/.test(cedula_donatario)) {
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
    0;
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
          alert("No se pudo generar la solicitud\n" + response.data.message);
        }
      })
      .catch((error) => {
        alert(
          "No se pudo generar la solicitud.\n" + error.response.data.message
        );
      });
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
                    onChange={(e) =>
                      setNombre_Apellido_Donatario(e.target.value)
                    }
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
                    onChange={(e) => setCedula_Donatario(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="tipo_sangre" className="form-label">
                    Tipo de sangre
                  </label>
                  <select
                    id="tipo_sangre"
                    className="form-select"
                    onChange={(e) => setTipo_Sangre(e.target.value)}
                    required
                  >
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
                  <select
                    id="establecimiento"
                    className="form-select"
                    onChange={(e) => setEstablecimiento(e.target.value)}
                    required
                  >
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
                    onChange={(e) => setVolumenes_Necesarios(e.target.value)}
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
                    onChange={(e) => setFecha_Limite(e.target.value)}
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
                    onChange={(e) => setTelefono_Contacto(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="solicitud" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    className="form-control"
                    id="solicitud"
                    onChange={(e) => setSolicitud(e.target.value)}
                  ></textarea>
                </div>

                <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={(e) => generarSolicitud(e)}
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
