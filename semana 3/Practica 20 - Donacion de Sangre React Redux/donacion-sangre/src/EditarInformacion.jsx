import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

  const generos = [
    ["H", "Masculino"],
    ["M", "Femenino"],
  ];

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
          name: name,
          surname: surname,
          email: email,
          fecha_nacimiento: fecha_nacimiento,
          sexo: sexo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status == true) {
          alert(response.data.message);
          navigate("/perfil");
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert(error.data.message);
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
              <form>
                <div className="table-responsive">
                  <table className="table p-0 m-0">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-bold text-end">Nombre:</td>
                        <td className="text-start">
                          <p
                            contentEditable
                            suppressContentEditableWarning
                            id="name"
                            onBlur={(e) => setName(e.target.innerHTML)}
                          >
                            {name}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold text-end">Apellido:</td>
                        <td className="text-start">
                          <p
                            contentEditable="true"
                            id="surname"
                            onBlur={(e) => setSurname(e.target.innerHTML)}
                          >
                            {surname}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold text-end">Email:</td>
                        <td className="text-start">
                          <p
                            contentEditable="true"
                            id="email"
                            onBlur={(e) => setEmail(e.target.innerHTML)}
                          >
                            {email}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold text-end">
                          Fecha de nacimiento:
                        </td>
                        <td className="text-start">
                          <input
                            type="date"
                            value={fecha_nacimiento}
                            onChange={(e) =>
                              setFecha_Nacimiento(e.target.value)
                            }
                            max={today}
                            id="fecha_nacimiento"
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold text-end">Género:</td>
                        <td className="text-start">
                          <select
                            id="sexo"
                            onChange={(e) => setSexo(e.target.value)}
                          >
                            {generos.map((item, key) => {
                              if (datos.sexo == item[0]) {
                                return (
                                  <option key={key} value={item[0]} selected>
                                    {item[1]}
                                  </option>
                                );
                              }
                              return (
                                <option key={key} value={item[0]}>
                                  {item[1]}
                                </option>
                              );
                            })}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={editarInformacion}
                  >
                    Editar Información
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
