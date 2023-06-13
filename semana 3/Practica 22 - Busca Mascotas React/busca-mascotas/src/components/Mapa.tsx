const Mapa = () => {
  return (
    <div className="container-fluid p-5 m-0">
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-lg-10 amarillo p-3 rounded shadow">
          <form className="form">
            <div className="row my-3 justify-content-center align-items-center">
              <div className="col-auto">
                <div className="row">
                  <div className="col-auto">
                    <label className="form-label fw-bold p-1">
                      Tipo de reporte:
                    </label>
                  </div>
                  <div className="col-auto">
                    <select id="tipo_reporte" className="form-select">
                      <option value="todos">Todos</option>
                      <option value="perdido">Perdido</option>
                      <option value="avistado">Avistado</option>
                      <option value="retenido">Retenido</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="row">
                  <div className="col-auto">
                    <label className="form-label fw-bold p-1">
                      Fecha últ. vez visto:
                    </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="date"
                      id="ultima_vista_primero"
                      className="form-control"
                    />
                  </div>
                  <div className="col-auto">
                    <label className="form-label fw-bold p-1">a </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="date"
                      id="ultima_vista_segundo"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-3 justify-content-center align-items-center">
              <div className="col-auto">
                <div className="row">
                  <div className="col-auto">
                    <label className="form-label fw-bold p-1">Especie: </label>
                  </div>
                  <div className="col-auto">
                    <select id="especie" className="form-select">
                      <option value="todos">Todas</option>
                      <option value="perroo">Perro</option>
                      <option value="gato">Gato</option>
                      <option value="loro">Loro</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="row">
                  <div className="col-auto">
                    <label className="form-label fw-bold p-1">País: </label>
                  </div>
                  <div className="col-auto">
                    <input type="text" className="form-control" id="pais" />
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="row">
                  <div className="col-auto">
                    <label className="form-label fw-bold p-1">Ciudad </label>
                  </div>
                  <div className="col-auto">
                    <input type="text" className="form-control" id="ciudad" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-auto">
                <button className="btn btn-primary">Buscar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-lg-10 bg-danger">
          <div className="row justify-content-center alig-items-center">
            <div className="col-auto">
              <div
                className="btn-group"
                role="group"
              >
                <button type="button" className="btn btn-primary">
                  Mapa
                </button>
                <button type="button" className="btn btn-primary">
                  Lista
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
