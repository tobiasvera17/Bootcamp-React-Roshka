// import { useNavigate } from "react-router-dom";
const Registro = () => {
  let today = new Date().toISOString().slice(0, 10);
  const gotoRoot = () => {
    // const navigate = useNavigate();
    console.log(document.querySelector("#user-gender").value)
    
  };

  const togglePasswordfunction = () => {
    const togglePassword = document.querySelector("#togglePassword");

    const password = document.querySelector("#user-password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";

    password.setAttribute("type", type);
    togglePassword.classList.toggle("bi-eye");
  };

  const togglePasswordfunctionSecond = () => {
    const togglePassword = document.querySelector("#togglePasswordSecond");

    const password = document.querySelector("#user-passwordSecond");
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
        <div id="form-registro" className="container-fluid ">
          <form>
            <div className="mb-3">
              <label htmlFor="user-email" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="user-name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="user-email" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="user-lastname"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="user-email" className="form-label">
                Cedula de Identidad
              </label>
              <input
                type="number"
                className="form-control"
                id="user-ci"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="user-email" className="form-label">
                Género
              </label>
              <select id="user-gender" className="form-select" required>
                <option value="">Seleccione una opción</option>
                <option value="H">Masculino</option>
                <option value="M">Femenino</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="user-email" className="form-label">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                className="form-control"
                id="user-birthday"
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

            <div className="mb-3">
              <label htmlFor="user-passwordSecond" className="form-label">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="user-passwordSecond"
                className="form-control"
                required
              />
              <i
                className="bi bi-eye-slash"
                id="togglePasswordSecond"
                onClick={togglePasswordfunctionSecond}
              ></i>
            </div>

            <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={gotoRoot}
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
