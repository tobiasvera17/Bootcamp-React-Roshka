import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const Perfil = () => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState(null);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://192.168.16.90:8000/api/user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDatos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cerrarSesion = () => {
    Swal.fire({
      title: "Desea cerrar su sesión?",
      icon: "warning",
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar Sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "nullToken" });
        navigate("/login");
        toast.success("Se ha cerrado su sesión.");
      }
    });
  };

  return (
    <>
      {datos && (
        <div
          id="main-container"
          className="d-flex flex-column container-fluid align-items-center p-4 m-0"
        >
          <div id="main-container-login">
            <div
              id="header-login"
              className="container-fluid d-flex flex-column p-0 m-0 align-items-center justify-content-center"
            >
              <div id="img-header-login">
                <i className="bi bi-person-circle"></i>
              </div>
              <div id="title-header-login">
                <h4>{datos.name + " " + datos.surname}</h4>
              </div>
            </div>
            <div
              id="form-login"
              className="container-fluid d-flex flex-column justify-content-center align-items-center"
            >
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold text-end">Fecha de nacimiento:</td>
                      <td className="text-start">{datos.fecha_nacimiento}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-end">Email:</td>
                      <td className="text-start">{datos.email}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-end">Última vez donado:</td>
                      <td className="text-start">
                        {datos.ult_vez_donado ? datos.ult_vez_donado : "N / D"}
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-end">Género:</td>
                      <td className="text-start">
                        {datos.sexo == "H" ? "Masculino" : "Femenino"}
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-end">C.I.:</td>
                      <td className="text-start">{datos.nro_cedula}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link to="/editar-informacion" className="btn btn-danger">
                Editar información
              </Link>
              <Link to="/cambiar-contrasena" className="btn btn-danger">
                Cambiar contraseña
              </Link>
              <button className="btn btn-danger" onClick={cerrarSesion}>
                Cerrrar Sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Perfil;
