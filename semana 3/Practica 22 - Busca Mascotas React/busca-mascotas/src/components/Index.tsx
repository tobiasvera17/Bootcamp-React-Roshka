const Index = () => {
  return (
    <div className="container-fluid p-0 m-0 index-component-container">
      <section
        className="page-section bg-secondary text-white mb-0"
        id="principal"
      >
        <div className="img-full">
          <div className="row pt-5">
            <div
              className="col-lg-5 ml-auto pt-5 text-center"
              style={{ marginTop: "40px" }}
            >
              <img
                src="/static/app/img/principal1.jpeg"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
                alt="Daw watching"
              />
            </div>
            <div
              className="col-lg-7 ml-auto pt-5 text-center"
              style={{ marginTop: "40px" }}
            >
              <h4 className="page-section-heading text-center text-dark bg-clear mx-2">
                Busca Mascota es una plataforma open-source, para que mascotas
                perdidas puedan reencontrarse con sus dueños. <br /> Puedes
                publicar tu mascota sin costo! Y también será publicado en las
                redes oficiales de Busca Mascota automáticamente.
                <br />
              </h4>
              <div className="page-section-heading text-center text-dark mb-3">
                <a
                  className="btn btn-warning btn-lg mt-2 mx-3 amarillo"
                  href="/map/"
                >
                  Buscar mi mascota
                </a>
                <a
                  className="btn btn-outline-dark btn-lg mt-2 ml-1"
                  href="/publicar/"
                >
                  Publicar mascota
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="page-section bg-secondary text-white mb-0"
        id="paraQuien"
      >
        <div className="row amarillo px-2 py-5 align-items-center">
          <div className="col-lg-6 text-center">
            <div className="bg-clear px-2">
              <h2 className="page-section-heading text-center text-dark pt-5">
                Quién puede utilizar el sitio?
              </h2>
              <h4 className="page-section-text text-dark pt-5">
                <ul>
                  <li>
                    Personas que han perdido su mascota y desean publicar un
                    reporte o buscar su mascota.
                  </li>
                  <li>
                    Personas que han encontrado o avistado una mascota que
                    parecía perdida y desean publicar un reporte.
                  </li>
                </ul>
              </h4>
              <h4 className="page-section-text text-center text-dark pt-5">
                Todo con el fin de que estas puedan reencontrarse con sus
                dueños.
              </h4>
              <br />
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="/static/app/img/paw-five.jpg"
              className="img-fluid"
              alt="Man and dog"
            />
          </div>
        </div>
      </section>
      <section className="page-section bg-secondary text-white mb-0">
    <div className="img-donate">
        <div className="row pt-5">
            <div className="col-lg-6 ml-auto pt-5" style={{"marginTop": "40px"}}>        
                <h4 className="page-section-heading text-center text-light">Puedes colaborar <br/> para que este sitio siga activo <br/> y funcionando siempre <br/> 
                    <a className="btn btn-info btn-lg mt-2 text-white" href="/colaborar/">
                        Colaborar
                    </a>
                </h4>
            </div>
            <div className="col-lg-4 ml-auto py-5 text-center" style={{"marginTop": "40px"}}>        
            </div>
        </div>
    </div>
</section>
    </div>
  );
};

export default Index;
