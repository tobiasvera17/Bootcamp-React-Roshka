import axios from "axios";
import { useNavigate } from "react-router-dom";

const CambiarPassword = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const togglePasswordfunction = () => {
    const togglePassword = document.querySelector("#togglePassword");

    const password = document.querySelector("#user-password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";

    password.setAttribute("type", type);
    togglePassword.classList.toggle("bi-eye");
  };

  const togglePasswordfunctionNew = () => {
    const togglePassword = document.querySelector("#togglePasswordNew");

    const password = document.querySelector("#user-passwordNew");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";

    password.setAttribute("type", type);
    togglePassword.classList.toggle("bi-eye");
  };

  const togglePasswordfunctionNewSecond = () => {
    const togglePassword = document.querySelector("#togglePasswordNewSecond");

    const password = document.querySelector("#user-passwordNewSecond");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";

    password.setAttribute("type", type);
    togglePassword.classList.toggle("bi-eye");
  };

  const changePassword = () => {
    event.preventDefault();
    const old_password = document.getElementById("user-password").value;
    const password = document.getElementById("user-passwordNew").value;
    const password_confirmation = document.getElementById(
      "user-passwordNewSecond"
    ).value;

    if (old_password == "") {
      return alert("Por favor ingrese su contraseña.");
    }

    if (password == "") {
      return alert("Por favor ingrese su nueva contraseña.");
    }

    if (password != password_confirmation) {
      return alert("Las contraseña nueva no coincide con la confirmación.");
    }

    axios
      .post(
        "http://192.168.16.90:8000/api/cambiar-password/",
        {
          old_password: old_password,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status == true) {
          localStorage.removeItem("token");
          alert(response.data.message);
          navigate("/login");
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
        <div id="form-restablecer" className="container-fluid ">
          <form>
            <div className="mb-3">
              <label htmlFor="user-password" className="form-label">
                Contraseña anterior
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
              <label htmlFor="user-passwordNew" className="form-label">
                Contraseña nueva
              </label>
              <input
                type="password"
                id="user-passwordNew"
                className="form-control"
                required
              />
              <i
                className="bi bi-eye-slash"
                id="togglePasswordNew"
                onClick={togglePasswordfunctionNew}
              ></i>
            </div>

            <div className="mb-3">
              <label htmlFor="user-passwordNewSecond" className="form-label">
                Confirmar contraseña nueva
              </label>
              <input
                type="password"
                id="user-passwordNewSecond"
                className="form-control"
                required
              />
              <i
                className="bi bi-eye-slash"
                id="togglePasswordNewSecond"
                onClick={togglePasswordfunctionNewSecond}
              ></i>
            </div>

            <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
              <button
                type="submit"
                className="btn btn-danger"
                onClick={changePassword}
              >
                Cambiar contraseña
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CambiarPassword;
