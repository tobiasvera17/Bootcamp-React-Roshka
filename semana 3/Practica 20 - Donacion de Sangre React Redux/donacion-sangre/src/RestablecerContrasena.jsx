import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

const RestablecerContrasena = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const restablecerContrasenaFunction = (event) => {
    event.preventDefault();
    const regex = /\w+@\w/;

    if (!regex.test(email)) {
      return toast.error(
        "Por favor introduzca los datos requeridos correctamente."
      );
    }

    axios
      .post("http://192.168.16.90:8000/api/reset-password/", {
        email,
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          navigate("/login");
          toast.success(response.data.message);
        }
      })
      .catch(() => {
        toast.error("Ocurrió un error, por favor inténtelo de nuevo.");
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
              <label htmlFor="user-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="user-email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
              <button
                type="submit"
                className="btn btn-danger"
                onClick={(e) => restablecerContrasenaFunction(e)}
              >
                Restablecer Contraseña
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestablecerContrasena;
