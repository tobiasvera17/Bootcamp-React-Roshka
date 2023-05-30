import { useNavigate } from "react-router-dom";

const RestablecerContrasena = () => {
  const navigate = useNavigate();
  function goToRoot() {
    const regex = /\w+@\w/
    if(regex.test(document.getElementById('user-email').value))
    navigate("/");
    else
    alert("Por favor introduzca los datos requeridos correctamente.")
  }

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
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={goToRoot}
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
