import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const EditarInformacion = () => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [fecha_nacimiento, setFecha_Nacimiento] = useState("");
  const [sexo, setSexo] = useState("");

  const token = useSelector((state) => state.token);
  let today = new Date().toISOString().slice(0, 10);

  const editarInformacion = (event) => {
    event.preventDefault();
    const regexEmail = /\w+@\w+/;

    if (name == "") {
      return alert("Por favor ingrese su nombre.");
    }

    if (surname == "") {
      return alert("Por favor ingrese su apellido.");
    }

    if (!regexEmail.test(email)) {
      return alert("Por favor ingrese su email correctamente.");
    }

    if (fecha_nacimiento == "") {
      alert("Por favor ingrese su fecha de nacimiento.");
    }

    if (sexo == "") {
      alert("Por favor ingrese su sexo.");
    }

    axios
      .post(
        "http://192.168.16.90:8000/api/editar-perfil/",
        {
          name,
          surname,
          email,
          fecha_nacimiento,
          sexo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status == true) {
          toast.success(response.data.message);
          navigate("/perfil");
        }
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  useEffect(() => {
    axios
      .get("http://192.168.16.90:8000/api/user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setDatos(response.data);
        setName(response.data.name);
        setSurname(response.data.surname);
        setEmail(response.data.email);
        setFecha_Nacimiento(response.data.fecha_nacimiento);
        setSexo(response.data.sexo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {datos && (
        <div
          id="main-container"
          className="d-flex flex-column container-fluid align-items-center justify-content-center p-4 m-0"
        >
          <div
            id="main-container-login"
            className="container-fluid fw-bold d-flex flex-column justify-content-center align-items-center"
          >
            <div
              id="header-login"
              className="container-fluid d-flex flex-column p-0 m-0 align-items-center justify-content-center"
            >
              <div id="title-header-login">
                <h4>Editar Información</h4>
              </div>
              <div id="img-header-login">
                <i className="bi bi-clipboard-heart-fill"></i>
              </div>
            </div>
            <div
              id="form-login"
              className="container-fluid justify-content-center align-items-center p-0 m-0"
            >
              <form onSubmit={editarInformacion}>
                <div className="mb-3">
                  <label htmlFor="user-name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="user-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="user-surname" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="user-surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="user-sexo" className="form-label">
                    Género
                  </label>
                  <select
                    id="user-sexo"
                    className="form-select"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    required
                  >
                    <option disabled value="">
                      Seleccione una opción
                    </option>
                    <option value="H">Masculino</option>
                    <option value="M">Femenino</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="user-fecha_nacimiento" className="form-label">
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="user-fecha_nacimiento"
                    value={fecha_nacimiento}
                    onChange={(e) => setFecha_Nacimiento(e.target.value)}
                    max={today}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="user-email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="user-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div id="emailHelp" className="form-text fw-normal">
                    No compartiremos esta información con nadie más.
                  </div>
                </div>

                <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
                  <button type="submit" className="btn btn-danger">
                    Editar información
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

export default EditarInformacion;
