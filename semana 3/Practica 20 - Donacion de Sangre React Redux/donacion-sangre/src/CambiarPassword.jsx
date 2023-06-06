import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CambiarPassword = () => {
  const navigate = useNavigate();
  const [old_password, setOld_Password] = useState(null);
  const [password, setPassword] = useState(null);
  const [password_confirmation, setPassword_Confirmation] = useState(null);
  const [toggleOld_Password, setToggleOld_Password] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [togglePassword_Confirmation, setTogglePassword_Confirmation] =
    useState(false);
  const token = useSelector((state) => state.token);

  const changePasswordFunction = (event) => {
    event.preventDefault();

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
              <label htmlFor="user-password" className="form-label">
                Contraseña
              </label>
              <input
                type={toggleOld_Password ? "text" : "password"}
                id="user-old_password"
                className="form-control"
                onChange={(e) => setOld_Password(e.target.value)}
                required
              />
              <i
                className={toggleOld_Password ? "bi bi-eye-slash" : "bi-eye"}
                id="toggleOld_Password"
                onClick={() => setToggleOld_Password(!toggleOld_Password)}
              ></i>
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
                Contraseña
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
                id="togglePassword_Confirmation"
                onClick={() =>
                  setTogglePassword_Confirmation(!togglePassword_Confirmation)
                }
              ></i>
            </div>

            <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
              <button
                type="submit"
                className="btn btn-danger"
                onClick={(e) => changePasswordFunction(e)}
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
