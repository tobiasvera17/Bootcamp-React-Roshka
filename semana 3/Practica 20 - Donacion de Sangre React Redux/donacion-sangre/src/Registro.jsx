import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Registro = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nro_cedula, setNro_Cedula] = useState("");
  const [sexo, setSexo] = useState("");
  const [fecha_nacimiento, setFecha_Nacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_Confirmation] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const [togglePassword_Confirmation, setTogglePassword_Confirmation] =
    useState(false);
  let today = new Date().toISOString().slice(0, 10);

  const registroFunction = (event) => {
    event.preventDefault();
    if (name == "") {
      return toast.error("Debe ingresar el nombre correctamente");
    }

    if (surname == "") {
      return toast.error("Debe ingresar el apellido correctamente");
    }

    if (!/\d+/.test(nro_cedula)) {
      return toast.error("Debe ingresar la cédula de identidad correctamente");
    }

    if (sexo == "") {
      return toast.error("Debe ingresar el género correctamente");
    }

    if (fecha_nacimiento == "") {
      return toast.error("Debe ingresar la fecha de nacimiento correctamente");
    }

    if (!/\w+@\w+/.test(email)) {
      return toast.error("Debe ingresar el email correctamente");
    }

    if (password == "") {
      return toast.error("Debe ingresar las contraseñas correctamente.");
    }

    if (password != password_confirmation) {
      return toast.error("Las contraseñas no coinciden.");
    }

    axios
      .post("http://192.168.16.90:8000/api/registro/", {
        name,
        surname,
        password,
        email,
        fecha_nacimiento,
        sexo,
        nro_cedula,
      })
      .then((response) => {
        if (response.data.status == true) {
          dispatch({ type: "setToken", payload: response.data.token });
          navigate("/perfil");
          toast.success("Registrado correctamente.");
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
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
            <h4>Donación de Sangre Paraguay</h4>
          </div>
          <div id="img-header-login">
            <i className="bi bi-clipboard-heart-fill"></i>
          </div>
        </div>
        <div id="form-registro" className="container-fluid ">
          <form>
            <div className="mb-3">
              <label htmlFor="user-name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="user-name"
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
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="user-ci" className="form-label">
                Cedula de Identidad
              </label>
              <input
                type="number"
                className="form-control"
                id="user-ci"
                onChange={(e) => setNro_Cedula(e.target.value)}
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
                onChange={(e) => setSexo(e.target.value)}
                required
              >
                <option value="">Seleccione una opción</option>
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
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div id="emailHelp" className="form-text fw-normal">
                No compartiremos esta información con nadie más.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="user-password" className="form-label">
                Contraseña
              </label>
              <input
                type={togglePassword ? "text" : "password"}
                id="user-password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i
                className={togglePassword ? "bi bi-eye-slash" : "bi-eye"}
                id="togglePassword"
                onClick={() => setTogglePassword(!togglePassword)}
              ></i>
            </div>

            <div className="mb-3">
              <label
                htmlFor="user-password_confirmation"
                className="form-label"
              >
                Confirmar Contraseña
              </label>
              <input
                type={togglePassword_Confirmation ? "text" : "password"}
                id="user-password_confirmation"
                className="form-control"
                onChange={(e) => setPassword_Confirmation(e.target.value)}
                required
              />
              <i
                className={
                  togglePassword_Confirmation ? "bi bi-eye-slash" : "bi-eye"
                }
                id="togglePassword"
                onClick={() =>
                  setTogglePassword_Confirmation(!togglePassword_Confirmation)
                }
              ></i>
            </div>

            <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
              <button
                type="submit"
                className="btn btn-danger"
                onClick={(e) => registroFunction(e)}
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
