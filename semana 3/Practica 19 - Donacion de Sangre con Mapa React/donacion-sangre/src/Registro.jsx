import { useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();
  let today = new Date().toISOString().slice(0, 10);

  const gotoRoot = (event) => {
    event.preventDefault();
    const regex_ci = /[0-9]+/;

    let nombre = false;
    let apellido = false;
    let ci = false;
    let genero = false;
    let fecha_nacimiento = false;
    let email = false;
    let contrasena = false;

    if (document.querySelector("#user-name").value != "") {
      nombre = true;
    } else {
      alert("Debe ingresar el nombre correcctamente");
    }

    if (document.querySelector("#user-lastname").value != "") {
      apellido = true;
    } else {
      alert("Debe ingresar el apellido correctamente");
    }

    if (regex_ci.test(document.querySelector("#user-ci").value)) {
      ci = true;
    } else {
      alert("Debe ingresar la cédula de identidad correctamente");
    }

    if (document.querySelector("#user-gender").value != "") {
      genero = true;
    } else {
      alert("Debe ingresar el género correctamente");
    }

    if (document.querySelector("#user-birthday").value != "") {
      fecha_nacimiento = true;
    } else {
      alert("Debe ingresar la fecha de nacimiento correctamente");
    }

    if (document.querySelector("#user-email").value != "") {
      email = true;
    } else {
      alert("Debe ingresar el email correctamente");
    }

    if (
      document.querySelector("#user-password").value != "" &&
      document.querySelector("#user-passwordSecond").value != ""
    ) {
      if (
        document.querySelector("#user-password").value ===
        document.querySelector("#user-passwordSecond").value
      ) {
        contrasena = true;
      } else {
        alert("Las contraseñas no coinciden");
      }
    } else {
      alert("Debe ingresar las contraseñas correctamente");
    }

    if (
      nombre &&
      apellido &&
      ci &&
      genero &&
      fecha_nacimiento &&
      email &&
      contrasena
    ) {
      navigate("/");
    }
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
                className="btn btn-primary bg-danger border-danger"
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
