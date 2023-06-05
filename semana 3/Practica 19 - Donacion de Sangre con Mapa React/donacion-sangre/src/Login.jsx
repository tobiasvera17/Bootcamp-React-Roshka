import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const togglePasswordfunction = (event) => {
    const togglePassword = event.target;

    const type =
      password.getAttribute("type") === "password" ? "text" : "password";

    password.setAttribute("type", type);
    togglePassword.classList.toggle("bi-eye");
  };

  const login = (event) => {
    event.preventDefault();

    if (!(/\w+@\w+/).test(email.value)) {
      return alert("Por favor ingrese su email correctamente.");
    }

    if (password.value == "") {
      return alert("Por favor ingrese su contraseña.");
    }

    axios
      .post("http://192.168.16.90:8000/api/login/", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        if (response.data.status == true) {
          localStorage.setItem("token", response.data.token);
          navigate("/perfil");
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        // console.log(error);
        alert(error.response.data.message);
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
        <div id="form-login" className="container-fluid ">
          <form>
            <div className="mb-3">
              <label htmlFor="user-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="user-email"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target)}
                required
              />
              <div id="emailHelp" className="form-text fw-normal">
                No compartiremos esta información con nadie más.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="user-password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="user-password"
                className="form-control"
                onChange={(e) => setPassword(e.target)}
                required
              />
              <i
                className="bi bi-eye-slash"
                id="togglePassword"
                onClick={(e) => togglePasswordfunction(e)}
              ></i>
            </div>
            <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
              <button
                type="submit"
                className="btn btn-danger"
                onClick={(e) => login(e)}
              >
                Iniciar Sesión
              </button>
              <Link to={"/registro"}>
                <button className="btn btn-link fw-bold text-danger">
                  Registrarse
                </button>
              </Link>
              <Link to={"/restablecer-contrasena"}>
                <button className="btn btn-link fw-bold text-danger">
                  Olvidaste tu contraseña?
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
