const InfoCertificado = (props) => {
  return (
    <>
      <div
        id={"info-container-" + String(props.idContainer)}
        className="info-container d-flex flex-column justify-content-center align-items-center container-fluid"
      >
        <div className="header-info-container container-fluid d-flex container-fluid">
          <div className="title-header-info-container">
            Certificado de Donación
          </div>
        </div>

        <div className="main-info-container container-fluid table-responsive">
          <table className="table">
            <thead className="d-none">
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Establecimiento</td>
                <td className="text-end fw-bold">
                  {props.data.local_donacion != null
                    ? props.data.local_donacion
                    : "N/D"}
                </td>
              </tr>
              <tr>
                <td>Apellido:</td>
                <td className="text-end fw-bold">
                  {props.data.user.surname != null
                    ? props.data.user.surname
                    : "N/D"}
                </td>
              </tr>
              <tr>
                <td>Nombre:</td>
                <td className="text-end fw-bold">
                  {props.data.user.name != null ? props.data.user.name : "N/D"}
                </td>
              </tr>
              <tr>
                <td>Género:</td>
                <td className="text-end fw-bold">
                  {props.data.user.sexo != null
                    ? props.data.user.sexo == "H"
                      ? "Masculino"
                      : "Femenino"
                    : "N / D"}
                </td>
              </tr>
              <tr>
                <td>Número de cédula:</td>
                <td className="text-end fw-bold">
                  {props.data.user.nro_cedula != null
                    ? props.data.user.nro_cedula
                    : "N/D"}
                </td>
              </tr>
              <tr>
                <td>Fecha de donación:</td>
                <td className="text-end fw-bold">
                  {props.data.fecha_donacion != null
                    ? props.data.fecha_donacion
                    : "N/D"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InfoCertificado;
