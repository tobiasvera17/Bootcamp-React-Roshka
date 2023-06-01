const InfoLocal = (props) => {
  return (
    <>
      <div
        id={"info-container-" + String(props.idContainer)}
        className="info-container d-flex flex-column justify-content-center align-items-center"
      >
        <div className="header-info-container container-fluid d-flex">
          <div className="title-header-info-container">
            {props.data.local_donacion}
          </div>
        </div>

        <div className="main-info-container container-fluid">
          <table className="table">
            <thead className="d-none">
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Horario</td>
                <td>
                  {props.data.hora_apertura != null
                    ? props.data.hora_apertura +
                      "hs. - " +
                      props.data.hora_cierre +
                      "hs."
                    : "N/D"}
                </td>
              </tr>
              <tr>
                <td>Dirección:</td>
                <td>
                  {props.data.direccion != null ? props.data.direccion : "N/D"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="footer-info-container container-fluid fw-bold row text-center">
          <div className="col">
            <a href="#" className="link link-danger">
              Ver más
            </a>
          </div>
          <div className="col">
            <a href="#" className="link link-danger">
              Ir
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoLocal;
