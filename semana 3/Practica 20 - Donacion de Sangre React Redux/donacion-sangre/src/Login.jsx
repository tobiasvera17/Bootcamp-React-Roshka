import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);

  const login = (event) => {
    event.preventDefault();

    if (!/\w+@\w+/.test(email)) {
      return toast.error("Por favor ingrese su email correctamente.");
    }

    if (password == "") {
      return toast.error("Por favor ingrese su contraseña.");
    }

    axios
      .post("http://192.168.16.90:8000/api/login/", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status == true) {
          // localStorage.setItem("token", response.data.token);
          dispatch({ type: "setToken", payload: response.data.token });
          navigate("/perfil");
          toast.success("Ingresó correctamente.");
        }
      })
      .catch((error) => {
        // console.log(error);
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
