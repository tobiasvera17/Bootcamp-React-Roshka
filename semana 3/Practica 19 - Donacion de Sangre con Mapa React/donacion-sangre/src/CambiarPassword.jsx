import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CambiarPassword = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [old_password, setOld_Password] = useState(null)
  const [password, setPassword] = useState(null)
  const [password_confirmation, setPassword_Confirmation] = useState(null)

  const togglePasswordfunction = (event) => {
    const togglePassword = event.target;
    let passwordInput = {}

    if(togglePassword.id == "toggleOldPassword"){
      passwordInput = old_password  
    }
    else if(togglePassword.id == "togglePassword"){
      passwordInput = password
    }
    else{
      passwordInput = password_confirmation
    }

    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";

    passwordInput.setAttribute("type", type);
    togglePassword.classList.toggle("bi-eye");
  };

  const changePasswordfunction = (event) => {
    event.preventDefault();

    if (old_password.value == "") {
      return alert("Por favor ingrese su contraseña.");
    }

    if (password.value == "") {
      return alert("Por favor ingrese su nueva contraseña.");
    }

    if (password.value != password_confirmation.value) {
      return alert("Las contraseña nueva no coincide con la confirmación.");
    }

    axios
      .post(
        "http://192.168.16.90:8000/api/cambiar-password/",
        {
          old_password: old_password.value,
          password: password.value,
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
        // console.log(error)
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
              <label htmlFor="user-old_password" className="form-label">
                Contraseña anterior
              </label>
              <input
                type="password"
                id="user-old_password"
                className="form-control"
                onChange={(e) => setOld_Password(e.target)}
                required
              />
              <i
                className="bi bi-eye-slash"
                id="toggleOldPassword"
                onClick={(e) => togglePasswordfunction(e)}
              ></i>
            </div>

            <div className="mb-3">
              <label htmlFor="user-password" className="form-label">
                Contraseña nueva
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

            <div className="mb-3">
              <label htmlFor="user-password_confirmation" className="form-label">
                Confirmar contraseña nueva
              </label>
              <input
                type="password"
                id="user-password_confirmation"
                className="form-control"
                onChange={(e) => setPassword_Confirmation(e.target)}
                required
              />
              <i
                className="bi bi-eye-slash"
                id="togglePasswordConfirmation"
                onClick={(e) => togglePasswordfunction(e)}
              ></i>
            </div>

            <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
              <button
                type="submit"
                className="btn btn-danger"
                onClick={(e) => changePasswordfunction(e)}
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
