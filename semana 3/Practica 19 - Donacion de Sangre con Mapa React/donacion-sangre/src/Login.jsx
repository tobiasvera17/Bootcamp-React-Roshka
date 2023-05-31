import { Link } from "react-router-dom";

const Login = () => {
  const togglePasswordfunction = () => {
    const togglePassword = document.querySelector("#togglePassword");

    const password = document.querySelector("#user-password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";

    password.setAttribute("type", type);
    togglePassword.classList.toggle("bi-eye");
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
                required
              />
              <i
                className="bi bi-eye-slash"
                id="togglePassword"
                onClick={togglePasswordfunction}
              ></i>
            </div>
            <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
              <button type="submit" className="btn btn-primary bg-danger border-danger">
                Iniciar Sesión
              </button>
              <Link to={"/registro"}>
                <button className="btn btn-link fw-bold text-danger">Registrarse</button>
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
